// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    // 최초 재갱살 유튜브 영상 ID
    videoId: 'iGpuQ0ioPrM',
    playerVars: {
      // 자동 재생 유무
      autoplay : true,
      // 반복 재생 유무
      loop: true,
      // 반복 재생할 유튜브 영상 ID 목록
      playlist: 'iGpuQ0ioPrM'
    },
    events: {
      onReady: function(event) {
        // 움소거
        event.target.mute()
      }
    }
  });
}