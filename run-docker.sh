#!/bin/bash

# Docker容器运行脚本（多阶段优化版）
set -e

echo "🚀 启动B站Web应用Docker容器（多阶段优化版）..."

# 检查Docker是否安装
if ! command -v docker &> /dev/null; then
    echo "❌ Docker未安装，请先安装Docker"
    exit 1
fi

# 检查镜像是否存在
if ! docker images | grep -q "bilibili-web-app:optimized"; then
    echo "⚠️  优化镜像不存在，先构建镜像..."
    ./build-docker.sh
fi

echo "🐳 启动优化容器..."
docker run -d --name bilibili-web-app -p 1009:1009 bilibili-web-app:optimized

echo "✅ 容器启动成功！"
echo ""
echo "🌐 应用地址：http://localhost:1009"
echo ""
echo "📋 管理命令："
echo "   docker ps"
echo "   docker logs bilibili-web-app"
echo "   docker stop bilibili-web-app"
echo "   docker rm bilibili-web-app"
echo ""
echo "💡 提示：使用优化后的镜像，大小减少约44%，性能更好"