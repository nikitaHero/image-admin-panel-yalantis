import React from "react";
import { Link } from "react-router-dom";

import { Image, Tooltip, TooltipMessage } from "./styled";

export default ({ data, onRemove, fullWidth }) => {
  return (
    <div
      className={
        fullWidth ? "col s12 relative mt100" : "col s12 m6 l4 relative"
      }
    >
      {fullWidth ? (
        false
      ) : (
        <span
          href="/"
          className="btn-floating btn-small halfway-fab waves-effect waves-light red"
        >
          <i onClick={() => onRemove(data.id)} className="material-icons">
            remove
          </i>
        </span>
      )}

      <Link to={`edit/${data.id}`}>
        <div className="card">
          <div className="card-image">
            <Image alt="i" src={data.url} />

            <Tooltip position={data.tooltipPosition} fullWidth={fullWidth}>
              <TooltipMessage
                fontWeight={700}
                size={data.fontSize}
                color={data.textColor}
                align={data.textPosition}
              >
                {data.tooltip}
              </TooltipMessage>
            </Tooltip>
          </div>
        </div>
      </Link>
    </div>
  );
};
