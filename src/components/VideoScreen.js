import React, { useState, useEffect } from 'react';

// 获取所有数据文件列表
const getAllDataFiles = async () => {
  try {
    // 整合数据文件列表 - 使用修复后的UP主数据
    const integratedFiles = [
      'UP主10119428_UP主10119428_视频数据.json',
      'UP主11131476_UP主11131476_视频数据.json',
      'UP主1140672573_UP主1140672573_视频数据.json',
      'UP主11646119_UP主11646119_视频数据.json',
      'UP主11870568_UP主11870568_视频数据.json',
      'UP主125526_老番茄_视频数据.json',
      'UP主12855005_UP主12855005_视频数据.json',
      'UP主13164144_UP主13164144_视频数据.json',
      'UP主13354765_UP主13354765_视频数据.json',
      'UP主1335713025_UP主1335713025_视频数据.json',
      'UP主1359172699_UP主1359172699_视频数据.json',
      'UP主1372433_UP主1372433_视频数据.json',
      'UP主14110780_UP主14110780_视频数据.json',
      'UP主1455861172_UP主1455861172_视频数据.json',
      'UP主1458143131_UP主1458143131_视频数据.json',
      'UP主14804670_UP主14804670_视频数据.json',
      'UP主1577804_UP主1577804_视频数据.json',
      'UP主15960317_UP主15960317_视频数据.json',
      'UP主1629347259_UP主1629347259_视频数据.json',
      'UP主1653246909_UP主1653246909_视频数据.json',
      'UP主168598_UP主168598_视频数据.json',
      'UP主170948267_UP主170948267_视频数据.json',
      'UP主17134369_UP主17134369_视频数据.json',
      'UP主1724598_UP主1724598_视频数据.json',
      'UP主17320022_UP主17320022_视频数据.json',
      'UP主1773346_UP主1773346_视频数据.json',
      'UP主17819768_UP主17819768_视频数据.json',
      'UP主18202105_UP主18202105_视频数据.json',
      'UP主1838326986_UP主1838326986_视频数据.json',
      'UP主1869712375_UP主1869712375_视频数据.json',
      'UP主1875245620_UP主1875245620_视频数据.json',
      'UP主2017611_UP主2017611_视频数据.json',
      'UP主207261582_UP主207261582_视频数据.json',
      'UP主2080529_UP主2080529_视频数据.json',
      'UP主23947287_UP主23947287_视频数据.json',
      'UP主25876945_UP主25876945_视频数据.json',
      'UP主259333_UP主259333_视频数据.json',
      'UP主26032219_UP主26032219_视频数据.json',
      'UP主261485584_UP主261485584_视频数据.json',
      'UP主263090405_UP主263090405_视频数据.json',
      'UP主280793434_UP主280793434_视频数据.json',
      'UP主29329085_UP主29329085_视频数据.json',
      'UP主294882749_UP主294882749_视频数据.json',
      'UP主296092268_UP主296092268_视频数据.json',
      'UP主304578055_UP主304578055_视频数据.json',
      'UP主306936843_UP主306936843_视频数据.json',
      'UP主313580179_UP主313580179_视频数据.json',
      'UP主314521322_UP主314521322_视频数据.json',
      'UP主32741563_UP主32741563_视频数据.json',
      'UP主330415548_UP主330415548_视频数据.json',
      'UP主33063673_UP主33063673_视频数据.json',
      'UP主337312411_UP主337312411_视频数据.json',
      'UP主353368172_UP主353368172_视频数据.json',
      'UP主3546563922102817_UP主3546563922102817_视频数据.json',
      'UP主3546776042736296_UP主3546776042736296_视频数据.json',
      'UP主361775100_UP主361775100_视频数据.json',
      'UP主375375_UP主375375_视频数据.json',
      'UP主37663924_UP主37663924_视频数据.json',
      'UP主37754047_UP主37754047_视频数据.json',
      'UP主386869863_UP主386869863_视频数据.json',
      'UP主394609671_UP主394609671_视频数据.json',
      'UP主395135643_UP主395135643_视频数据.json',
      'UP主395877542_UP主395877542_视频数据.json',
      'UP主39737405_UP主39737405_视频数据.json',
      'UP主398877923_UP主398877923_视频数据.json',
      'UP主401657359_UP主401657359_视频数据.json',
      'UP主405370021_UP主405370021_视频数据.json',
      'UP主406636263_UP主406636263_视频数据.json',
      'UP主414350632_UP主414350632_视频数据.json',
      'UP主419872064_UP主419872064_视频数据.json',
      'UP主423895_UP主423895_视频数据.json',
      'UP主4253446_UP主4253446_视频数据.json',
      'UP主42561463_UP主42561463_视频数据.json',
      'UP主42870908_UP主42870908_视频数据.json',
      'UP主437744340_UP主437744340_视频数据.json',
      'UP主440544870_UP主440544870_视频数据.json',
      'UP主452606628_UP主452606628_视频数据.json',
      'UP主471303350_UP主471303350_视频数据.json',
      'UP主474642651_UP主474642651_视频数据.json',
      'UP主480680646_UP主480680646_视频数据.json',
      'UP主483311105_UP主483311105_视频数据.json',
      'UP主483840019_UP主483840019_视频数据.json',
      'UP主493570956_UP主493570956_视频数据.json',
      'UP主508416316_UP主508416316_视频数据.json',
      'UP主511612578_UP主511612578_视频数据.json',
      'UP主517184570_UP主517184570_视频数据.json',
      'UP主517327498_罗翔说刑法_视频数据.json',
      'UP主520031712_UP主520031712_视频数据.json',
      'UP主520819684_UP主520819684_视频数据.json',
      'UP主533459953_UP主533459953_视频数据.json',
      'UP主5374954_UP主5374954_视频数据.json',
      'UP主544336675_UP主544336675_视频数据.json',
      'UP主546195_老番茄_视频数据.json',
      'UP主5970160_UP主5970160_视频数据.json',
      'UP主59905809_UP主59905809_视频数据.json',
      'UP主60011_UP主60011_视频数据.json',
      'UP主627888730_UP主627888730_视频数据.json',
      'UP主63231_UP主63231_视频数据.json',
      'UP主63486758_UP主63486758_视频数据.json',
      'UP主63590_UP主63590_视频数据.json',
      'UP主66391032_UP主66391032_视频数据.json',
      'UP主672328094_UP主672328094_视频数据.json',
      'UP主686127_籽岷_视频数据.json',
      'UP主691415738_UP主691415738_视频数据.json',
      'UP主7212583_UP主7212583_视频数据.json',
      'UP主72270557_UP主72270557_视频数据.json',
      'UP主7349_UP主7349_视频数据.json',
      'UP主7946432_UP主7946432_视频数据.json',
      'UP主86439234_UP主86439234_视频数据.json',
      'UP主8739477_UP主8739477_视频数据.json',
      'UP主89403459_UP主89403459_视频数据.json',
      'UP主927587_UP主927587_视频数据.json',
      'UP主946974_UP主946974_视频数据.json',
      'UP主9728698_UP主9728698_视频数据.json',
      'UP主99157282_UP主99157282_视频数据.json'
    ];
    
    return integratedFiles;
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

// 加载整合数据
const loadIntegratedData = async () => {
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
        const fileResponse = await fetch(`/data/integrated_results/${file}`);
        const fileData = await fileResponse.json();
        
        // 随机选择2个视频
        const randomVideos = getRandomElements(fileData, 2);
        
        // 从文件名中提取UP主真实名称
        const upName = file.split('_')[1];
        
        // 转换为应用需要的格式
        const videos = randomVideos.map((item, index) => ({
          id: `${file}_${index}_${Date.now()}`,
          title: item.标题,
          bvid: item.BV号,
          up: upName, // 使用UP主真实名称
          up_name: upName, // 同时设置up_name字段
          link: item.链接
        }));
        
        allVideos = [...allVideos, ...videos];
        console.log(`从 ${file} 随机选择 ${videos.length} 个视频，UP主: ${upName}`);
      } catch (error) {
        console.error(`加载文件 ${file} 失败:`, error);
      }
    }
    
    console.log(`总共成功加载 ${allVideos.length} 个真实视频数据`);
    console.log('随机选择的UP主数量:', selectedFiles.length);
    console.log('每个UP主选择的视频数量: 2');
    
    return allVideos;
  } catch (error) {
    console.error('加载整合数据失败:', error);
    
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
      up_name: item.UP主,
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
      const videos = await loadIntegratedData();
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
                <p className="video-info">UP主: {video.up_name || video.up || '未知UP主'}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default VideoScreen;