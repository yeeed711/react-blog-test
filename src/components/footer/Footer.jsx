import TopBtn from "./TopBtn";
import styled from "styled-components";

const FooterStyle = styled.footer`
  background: var(--white-color);
  margin-top: 10rem;
  h2 {
    color: var(--gray-color);
  }
`;

const MaxWidthFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
  position: relative;
`;

function Footer() {
  return (
    <FooterStyle>
      <MaxWidthFooter>
        <h2>©Weniv Corp.</h2>
        <TopBtn />
      </MaxWidthFooter>
    </FooterStyle>
  );
}

export default Footer;
