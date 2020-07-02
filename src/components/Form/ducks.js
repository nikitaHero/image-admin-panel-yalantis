//define actionTypes

const actionTypes = {
  ADD_IMAGE_REQUEST: "ADD_IMAGE_REQUEST",
  ADD_IMAGE_SUCCESS: "ADD_IMAGE_SUCCESS",
  ADD_IMAGE_ERROR: "ADD_IMAGE_ERROR",

  UPDATE_IMAGE_REQUEST: "UPDATE_IMAGE_REQUEST",
  UPDATE_IMAGE_SUCCESS: "UPDATE_IMAGE_SUCCESS",
  UPDATE_IMAGE_ERROR: "UPDATE_IMAGE_ERROR",

  GET_IMAGE_REQUEST: "GET_IMAGE_REQUEST",
  GET_IMAGE_SUCCESS: "GET_IMAGE_SUCCESS",
  GET_IMAGE_ERROR: "GET_IMAGE_ERROR",
};

//create reducer

const initialState = {
  isPending: false,
  isUpdating: false,
  isFetching: false,
  err: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_IMAGE_REQUEST: {
      return {
        ...state,
        isPending: true,
      };
    }
    case actionTypes.ADD_IMAGE_SUCCESS: {
      return {
        ...state,
        isPending: false,
      };
    }
    case actionTypes.ADD_IMAGE_ERROR: {
      return {
        ...state,
        isPending: false,
        err: action.payload,
      };
    }

    case actionTypes.GET_IMAGE_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case actionTypes.GET_IMAGE_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        imageData: action.payload,
      };
    }
    case actionTypes.GET_IMAGE_ERROR: {
      return {
        ...state,
        isFetching: false,
        err: action.payload,
      };
    }

    case actionTypes.UPDATE_IMAGE_REQUEST: {
      return {
        ...state,
        isUpdating: true,
      };
    }
    case actionTypes.UPDATE_IMAGE_SUCCESS: {
      return {
        ...state,
        isUpdating: false,
      };
    }
    case actionTypes.UPDATE_IMAGE_ERROR: {
      return {
        ...state,
        isUpdating: false,
        err: action.payload,
      };
    }
    default:
      return state;
  }
};

//define actions

export const actions = {
  addImageRequest: () => ({
    type: actionTypes.ADD_IMAGE_REQUEST,
  }),
  addImageSuccess: () => ({
    type: actionTypes.ADD_IMAGE_SUCCESS,
  }),
  addImageError: (payload) => ({
    type: actionTypes.ADD_IMAGE_ERROR,
    payload,
  }),

  getImageRequest: () => ({
    type: actionTypes.GET_IMAGE_REQUEST,
  }),
  getImageSuccess: (payload) => ({
    type: actionTypes.GET_IMAGE_SUCCESS,
    payload,
  }),
  getImageError: (payload) => ({
    type: actionTypes.GET_IMAGE_ERROR,
    payload,
  }),

  updateImageRequest: () => ({
    type: actionTypes.ADD_IMAGE_REQUEST,
  }),
  updateImageSuccess: () => ({
    type: actionTypes.ADD_IMAGE_SUCCESS,
  }),
  updateImageError: (payload) => ({
    type: actionTypes.ADD_IMAGE_ERROR,
    payload,
  }),
};
