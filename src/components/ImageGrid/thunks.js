import { actions } from "./ducks";
import firebase from "../../firebase";
import { toastr } from "react-redux-toastr";

//getting all image items

export const getImages = () => {
  return async (dispatch) => {
    await actions.getImageRequest();
    const data = [];
    try {
      await firebase
        .firestore()
        .collection("images")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            data.push({ ...doc.data(), id: doc.id });
          });
        });
      await dispatch(actions.getImageSuccess(data));
      await toastr.success("Success", "Image loading from server");
    } catch (err) {
      await dispatch(actions.getImageError(err.toString()));
      await toastr.error("Error", err.toString());
    }
  };
};

//using for removing images

export const removeImage = (id) => {
  return async (dispatch) => {
    await actions.removeImageRequest();
    try {
      await firebase.firestore().collection("images").doc(id).delete();

      await dispatch(actions.removeImageSuccess());
      await toastr.success("Success", "Image removing from server");
    } catch (err) {
      await dispatch(actions.removeImageError(err.toString()));
      await toastr.error("Error", err.toString());
    }
  };
};
