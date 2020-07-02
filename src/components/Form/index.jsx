import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import { TwitterPicker } from "react-color";
import { addImage, updateImage, getImage } from "./thunks";

import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";

const Form = ({ addImage, imageUploadData, updateImage, getImage }) => {
  //state
  const [tooltip, setTooltip] = useState("Set image tooltip");
  const [tooltipPosition, setTooltipPosition] = useState("flex-end");
  const [textPosition, setTextPosition] = useState("left");
  const [image, setImage] = useState("");
  const [fontSize, setFontSize] = useState(14);
  const [textColor, setTextColor] = useState("000");

  const history = useHistory();

  //if id update image
  const { id } = useParams();
  const imageData = imageUploadData.imageData;

  useEffect(() => {
    if (id) {
      getImage(id);
    }
  }, []);

  useEffect(() => {
    if (imageData && id) {
      setTooltip(imageData.tooltip);
      setTooltipPosition(imageData.tooltipPosition);
      setTextPosition(imageData.textPosition);
      setImage(imageData.url);
      setFontSize(imageData.fontSize);
      setTextColor(imageData.textColor);
    }
  }, [imageData]);

  //file input handler
  const _handleAddImage = (file) => {
    if (file) {
      const FR = new FileReader();

      if ((file && file.type === "image/jpeg") || file.type === "image/png") {
        FR.readAsDataURL(file);
        FR.addEventListener(
          "load",
          () => {
            setImage(FR.result);
          },
          false
        );
      } else {
        toastr.error("Error", "Supported jpg and png images ");
      }
    }
  };

  const _handleSetTooltip = (e) => {
    setTooltip(e.currentTarget.value);
  };

  const _handleSetFontSize = (size) => {
    const parsedSize = parseInt(size);
    parsedSize > 0 ? setFontSize(parsedSize) : setFontSize(14);
  };

  const _handleChangeColor = (color) => {
    setTextColor(color.hex);
  };

  //if id is valid, then update the value otherwise create a new

  const _handleSubmit = async () => {
    if (image.length > 0 && tooltip.length > 0 && !id) {
      await addImage({
        url: image,
        tooltip,
        tooltipPosition,
        textPosition,
        textColor,
        fontSize,
      });
      await history.push("/");
    } else if (id) {
      await updateImage({
        url: image,
        tooltip,
        tooltipPosition,
        textPosition,
        textColor,
        fontSize,
        id,
      });
      await history.push("/");
    } else {
      await toastr.error("Error", "complete form");
    }
  };
  return (
    <div className="row">
      <div className="row">
        <h4 className="center">{id ? "Update " : "Add "}image with tooltip</h4>
      </div>
      <form className="col s12" action="#">
        <div className="row">
          <h6>Image</h6>
          <div className="file-field input-field">
            <div className="btn">
              <span>File</span>
              <input
                onChange={(e) => _handleAddImage(e.target.files[0])}
                type="file"
              />
            </div>
            <div className="file-path-wrapper">
              <input
                className="file-path validate"
                type="text"
                placeholder="file name"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input
              type="text"
              className="validate"
              value={tooltip}
              onChange={(e) => _handleSetTooltip(e)}
              name="tooltip-input"
            />
            <label htmlFor="tooltip-input" className="active">
              Tooltip
            </label>
          </div>
        </div>

        <div className="row">
          <h6>Tooltip position</h6>
          <p>
            <label>
              <input
                type="radio"
                onChange={() => setTooltipPosition("flex-start")}
                checked={tooltipPosition === "flex-start"}
              />
              <span>Top</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type="radio"
                onChange={() => setTooltipPosition("center")}
                checked={tooltipPosition === "center"}
              />
              <span>Center</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type="radio"
                onChange={() => setTooltipPosition("flex-end")}
                checked={tooltipPosition === "flex-end"}
              />
              <span>Bottom</span>
            </label>
          </p>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              name="font-input"
              type="number"
              min="1"
              value={fontSize}
              className="validate"
              onChange={(e) => _handleSetFontSize(e.target.value)}
            />
            <label htmlFor="font-input" className="active">
              Font size (px) min 1
            </label>
          </div>
        </div>
        <div className="row">
          <h6>Text alignment</h6>
          <p>
            <label>
              <input
                type="radio"
                onChange={() => setTextPosition("left")}
                checked={textPosition === "left"}
              />
              <span>Left</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type="radio"
                onChange={() => setTextPosition("center")}
                checked={textPosition === "center"}
              />
              <span>Center</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type="radio"
                onChange={() => setTextPosition("right")}
                checked={textPosition === "right"}
              />
              <span>Right</span>
            </label>
          </p>
        </div>
      </form>
      <div className="row">
        <h6>Text color</h6>
        <TwitterPicker color={textColor} onChange={_handleChangeColor} />
      </div>
      <div className="row center">
        <button
          className="btn btn-large waves-effect waves-light"
          type="submit"
          onClick={_handleSubmit}
        >
          Submit
          <i className="material-icons right">send</i>
        </button>
      </div>
    </div>
  );
};

const mapState = (state) => ({
  imageUploadData: state.addImage,
});

const mapDispatch = (dispatch) => ({
  addImage: (data) => dispatch(addImage(data)),
  getImage: (id) => dispatch(getImage(id)),
  updateImage: (data) => dispatch(updateImage(data)),
});

export default connect(mapState, mapDispatch)(Form);
