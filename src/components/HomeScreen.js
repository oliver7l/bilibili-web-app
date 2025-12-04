import React from 'react';

const HomeScreen = () => {
  return (
    <div className="screen">
      <h1 className="title">B站数据统计应用</h1>
      <p className="subtitle">欢迎使用B站UP主数据分析工具</p>
      <div className="feature-grid">
        <div className="feature-card">
          <h3>数据统计</h3>
          <p>查看详细的UP主视频数据统计</p>
        </div>
        <div className="feature-card">
          <h3>视频浏览</h3>
          <p>浏览和播放B站视频内容</p>
        </div>
        <div className="feature-card">
          <h3>数据分析</h3>
          <p>基于真实爬取数据的分析报告</p>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;