import axios from 'axios'

const KEY = 'AIzaSyDTubS2VPjoKBI2i-l4QzgOXS8kjwz_dVs'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet,statistics',
        key : KEY
    
    }
    
  });