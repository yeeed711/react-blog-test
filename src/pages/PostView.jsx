import React from "react";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import View from "../components/postview/View";

function PostView() {
  return (
    <>
      <Header />
      <Banner />
      {/* 여기에 상세페이지 추가 */}
      <View />
      <Footer />
    </>
  );
}

export default PostView;
