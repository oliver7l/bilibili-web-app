#!/bin/bash

# 0015-bilibili-web-app 项目上传脚本
# 使用SSH别名免密码连接

# SSH别名配置
SSH_ALIAS="115-0015"
PROJECT_NAME="0015-bilibili-web-app"
REMOTE_DIR="/vol3/1000/0005-我的docker镜像/$PROJECT_NAME"

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
        log_error "远程免密码连接失败，请先运行 ssh-setup.sh 配置SSH连接"
        return 1
    fi
}

# 创建远程目录
create_remote_directory() {
    log_info "创建远程目录: $REMOTE_DIR"
    ssh $SSH_ALIAS "
        mkdir -p $REMOTE_DIR
        mkdir -p $REMOTE_DIR/dist
        mkdir -p $REMOTE_DIR/public/data/integrated_results
    "
    
    if [ $? -eq 0 ]; then
        log_info "远程目录创建成功"
    else
        log_error "远程目录创建失败"
        return 1
    fi
}

# 上传构建后的文件
upload_build_files() {
    log_info "上传构建后的文件..."
    
    # 上传dist目录
    scp -r dist/ $SSH_ALIAS:$REMOTE_DIR/
    
    # 上传数据文件
    scp -r public/data/integrated_results/ $SSH_ALIAS:$REMOTE_DIR/public/data/
    
    # 上传必要的配置文件
    scp Dockerfile $SSH_ALIAS:$REMOTE_DIR/
    scp docker-compose.yml $SSH_ALIAS:$REMOTE_DIR/
    scp package.json $SSH_ALIAS:$REMOTE_DIR/
    
    if [ $? -eq 0 ]; then
        log_info "文件上传成功"
    else
        log_error "文件上传失败"
        return 1
    fi
}

# 在本地构建并保存Docker镜像
build_docker_local() {
    log_info "在本地构建Docker镜像..."
    
    docker build -t bilibili-web-app:latest .
    
    if [ $? -eq 0 ]; then
        log_info "本地Docker镜像构建成功"
    else
        log_error "本地Docker镜像构建失败"
        return 1
    fi

    log_info "保存Docker镜像为tar文件..."
    
    docker save -o bilibili-web-app.tar bilibili-web-app:latest
    
    if [ $? -eq 0 ]; then
        log_info "Docker镜像保存成功"
    else
        log_error "Docker镜像保存失败"
        return 1
    fi

    log_info "上传Docker镜像到远程服务器..."
    
    scp bilibili-web-app.tar $SSH_ALIAS:$REMOTE_DIR/
    
    if [ $? -eq 0 ]; then
        log_info "Docker镜像上传成功"
    else
        log_error "Docker镜像上传失败"
        return 1
    fi

    log_info "在远程服务器加载Docker镜像..."
    
    ssh $SSH_ALIAS "cd $REMOTE_DIR && docker load -i bilibili-web-app.tar"
    
    if [ $? -eq 0 ]; then
        log_info "Docker镜像加载成功"
    else
        log_error "Docker镜像加载失败"
        return 1
    fi

    log_info "清理本地临时文件..."
    rm -f bilibili-web-app.tar
}

# 启动Docker容器
start_docker_container() {
    log_info "启动Docker容器..."
    
    ssh $SSH_ALIAS "
        docker stop bilibili-web-app-container 2>/dev/null
        docker rm bilibili-web-app-container 2>/dev/null
        docker run -d --name bilibili-web-app-container -p 10015:10015 bilibili-web-app:latest
    "
    
    if [ $? -eq 0 ]; then
        log_info "Docker容器启动成功"
    else
        log_error "Docker容器启动失败"
        return 1
    fi
}

# 显示部署信息
show_deployment_info() {
    log_info "=== 部署完成 ==="
    echo "项目名称: $PROJECT_NAME"
    echo "服务器地址: 115.175.3.95"
    echo "部署目录: $REMOTE_DIR"
    echo "访问地址: http://115.175.3.95:10015"
    echo ""
    echo "管理命令:"
    echo "  ssh $SSH_ALIAS"
    echo "  cd $REMOTE_DIR && docker-compose logs"
    echo "  cd $REMOTE_DIR && docker-compose restart"
}

# 主上传流程
main() {
    log_info "开始上传0015-bilibili-web-app项目到远程服务器..."
    
    # 执行上传步骤
    test_connection || exit 1
    create_remote_directory || exit 1
    upload_build_files || exit 1
    build_docker_local || exit 1
    start_docker_container || exit 1
    show_deployment_info
    
    log_info "上传完成！"
}

# 执行主函数
main "$@"