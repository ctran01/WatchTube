import createDataContext from './createDataContext'
import youtube from '../components/apis/youtube'
import APIKey from '../components/apis/apiKey'

const videoReducer = (state,action) =>{
  switch(action.type){
    case 'search':
      return {...state, videos:action.payload.videos, selectedVideo:null, search: action.payload.search, comments: [] }
    default:
      return state
  }
}

const onSearchSubmit =  (dispatch) => {
  return async(search)=>{
  const response = await youtube.get(`/search?part=snippet`, {
    params: {
      q: search,

      type: "video",
      maxResults: 25,
      key: APIKey,
    },
  });

  //Axios doesn't require response.json(). Already parses when invoked
  const {
    data: { items },
  } = response;

  // console.log("search", items);
  let ids = [];
  items.forEach((item) => {
    ids.push(item.id.videoId);
  });

  let newList = ids.toString();
  // console.log(newList);
  const videoData = await youtube.get(
    `/videos?part=snippet&part=statistics`,
    {
      params: {
        id: newList,
        key: APIKey,
      },
    }
  );

  const {
    data: { items: newVideoList },
  } = videoData;
  // console.log("new video list", newVideoList);
  dispatch({type: 'search', payload: {videos: newVideoList, selectedVideo:null, search: search}})
  // this.setState({
  //   videos: newVideoList,
  //   selectedVideo: null,
  //   search: search,
  // });
  // this.props.history.push(`/search/${search}`);
  // console.log("this is the searched list!", this.state.videos);
}
}


// onVideoSelect = async (video) => {
//   // console.log("From the app component! This is the selected video", video);
//   const videoSrc = video.id.videoId || video.id;
//   const response = await youtube.get(`/videos?part=snippet&part=statistics`, {
//     params: {
//       id: videoSrc,
//       key: APIKey,
//     },
//   });
//   // console.log("this is the searched selected video", response);
//   const {
//     data: { items },
//   } = response;

//   const comments = await youtube.get(
//     `/commentThreads?part=snippet&part=replies`,
//     {
//       params: {
//         videoId: videoSrc,
//         key: APIKey,
//       },
//     }
//   );

//   this.setState({ selectedVideo: items[0], comments: comments.data.items });
// };

// getRecommendedVideos = async () => {
//   const response = await youtube.get(`/videos?part=snippet&part=statistics`, {
//     params: {
//       chart: "mostPopular",
//       maxResults: 20,
//       key: APIKey,
//     },
//   });
//   //Axios doesn't require response.json(). Already parses when invoked
//   console.log(response);
//   const {
//     data: { items },
//   } = response;
//   // console.log(Data);
//   // let items = Data;
//   this.setState({
//     videos: items,
//     selectedVideo: null,
//   });
// };




export const {Provider,Context}  = createDataContext(videoReducer, {onSearchSubmit} ,{videos:[], selectedVideo:null, search:"",comments:[]})