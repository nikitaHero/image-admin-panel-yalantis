import styled from "styled-components";

export const Image = styled.img`
  max-height: 300px;
  object-fit: cover;
`;

export const Tooltip = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  width: 100%;
  display: flex;
  opacity: ${({ fullWidth }) => (fullWidth ? 1 : 0)};
  justify-content: center;
  left: 0;
  bottom: 0;
  align-items: ${(props) => (props.position ? props.position : "bottom")};
  z-index: 10;
  cursor: pointer;
  transition: 500ms;
  :hover {
    opacity: 1;
    transition: 500ms;
  }
`;

export const TooltipMessage = styled.div`
  position: absolute;
  max-height: 100%;
  overflow: auto;
  object-fit: cover;
  width: 100%;
  padding: 5px 15px;
  background-color: rgba(255, 255, 255, 0.5);
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: ${(props) => (props.size ? `${props.size}px` : "14px")};
  text-align: ${(props) => (props.align ? props.align : "left")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
`;
