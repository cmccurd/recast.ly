import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {videoObjects: exampleVideoData, currentVideo: exampleVideoData[0]};
    this.onClick = this.onClick.bind(this);
  }
  render() {
    // console.log(exampleVideoData);
    return (<div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> view goes here</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em>videoPlayers</em>{
            <VideoPlayer key={this.state.currentVideo.id.videoId} video={this.state.currentVideo}/>
          }</h5></div>
        </div>
        <div className="col-md-5">
          <div><h5><em>videoList</em><VideoList onClick={this.onClick} videos={this.state.videoObjects}/></h5></div>
        </div>
      </div>
    </div>);
  }
  handleChange(video) {
    this.setState({
      currentVideo: video
    });
  }
  onClick(e) {
    this.handleChange(e);
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;