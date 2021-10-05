import VideoListEntry from './VideoListEntry.js';
// import App from './App.js';
// onClick={App.onClick}

var VideoList = (props) => {

  return (<div className="video-list">
    <div><h5><em>videoListEntry</em>
      {
        props.videos.map((video) => {
          console.log(props.videos.length);
          return (
            <VideoListEntry onClick={() => { props.onClick(video); }} key={video.id.videoId} video={video}/>
          );
        })
      }</h5></div>
  </div>);
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
