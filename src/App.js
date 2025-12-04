import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import DashboardScreen from './components/DashboardScreen';
import VideoScreen from './components/VideoScreen';
import SettingsScreen from './components/SettingsScreen';
import './styles/App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'dashboard':
        return <DashboardScreen />;
      case 'videos':
        return <VideoScreen />;
      case 'settings':
        return <SettingsScreen />;
      default:
        return <DashboardScreen />;
    }
  };

  return (
    <div className="app">
      {/* 顶部导航栏 */}
      <nav className="top-nav-bar">
        <button 
          className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          首页
        </button>
        
        <button 
          className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          数据
        </button>
        
        <button 
          className={`nav-item ${activeTab === 'videos' ? 'active' : ''}`}
          onClick={() => setActiveTab('videos')}
        >
          视频
        </button>
        
        <button 
          className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          设置
        </button>
      </nav>

      {/* 主内容区域 */}
      <main className="content">
        {renderScreen()}
      </main>
    </div>
  );
};

export default App;