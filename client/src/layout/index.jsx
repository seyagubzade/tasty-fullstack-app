import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Routes } from "react-router";
import styled from "styled-components";
import { Toaster } from "react-hot-toast";
import Home from "../pages/Home";
import Add from "../pages/Add";
import Detail from "../pages/Detail";
import Wishlist from "../pages/Wishlist";

const Layout = () => {
  return (
    <div>
      <Header />
      <StyledContainer>
        <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/add" element={<Add />}/> 
          <Route path="/wishlist" element={<Wishlist />}/> 
          <Route path="/detail/:id" element={<Detail />}/> 
          <Route path="*" element={<p>Error Page</p>}/> 
        </Routes>
      </StyledContainer>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

const StyledContainer = styled.div`
  min-height: 100vh;
  padding: 90px 0; 
`;

export default Layout;
