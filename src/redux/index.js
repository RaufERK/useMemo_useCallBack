const initState = {
  counter: 0,
  showRoomPicture: null,
  oneMorePicture: null
}

const SET_PIC_TO_SHOW = "SET_PIC_TO_SHOW";

//THUNK
export const thunkFetchAction = () => {
  return async (dispatch) => {  //THUNK
    const fetchRes = await fetch("https://api.thecatapi.com/v1/images/search")
    const result = await fetchRes.json()
    const { url } = result[0]
    dispatch(showRomAcionCreator(url))  //THUNK
  }
}

//БЕЗ THUNK
export const showRomAcionCreator = (params) => {
  return { type: SET_PIC_TO_SHOW, payload: params }
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case SET_PIC_TO_SHOW:
      return { ...state, showRoomPicture: action.payload }
    default:
      return state
  }
}
