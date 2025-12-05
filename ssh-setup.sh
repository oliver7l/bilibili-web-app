#!/bin/bash

# 0015-bilibili-web-app项目SSH免密码连接配置脚本
# 配置115服务器的免密码SSH连接

echo "🔧 配置115服务器免密码SSH连接..."

# 服务器信息（从1007项目获取）
SERVER_IP="115.175.3.95"
SSH_PORT="7002"
SSH_USER="keedor"

# 检查SSH目录
echo "📁 检查SSH配置目录..."
if [ ! -d ~/.ssh ]; then
    mkdir -p ~/.ssh
    chmod 700 ~/.ssh
    echo "✅ SSH目录创建完成"
else
    echo "✅ SSH目录已存在"
fi

# 检查现有的keedor密钥
echo "🔐 检查现有的keedor SSH密钥..."
if [ -f ~/.ssh/id_rsa_keedor5 ]; then
    echo "✅ 发现现有的keedor密钥，将使用此密钥"
    KEY_FILE="~/.ssh/id_rsa_keedor5"
elif [ -f ~/.ssh/id_rsa_keedor ]; then
    echo "✅ 发现现有的keedor密钥，将使用此密钥"
    KEY_FILE="~/.ssh/id_rsa_keedor"
else
    echo "🔑 生成新的SSH密钥对..."
    ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa_keedor -N ""
    KEY_FILE="~/.ssh/id_rsa_keedor"
    echo "✅ SSH密钥生成完成"
fi

# 配置SSH config文件
echo "⚙️ 配置SSH config文件..."
cat >> ~/.ssh/config << EOF

# 115服务器 - 0015项目部署 (keedor用户)
Host 115-0015
    HostName $SERVER_IP
    Port $SSH_PORT
    User $SSH_USER
    IdentityFile $KEY_FILE
    ForwardAgent yes
    ServerAliveInterval 60
    ServerAliveCountMax 3

EOF

chmod 600 ~/.ssh/config

# 显示公钥
echo "📋 您的SSH公钥内容："
if [ -f ~/.ssh/id_rsa_keedor5.pub ]; then
    cat ~/.ssh/id_rsa_keedor5.pub
elif [ -f ~/.ssh/id_rsa_keedor.pub ]; then
    cat ~/.ssh/id_rsa_keedor.pub
else
    echo "❌ 未找到公钥文件"
fi

echo ""
echo "📝 请将上面的公钥内容添加到115服务器的 ~/.ssh/authorized_keys 文件中"
echo ""
echo "🔗 测试连接命令："
echo "   ssh 115-0015"
echo ""
echo "✅ SSH免密码连接配置完成！"