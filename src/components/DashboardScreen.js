import React from 'react';

const DashboardScreen = () => {
  // 使用整合数据的统计数据
  const totalVideos = 90110; // 整合数据视频总量
  const uniqueUps = 396; // 整合数据UP主数量
  const estimatedViews = Math.round(totalVideos * 50000); // 假设每个视频平均5万播放

  return (
    <div className="screen">
      <h1 className="title">数据统计</h1>
      <p className="subtitle">基于整合后的UP主视频数据</p>
      
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-number">90,110</div>
          <div className="stat-label">总视频数</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">396</div>
          <div className="stat-label">UP主数</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">450,550万</div>
          <div className="stat-label">估算播放量</div>
        </div>
      </div>
      
      <div className="data-info">
        <p><strong>数据来源:</strong> integrated_results文件夹（整合数据）</p>
        <p><strong>数据更新时间:</strong> 2025-12-04</p>
        <p><strong>包含UP主:</strong> 396个（已修复UP主名称）</p>
        <p><strong>数据文件:</strong> 396个JSON文件</p>
        <p><strong>数据总量:</strong> 90,110个视频</p>
        <p><strong>数据特点:</strong> UP主名称已修复，数据格式统一</p>
      </div>
    </div>
  );
};

export default DashboardScreen;