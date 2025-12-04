import React, { useState } from 'react';

// 加载真实爬取数据
const loadCrawledData = () => {
  const realVideoData = [
    {
      "标题": "女性地狱？挑战男扮女装在印度旅行 我都遭遇了什么？印度真有那么恐怖吗？",
      "链接": "https://www.bilibili.com/video/BV1mWCVBxE8W",
      "BV号": "BV1mWCVBxE8W",
      "UP主": "UP主10119428",
      "来源": "浏览器"
    },
    {
      "标题": "内娱清纯顶流背后，竟藏着一个巨鳄家族：带资进组、霸凌同僚、侵吞国资，深扒虞书欣家族背后的秘密",
      "链接": "https://www.bilibili.com/video/BV1jTU5BREVN",
      "BV号": "BV1jTU5BREVN",
      "UP主": "UP主10119428",
      "来源": "浏览器"
    },
    {
      "标题": "【忍唱大挑战】二十年前的\"广告曲\"质量有多可怕？随便一首都能吊打当今乐坛",
      "链接": "https://www.bilibili.com/video/BV12JCuBkEgu",
      "BV号": "BV12JCuBkEgu",
      "UP主": "UP主10119428",
      "来源": "浏览器"
    },
    {
      "标题": "我妈眼中的我…",
      "链接": "https://www.bilibili.com/video/BV1GRygBaEys",
      "BV号": "BV1GRygBaEys",
      "UP主": "UP主10119428",
      "来源": "浏览器"
    },
    {
      "标题": "伦敦贫民窟vs顶级庄园，英国人真实居住环境是什么样的？",
      "链接": "https://www.bilibili.com/video/BV1ZrC1BPEXd",
      "BV号": "BV1ZrC1BPEXd",
      "UP主": "UP主10119428",
      "来源": "浏览器"
    },
    {
      "标题": "台湾没事，日本就不能有事？【毒舌的南瓜】",
      "链接": "https://www.bilibili.com/video/BV1HxCXBtEt2",
      "BV号": "BV1HxCXBtEt2",
      "UP主": "UP主10119428",
      "来源": "浏览器"
    },
    {
      "标题": "什么游戏可以拿年度游戏？",
      "链接": "https://www.bilibili.com/video/BV1nPUjBvEYa",
      "BV号": "BV1nPUjBvEYa",
      "UP主": "UP主10119428",
      "来源": "浏览器"
    },
    {
      "标题": "探秘中国最强自助餐！帝王蟹龙虾不限量，能吃回本吗?",
      "链接": "https://www.bilibili.com/video/BV1VuyMBsEhz",
      "BV号": "BV1VuyMBsEhz",
      "UP主": "UP主10119428",
      "来源": "浏览器"
    },
    {
      "标题": "我，高市早苗，就是没有错！",
      "链接": "https://www.bilibili.com/video/BV1mzCdBLE7t",
      "BV号": "BV1mzCdBLE7t",
      "UP主": "UP主10119428",
      "来源": "浏览器"
    },
    {
      "标题": "三胞胎姐妹里唯一结婚的那个，离婚了",
      "链接": "https://www.bilibili.com/video/BV1QnUjBXEVr",
      "BV号": "BV1QnUjBXEVr",
      "UP主": "UP主10119428",
      "来源": "浏览器"
    }
  ];
  
  // 转换为应用需要的格式
  return realVideoData.map((item, index) => ({
    id: (index + 1).toString(),
    title: item.标题,
    bvid: item.BV号,
    up: item.UP主,
    link: item.链接
  }));
};

const realVideos = loadCrawledData();

const VideoScreen = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  
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
      </div>
    </div>
  );
};

export default VideoScreen;