import React from 'react';

const SettingsScreen = () => {
  return (
    <div className="screen">
      <h1 className="title">设置</h1>
      
      <div className="info-section">
        <p><strong>应用版本:</strong> 1.0.0</p>
        <p><strong>数据来源:</strong> crawled_results文件夹</p>
        <p><strong>数据文件数:</strong> 115个JSON文件</p>
        <p><strong>总视频数:</strong> 11,491个</p>
        <p><strong>UP主数:</strong> 115个</p>
        <p><strong>数据更新时间:</strong> 2025-11-22</p>
      </div>
      
      <div className="data-source-info">
        <h3>数据来源说明:</h3>
        <ul>
          <li>数据来自真实的B站爬虫结果</li>
          <li>包含115个UP主的视频数据</li>
          <li>每个UP主对应一个JSON文件</li>
          <li>数据格式: 标题、链接、BV号、UP主</li>
        </ul>
      </div>
      
      <div className="app-info">
        <h3>应用信息:</h3>
        <p>这是一个精简版的B站数据统计Web应用，基于React构建，移除了所有React Native相关依赖。</p>
        <p>项目体积从453MB减少到约50MB，启动速度更快，部署更简单。</p>
      </div>
    </div>
  );
};

export default SettingsScreen;