import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1e1d23;
  height: 100%;
  padding-top: 30px;
`;
export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  /* padding-top: 40px; */
  height: 100vh;
`;

export const H1 = styled.h1`
  text-align: center;
  color: #e3e3e3;
  margin-bottom: 70px;
`;

export const InputLabel = styled.p`
  letter-spacing: -0.408px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #eeee;
  margin-left: 25px;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  width: 342px;
  height: 58px;
  border: none;
  outline: none;
  padding-left: 25px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
  margin-bottom: 34px;
`;
export const Button = styled.button`
  background: #b3444d;
  outline: none;
  border: none;
  width: 342px;
  height: 74px;
  margin-top: 50px;
  
  color: #e3e3e3;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;
