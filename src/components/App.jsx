import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

class App extends React.Component {
    state = { videos: [], video: null };

    onTermSubmit = async term => {
        try {
            const result = await youtube.get('/search', {
                params: {
                    q: term
                }
            });
            this.setState({ videos: result.data.items });
        } catch{
            console.log('Deu ruim');
        }
    }

    onVideoSelect = (video) => {
        this.setState({ video: video });
    };

    render() {
        return (
            <div className="ui container">
                <br />
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoDetails video={this.state.video} />
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
        );
    };
}

export default App;