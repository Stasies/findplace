import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Raleway", sans-serif;

  p {
    font-size: 22px;
  }

  button {
    width: 200px;
    height: 50px;
    border: 0.16em solid #d3d3d3;
    margin: 50px auto;
    box-sizing: border-box;
    text-transform: uppercase;
    font-weight: 400;
    color: #d3d3d3;
    background: transparent;
    text-align: center;
    transition: all 0.15s;
    font-size: 22px;

    &:hover {
      cursor: pointer;
      color: grey;
      border-color: grey;
    }
    &:active {
      color: #ddd;
      border-color: #ddd;
    }
  }
`;
export const MapWrapper = styled.div`
  display: flex;
  width: 100%;
`;
export const InfoWrapper = styled.div``;
