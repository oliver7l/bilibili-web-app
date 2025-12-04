#!/bin/bash

echo "🚀 开始部署0015项目到GitHub Pages"
echo "================================"

# 检查Git状态
echo "📊 检查Git状态..."
git status

# 添加所有文件到暂存区
echo "📦 添加文件到暂存区..."
git add .

# 提交更改
echo "💾 提交更改..."
git commit -m "部署B站数据统计Web应用"

echo ""
echo "✅ 本地Git操作完成！"
echo ""
echo "📋 接下来需要手动执行的步骤："
echo "1. 访问 https://github.com/new"
echo "2. 创建新仓库，名称: bilibili-web-app"
echo "3. 复制仓库的HTTPS地址"
echo "4. 运行以下命令添加远程仓库："
echo "   git remote add origin <你的仓库地址>"
echo "5. 运行以下命令推送代码："
echo "   git branch -M main"
echo "   git push -u origin main"
echo "6. 在GitHub仓库设置中启用GitHub Pages"
echo ""
echo "🌐 部署完成后，应用将在以下地址访问："
echo "   https://你的用户名.github.io/bilibili-web-app"

# 检查是否已设置远程仓库
if git remote -v | grep -q origin; then
    echo ""
    echo "🔗 检测到已设置远程仓库，自动推送代码..."
    git branch -M main
    git push -u origin main
    echo ""
    echo "✅ 代码推送完成！"
    echo "请前往GitHub仓库设置中启用GitHub Pages"
fi