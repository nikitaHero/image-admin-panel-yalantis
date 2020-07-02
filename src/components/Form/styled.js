import styled from "styled-components";

export const PrevievWrapper = styled.div`
  width: 300px;
  min-width: 300px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
