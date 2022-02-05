import React, { useState, useContext } from "react";
import AppContext from "../../context/AppContext";
import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout(props) {
  const value = useContext(AppContext);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
        <title>The Antifirm</title>
        <meta
          property="og:title"
          content="web3 native law firm"
          key="title"
        />
      </Head>
      <Nav />
      <Container
        id="content"
        alignItems="center"
        justifyContent="center"
      >
          {props.children}
      </Container>
      <Footer />
    </>
  );
}
