import axios from 'axios';

const KEY = 'AIzaSyBpXU7uQhjmjEYyf4Oxw8ruolpkSaTob6o';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 25,
        key: KEY
    }
});