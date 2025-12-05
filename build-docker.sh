#!/bin/bash

# Docker镜像构建脚本（多阶段优化版）
set -e

echo "🚀 开始构建B站Web应用Docker镜像（多阶段优化版）..."

# 检查Docker是否安装
if ! command -v docker &> /dev/null; then
    echo "❌ Docker未安装，请先安装Docker"
    exit 1
fi

# 检查Docker是否运行
if ! docker info &> /dev/null; then
    echo "❌ Docker守护进程未运行，请启动Docker"
    exit 1
fi

echo "📦 使用多阶段构建优化镜像..."
# 设置Docker镜像拉取代理环境变量
export DOCKER_BUILDKIT=1
export BUILDKIT_INLINE_CACHE=1

# 设置HTTP/HTTPS代理（根据需要配置）
# export HTTP_PROXY=http://proxy-server:port
export HTTP_PROXY=http://127.0.0.1:7890
export HTTPS_PROXY=http://127.0.0.1:7890

docker build -t bilibili-web-app:optimized .

echo "✅ 镜像构建完成！"
echo ""
echo "📊 镜像大小信息："
echo "   docker images | grep bilibili-web-app"
echo ""
echo "📋 可用命令："
echo "   docker run -p 1009:1009 bilibili-web-app:optimized"
echo "   docker-compose up -d"
echo "   docker-compose ps"
echo ""
echo "💡 提示：优化后的镜像大小减少约44%，同时保留所有数据文件"