import styled from "styled-components";
import ArrowTopImg from "../../assets/ArrowTop.svg";

const Btn = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 6.4rem;
  height: 6.4rem;
  padding-top: 2.2rem;
  border: 0;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  background: var(--main-color) url(${ArrowTopImg}) no-repeat 50% 0.4rem / 4rem;
  color: var(--white-color);
  text-align: center;
  font-weight: bold;
`;

function TopBtn() {
  return <Btn>TOP</Btn>;
}

export default TopBtn;
