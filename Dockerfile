# 多阶段构建：第一阶段 - 构建阶段
FROM --platform=linux/amd64 docker.io/node:18-alpine AS builder

# 设置工作目录
WORKDIR /app

# 复制package.json和package-lock.json
COPY package*.json ./

# 安装所有依赖（包括开发依赖，用于构建）
RUN npm ci

# 复制源代码和数据文件
COPY src/ ./src/
COPY public/ ./public/
COPY webpack.config.js ./

# 构建应用
RUN npm run build

# 复制数据文件到dist目录
RUN mkdir -p dist/data/integrated_results && \
    cp -r public/data/integrated_results/*.json dist/data/integrated_results/

# 多阶段构建：第二阶段 - 生产阶段（使用更轻量的nginx）
FROM --platform=linux/amd64 docker.io/nginx:alpine

# 复制构建结果到nginx静态文件目录
COPY --from=builder /app/dist /usr/share/nginx/html

# 复制nginx配置文件
COPY nginx.conf /etc/nginx/nginx.conf

# 暴露端口
EXPOSE 1009

# 启动nginx
CMD ["nginx", "-g", "daemon off;"]