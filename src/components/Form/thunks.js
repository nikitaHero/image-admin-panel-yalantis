import { actions } from "./ducks";
import firebase from "firebase";
import { toastr } from "react-redux-toastr";

//using for adding new image

export const addImage = (data) => {
  return async (dispatch) => {
    await dispatch(actions.addImageRequest());

    try {
      await firebase.firestore().collection("images").add(data);
      await dispatch(actions.addImageSuccess());
      await toastr.success("Success", "Image uploading on server");
    } catch (err) {
      await dispatch(actions.addImageError(err.toString()));
      await toastr.error("Error", err.toString());
    }
  };
};

//using for getting image once

export const getImage = (id) => {
  return async (dispatch) => {
    await dispatch(actions.getImageRequest());
    let data;
    try {
      await firebase
        .firestore()
        .collection("images")
        .doc(id)
        .get()
        .then((doc) => (data = doc.data()));

      await dispatch(actions.getImageSuccess(data));
      await toastr.success("Success", "Image is uploading");
    } catch (err) {
      await dispatch(actions.getImageError(err.toString()));
      await toastr.error("Error", err.toString());
    }
  };
};

//using for update images

export const updateImage = (data) => {
  return async (dispatch) => {
    await dispatch(actions.updateImageRequest());
    try {
      await firebase.firestore().collection("images").doc(data.id).update(data);
      await dispatch(actions.updateImageSuccess());
      await toastr.success("Success", "Image is updating");
    } catch (err) {
      await dispatch(actions.updateImageError(err.toString()));
      await toastr.error("Error", err.toString());
    }
  };
};
