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
      'up_1335713025_videos_smart_20251122_190032.json',
      'up_1359172699_videos_smart_20251122_155817.json',
      'up_1372433_videos_smart_20251122_145225.json',
      'up_14110780_videos_smart_20251122_154737.json',
      'up_1455861172_videos_smart_20251122_161343.json',
      'up_1458143131_videos_smart_20251122_162228.json',
      'up_14804670_videos_smart_20251122_123625.json',
      'up_1577804_videos_smart_20251122_205616.json',
      'up_15960317_videos_smart_20251122_165930.json',
      'up_1629347259_videos_smart_20251122_152029.json',
      'up_1653246909_videos_smart_20251122_151715.json',
      'up_168598_videos_smart_20251122_205133.json',
      'up_170948267_videos_smart_20251122_175045.json',
      'up_17134369_videos_smart_20251122_115313.json',
      'up_1724598_videos_smart_20251122_130605.json',
      'up_17320022_videos_smart_20251122_160432.json',
      'up_1773346_videos_smart_20251122_135338.json',
      'up_17819768_videos_smart_20251122_180746.json',
      'up_18202105_videos_smart_20251122_121522.json',
      'up_1838326986_videos_smart_20251122_195420.json',
      'up_1869712375_videos_smart_20251122_211144.json',
      'up_1875245620_videos_smart_20251122_172706.json',
      'up_2017611_videos_smart_20251122_161717.json',
      'up_207261582_videos_smart_20251122_202423.json',
      'up_2080529_videos_smart_20251122_183056.json',
      'up_23947287_videos_smart_20251122_171449.json',
      'up_25876945_videos_smart_20251122_120415.json',
      'up_259333_videos_smart_20251122_110052.json',
      'up_26032219_videos_smart_20251122_174523.json',
      'up_261485584_videos_smart_20251122_170843.json',
      'up_263090405_videos_smart_20251122_191901.json',
      'up_280793434_videos_smart_20251122_194830.json',
      'up_29329085_videos_smart_20251122_153232.json',
      'up_294882749_videos_smart_20251122_113001.json',
      'up_296092268_videos_smart_20251122_131932.json',
      'up_304578055_videos_smart_20251122_142309.json',
      'up_306936843_videos_smart_20251122_180142.json',
      'up_313580179_videos_smart_20251122_171810.json',
      'up_314521322_videos_smart_20251122_145800.json',
      'up_32741563_videos_smart_20251122_170251.json',
      'up_330415548_videos_smart_20251122_194214.json',
      'up_33063673_videos_smart_20251122_204314.json',
      'up_337312411_videos_smart_20251122_162751.json',
      'up_353368172_videos_smart_20251122_104919.json',
      'up_3546563922102817_videos_smart_20251122_210604.json',
      'up_3546776042736296_videos_smart_20251122_175614.json',
      'up_361775100_videos_smart_20251122_191302.json',
      'up_375375_videos_smart_20251122_150756.json',
      'up_37663924_videos_smart_20251122_200953.json',
      'up_37754047_videos_smart_20251122_182453.json',
      'up_386869863_videos_smart_20251122_163912.json',
      'up_394609671_videos_smart_20251122_181919.json',
      'up_395135643_videos_smart_20251122_154128.json',
      'up_395877542_videos_smart_20251122_203609.json',
      'up_39737405_videos_smart_20251122_125320.json',
      'up_398877923_videos_smart_20251122_155303.json',
      'up_401657359_videos_smart_20251122_123241.json',
      'up_405370021_videos_smart_20251122_133104.json',
      'up_406636263_videos_smart_20251122_133429.json',
      'up_414350632_videos_smart_20251122_114653.json',
      'up_419872064_videos_smart_20251122_124626.json',
      'up_423895_videos_smart_20251122_153814.json',
      'up_4253446_videos_smart_20251122_165614.json',
      'up_42561463_videos_smart_20251122_205940.json',
      'up_42870908_videos_smart_20251122_112407.json',
      'up_437744340_videos_smart_20251122_181348.json',
      'up_440544870_videos_smart_20251122_190632.json',
      'up_452606628_videos_smart_20251122_202832.json',
      'up_471303350_videos_smart_20251122_144641.json',
      'up_474642651_videos_smart_20251122_165047.json',
      'up_480680646_videos_smart_20251122_134737.json',
      'up_483311105_videos_smart_20251122_150322.json',
      'up_483840019_videos_smart_20251122_114107.json',
      'up_493570956_videos_smart_20251122_143527.json',
      'up_508416316_videos_smart_20251122_105526.json',
      'up_511612578_videos_smart_20251122_141730.json',
      'up_517184570_videos_smart_20251122_192436.json',
      'up_517327498_videos_smart_20251122_193016.json',
      'up_520031712_videos_smart_20251122_122649.json',
      'up_520819684_videos_smart_20251122_163326.json',
      'up_533459953_videos_smart_20251122_125902.json',
      'up_5374954_videos_smart_20251122_122058.json',
      'up_544336675_videos_smart_20251122_113621.json',
      'up_546195_videos_smart_20251122_111344.json',
      'up_5970160_videos_smart_20251122_185428.json',
      'up_59905809_videos_smart_20251122_104254.json',
      'up_60011_videos_smart_20251122_173305.json',
      'up_627888730_videos_smart_20251122_184841.json',
      'up_63231_videos_smart_20251122_120953.json',
      'up_63486758_videos_smart_20251122_202341.json',
      'up_63590_videos_smart_20251122_141207.json',
      'up_66391032_videos_smart_20251122_111806.json',
      'up_672328094_videos_smart_20251122_110626.json',
      'up_686127_videos_smart_20251122_124244.json',
      'up_691415738_videos_smart_20251122_172357.json',
      'up_7212583_videos_smart_20251122_200233.json',
      'up_72270557_videos_smart_20251122_144057.json',
      'up_7349_videos_smart_20251122_132526.json',
      'up_7946432_videos_smart_20251122_140542.json',
      'up_86439234_videos_smart_20251122_125939.json',
      'up_8739477_videos_smart_20251122_183646.json',
      'up_89403459_videos_smart_20251122_184309.json',
      'up_927587_videos_smart_20251122_130930.json',
      'up_946974_videos_smart_20251122_164502.json',
      'up_9728698_videos_smart_20251122_193653.json',
      'up_99157282_videos_smart_20251122_152650.json'
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