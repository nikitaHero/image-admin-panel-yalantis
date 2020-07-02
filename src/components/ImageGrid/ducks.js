//define actionTypes

const actionTypes = {
  GET_IMAGES_REQUEST: "GET_IMAGES_REQUEST",
  GET_IMAGES_SUCCESS: "GET_IMAGES_SUCCESS",
  GET_IMAGES_ERROR: "GET_IMAGES_ERROR",

  REMOVE_IMAGE_REQUSET: "REMOVE_IMAGE_REQUEST",
  REMOVE_IMAGE_SUCCESS: "REMOVE_IMAGE_SUCCESS",
  REMOVE_IMAGE_ERROR: "REMOVE_IMAGE_ERROR",
};

//create reducer

const initialState = {
  isFetching: false,
  isRemoving: false,
  images: null,
  err: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_IMAGES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.GET_IMAGES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        images: action.payload,
      };
    case actionTypes.GET_IMAGES_ERROR:
      return {
        ...state,
        isFetching: false,
        err: action.payload,
      };
    case actionTypes.REMOVE_IMAGE_REQUSET:
      return {
        ...state,
        isRemoving: true,
      };
    case actionTypes.REMOVE_IMAGE_SUCCESS:
      return {
        ...state,
        isRemoving: false,
      };
    case actionTypes.REMOVE_IMAGE_ERROR:
      return {
        ...state,
        isRemoving: false,
        err: action.payload,
      };
    default:
      return state;
  }
};

//define actions

export const actions = {
  getImageRequest: () => ({
    type: actionTypes.GET_IMAGES_REQUEST,
  }),
  getImageSuccess: (payload) => ({
    type: actionTypes.GET_IMAGES_SUCCESS,
    payload,
  }),
  getImageError: (payload) => ({
    type: actionTypes.GET_IMAGES_ERROR,
    payload,
  }),

  removeImageRequest: () => ({
    type: actionTypes.REMOVE_IMAGE_REQUSET,
  }),
  removeImageSuccess: () => ({
    type: actionTypes.REMOVE_IMAGE_SUCCESS,
  }),
  removeImageError: (payload) => ({
    type: actionTypes.REMOVE_IMAGE_ERROR,
  }),
};
