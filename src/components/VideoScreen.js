import React, { useState, useEffect } from 'react';

// 获取所有数据文件列表
const getAllDataFiles = async () => {
  try {
    // 这里我们无法直接读取目录，所以需要预定义所有可能的文件
    // 在实际项目中，可以通过后端API获取文件列表
    const allFiles = [
      'up_10119428_videos_smart_20251122_161031.json',
      'up_11131476_videos_smart_20251122_115836.json',
      'up_1140672573_videos_smart_20251122_131604.json',
      'up_11646119_videos_smart_20251122_140018.json',
      'up_11870568_videos_smart_20251122_151136.json',
      'up_125526_videos_smart_20251122_201638.json',
      'up_12855005_videos_smart_20251122_173916.json',
      'up_13164144_videos_smart_20251122_142913.json',
      'up_13354765_videos_smart_20251122_134107.json',
      'up_1335713025_videos_smart_20251122_190032.json'
    ];
    
    return allFiles;
  } catch (error) {
    console.error('获取文件列表失败:', error);
    return [];
  }
};

// 随机选择数组元素
const getRandomElements = (array, count) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// 加载真实爬取数据
const loadCrawledData = async () => {
  try {
    const allFiles = await getAllDataFiles();
    
    if (allFiles.length === 0) {
      throw new Error('没有可用的数据文件');
    }
    
    // 随机选择5个UP主的数据文件
    const selectedFiles = getRandomElements(allFiles, 5);
    console.log('随机选择的UP主文件:', selectedFiles);
    
    let allVideos = [];
    
    // 加载每个UP主的数据，并随机选择2个视频
    for (const file of selectedFiles) {
      try {
        const fileResponse = await fetch(`/data/crawled_results/${file}`);
        const fileData = await fileResponse.json();
        
        // 随机选择2个视频
        const randomVideos = getRandomElements(fileData, 2);
        
        // 转换为应用需要的格式
        const videos = randomVideos.map((item, index) => ({
          id: `${file}_${index}_${Date.now()}`,
          title: item.标题,
          bvid: item.BV号,
          up: item.UP主,
          link: item.链接
        }));
        
        allVideos = [...allVideos, ...videos];
        console.log(`从 ${file} 随机选择 ${videos.length} 个视频`);
      } catch (error) {
        console.error(`加载文件 ${file} 失败:`, error);
      }
    }
    
    console.log(`总共成功加载 ${allVideos.length} 个真实视频数据`);
    console.log('随机选择的UP主数量:', selectedFiles.length);
    console.log('每个UP主选择的视频数量: 2');
    
    return allVideos;
  } catch (error) {
    console.error('加载爬取数据失败:', error);
    
    // 如果加载失败，使用备用数据
    const backupData = [
      {
        "标题": "女性地狱？挑战男扮女装在印度旅行 我都遭遇了什么？印度真有那么恐怖吗？",
        "链接": "https://www.bilibili.com/video/BV1mWCVBxE8W",
        "BV号": "BV1mWCVBxE8W",
        "UP主": "UP主10119428",
        "来源": "浏览器"
      }
    ];
    
    return backupData.map((item, index) => ({
      id: `backup_${index}`,
      title: item.标题,
      bvid: item.BV号,
      up: item.UP主,
      link: item.链接
    }));
  }
};

const VideoScreen = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [realVideos, setRealVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const videos = await loadCrawledData();
      setRealVideos(videos);
      setLoading(false);
    };
    
    loadData();
  }, []);
  
  const handleVideoPress = (videoLink) => {
    // 在应用内打开视频，而不是跳转到外部浏览器
    setCurrentVideo(videoLink);
  };
  
  const closeVideoPlayer = () => {
    setCurrentVideo(null);
  };

  return (
    <div className="screen">
      <h1 className="title">UP主视频列表</h1>
      
      {/* 视频播放器 */}
      {currentVideo && (
        <div className="video-player-container">
          <div className="video-player-header">
            <h2 className="video-player-title">视频播放器</h2>
            <button onClick={closeVideoPlayer} className="close-button">
              ×
            </button>
          </div>
          <div className="video-player">
            <iframe 
              src={currentVideo.replace('www.bilibili.com/video/', 'player.bilibili.com/player.html?bvid=')}
              width="100%" 
              height="100%" 
              scrolling="no" 
              frameBorder="no" 
              allowFullScreen
              className="video-iframe"
            />
          </div>
        </div>
      )}
      
      {/* 视频列表 */}
      <div className="video-list">
        {loading ? (
        <div className="loading-container">
          <p>正在随机选择并加载视频数据...</p>
          <p>已发现 {realVideos.length} 个视频</p>
        </div>
      ) : (
        <>
          <div className="data-info">
            <p>已随机选择 {realVideos.length} 个视频数据<br/>
            <small>（从5个UP主中每个随机选择2个视频）</small></p>
          </div>
            {realVideos.map(video => (
              <div 
                key={video.id} 
                className="video-card"
                onClick={() => handleVideoPress(video.link)}
              >
                <h3 className="video-title">{video.title}</h3>
                <p className="video-info">BV号: {video.bvid}</p>
                <p className="video-info">UP主: {video.up}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default VideoScreen;