import React from 'react';

const DashboardScreen = () => {
  // 计算真实统计数据
  const totalVideos = 11491; // 真实数据总量
  const uniqueUps = 115; // 真实UP主数量
  const estimatedViews = Math.round(totalVideos * 50000); // 假设每个视频平均5万播放

  return (
    <div className="screen">
      <h1 className="title">数据统计</h1>
      <p className="subtitle">基于真实爬取数据</p>
      
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-number">11,491</div>
          <div className="stat-label">总视频数</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">115</div>
          <div className="stat-label">UP主数</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">57,455万</div>
          <div className="stat-label">估算播放量</div>
        </div>
      </div>
      
      <div className="data-info">
        <p><strong>数据来源:</strong> crawled_results文件夹</p>
        <p><strong>数据更新时间:</strong> 2025-11-22</p>
        <p><strong>包含UP主:</strong> 115个</p>
        <p><strong>数据文件:</strong> 115个JSON文件</p>
        <p><strong>数据总量:</strong> 11,491个视频</p>
      </div>
    </div>
  );
};

export default DashboardScreen;