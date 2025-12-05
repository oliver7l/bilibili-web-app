#!/bin/bash

# 0015-bilibili-web-app 远程容器启动脚本
# 用于在远程服务器上加载Docker镜像并启动容器

# SSH别名配置
SSH_ALIAS="115-0015"
PROJECT_NAME="0015-bilibili-web-app"
REMOTE_IMAGE_DIR="/vol2/1000/0004-Mac迷你同步"
REMOTE_DEPLOY_DIR="/vol3/1000/0005-我的docker镜像/$PROJECT_NAME"

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 日志函数
log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 测试连接
test_connection() {
    log_info "测试远程免密码连接..."
    if ssh $SSH_ALIAS "echo '免密码连接成功'"; then
        log_info "远程免密码连接测试通过"
        return 0
    else
        log_error "远程免密码连接失败，请先配置SSH连接"
        return 1
    fi
}

# 检查镜像文件是否存在
check_image_file() {
    log_info "检查远程镜像文件..."
    if ssh $SSH_ALIAS "[ -f $REMOTE_IMAGE_DIR/bilibili-web-app.tar ]"; then
        log_info "镜像文件存在: $REMOTE_IMAGE_DIR/bilibili-web-app.tar"
        return 0
    else
        log_error "镜像文件不存在: $REMOTE_IMAGE_DIR/bilibili-web-app.tar"
        return 1
    fi
}

# 加载Docker镜像
load_docker_image() {
    log_info "加载Docker镜像..."
    
    # 检查是否已存在同名镜像
    ssh $SSH_ALIAS "docker images | grep bilibili-web-app"
    if [ $? -eq 0 ]; then
        log_warn "检测到已存在的bilibili-web-app镜像，将先删除旧镜像"
        ssh $SSH_ALIAS "docker rmi bilibili-web-app:latest"
    fi
    
    # 加载镜像
    ssh $SSH_ALIAS "cd $REMOTE_IMAGE_DIR && docker load -i bilibili-web-app.tar"
    
    if [ $? -eq 0 ]; then
        log_info "Docker镜像加载成功"
        return 0
    else
        log_error "Docker镜像加载失败"
        return 1
    fi
}

# 启动Docker容器
start_docker_container() {
    log_info "启动Docker容器..."
    
    # 停止并删除已存在的容器
    ssh $SSH_ALIAS "docker stop bilibili-web-app-container 2>/dev/null"
    ssh $SSH_ALIAS "docker rm bilibili-web-app-container 2>/dev/null"
    
    # 启动新容器
    ssh $SSH_ALIAS "docker run -d --name bilibili-web-app-container -p 10015:10015 bilibili-web-app:latest"
    
    if [ $? -eq 0 ]; then
        log_info "Docker容器启动成功"
        return 0
    else
        log_error "Docker容器启动失败"
        return 1
    fi
}

# 验证容器状态
verify_container_status() {
    log_info "验证容器状态..."
    
    # 检查容器是否正在运行
    ssh $SSH_ALIAS "docker ps | grep bilibili-web-app-container"
    
    if [ $? -eq 0 ]; then
        log_info "容器正在运行"
        
        # 检查容器日志
        log_info "容器启动日志:"
        ssh $SSH_ALIAS "docker logs bilibili-web-app-container --tail 10"
        
        return 0
    else
        log_error "容器未运行"
        return 1
    fi
}

# 显示部署信息
show_deployment_info() {
    log_info "=== 部署完成 ==="
    echo "项目名称: $PROJECT_NAME"
    echo "服务器地址: 115.175.3.95"
    echo "镜像位置: $REMOTE_IMAGE_DIR"
    echo "部署目录: $REMOTE_DEPLOY_DIR"
    echo "访问地址: http://115.175.3.95:10015"
    echo ""
    echo "管理命令:"
    echo "  ssh $SSH_ALIAS"
    echo "  docker ps | grep bilibili-web-app"
    echo "  docker logs bilibili-web-app-container"
    echo "  docker restart bilibili-web-app-container"
}

# 主启动流程
main() {
    log_info "开始在远程服务器上启动0015-bilibili-web-app容器..."
    
    # 执行启动步骤
    test_connection || exit 1
    check_image_file || exit 1
    load_docker_image || exit 1
    start_docker_container || exit 1
    verify_container_status || exit 1
    show_deployment_info
    
    log_info "容器启动完成！"
}

# 执行主函数
main "$@"