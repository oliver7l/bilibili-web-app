#!/bin/bash

# Docker Compose运行脚本
set -e

echo "🚀 使用Docker Compose启动B站Web应用..."

# 检查Docker Compose是否安装
if ! command -v docker-compose &> /dev/null; then
    if ! command -v docker compose &> /dev/null; then
        echo "❌ Docker Compose未安装，请先安装Docker Compose"
        exit 1
    else
        DOCKER_COMPOSE="docker compose"
    fi
else
    DOCKER_COMPOSE="docker-compose"
fi

echo "🐳 启动服务..."
$DOCKER_COMPOSE up -d

echo "⏳ 等待服务启动..."
sleep 5

echo "✅ 服务启动完成！"
echo ""
echo "🌐 应用地址：http://localhost:1009"
echo ""
echo "📋 管理命令："
echo "   $DOCKER_COMPOSE ps"
echo "   $DOCKER_COMPOSE logs"
echo "   $DOCKER_COMPOSE down"
echo "   $DOCKER_COMPOSE restart"
echo ""