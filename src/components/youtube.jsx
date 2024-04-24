import { useRef, useEffect } from "react";

// declare global {
//   interface Window {
//     YT: any;
//     onYouTubeIframeAPIReady: () => void;
//   }
// }

const YouTubePlayer = ({ videoUrl }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    if (!firstScriptTag || !firstScriptTag.parentNode) {
      return;
    }
    firstScriptTag?.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      const videoId = getVideoIdFromUrl(videoUrl);
      new window.YT.Player(playerRef.current, {
        videoId,
        playerVars: {
          autoplay: 1,
          controls: 1,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    };
  }, [videoUrl]);

  const onPlayerReady = (event) => {
    event.target.playVideo();
  };

  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.ENDED) {
      console.log("Video has ended.");
    }
  };

  const getVideoIdFromUrl = (url) => {
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
  };

  return <div ref={playerRef} />;
};

export default YouTubePlayer;
