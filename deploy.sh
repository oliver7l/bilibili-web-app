#!/bin/bash

echo "🚀 开始部署0015项目到GitHub Pages"
echo "================================"

# 检查Git状态
echo "📊 检查Git状态..."
git status

# 检查是否已设置远程仓库
if git remote -v | grep -q origin; then
    echo "✅ 检测到已设置远程仓库"
    echo "� 远程仓库地址："
    git remote -v
else
    echo "⚠️ 未检测到远程仓库设置"
    echo ""
    echo "📋 请按照以下步骤创建GitHub仓库："
    echo "1. 访问 https://github.com/new"
    echo "2. 创建新仓库，名称: bilibili-web-app"
    echo "3. 复制仓库的HTTPS地址"
    echo "4. 运行以下命令添加远程仓库："
    echo "   git remote add origin https://github.com/你的用户名/bilibili-web-app.git"
    echo "5. 运行以下命令推送代码："
    echo "   git branch -M main"
    echo "   git push -u origin main"
    echo ""
    
    # 尝试使用GitHub API创建仓库
    echo "🔧 尝试使用GitHub API创建仓库..."
    if command -v curl &> /dev/null; then
        echo "请输入你的GitHub用户名："
        read -r github_username
        echo "请输入你的GitHub个人访问令牌："
        read -r github_token
        
        if [ -n "$github_username" ] && [ -n "$github_token" ]; then
            echo "正在创建GitHub仓库..."
            response=$(curl -s -X POST \
                -H "Authorization: token $github_token" \
                -H "Accept: application/vnd.github.v3+json" \
                -d '{"name":"bilibili-web-app","description":"精简版B站数据统计Web应用","private":false}' \
                https://api.github.com/user/repos)
            
            if echo "$response" | grep -q '"html_url"'; then
                echo "✅ GitHub仓库创建成功！"
                git remote add origin https://github.com/$github_username/bilibili-web-app.git
                git branch -M main
                git push -u origin main
                echo ""
                echo "✅ 代码推送完成！"
                echo "请前往GitHub仓库设置中启用GitHub Pages"
                echo "🌐 访问地址：https://$github_username.github.io/bilibili-web-app"
            else
                echo "❌ GitHub仓库创建失败，请手动创建"
            fi
        else
            echo "❌ 未提供GitHub用户名或令牌，请手动创建仓库"
        fi
    else
        echo "❌ curl命令未找到，请手动创建仓库"
    fi
fi

# 如果已设置远程仓库，直接推送
echo ""
echo "📤 推送代码到远程仓库..."
git branch -M main
git push -u origin main

echo ""
echo "✅ 部署完成！"
echo "🌐 请前往GitHub仓库设置中启用GitHub Pages："
echo "   Settings → Pages → Source: GitHub Actions"
echo ""
echo "📱 应用将在以下地址访问："
echo "   https://你的用户名.github.io/bilibili-web-app"