import React from "react";
import "./App.css";
import styled from "styled-components";

import Image1 from "./Assets/Images/img-1.jpg";
import Image2 from "./Assets/Images/img-2.jpg";
import Image3 from "./Assets/Images/img-3.jpg";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import IconButton from "@mui/material/IconButton";
import Signup from "./Signup";
import Signin from "./Signin";
import Logo from "./Assets/Images/logo.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const NavRow = styled.div`
  background-color: #ffffff;
  max-width: 1200px;
  height: 8vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: 24px;
  align-items: center;
`;

const BrandImage = styled.img`
  object-fit: contain;
  height: 6vh;
  width: 100%;
`;

const LinkButton = styled.div`
  font-weight: 500;
  font-size: 1rem;
  color: #212121;
  padding-bottom: 5px;
  border-bottom: 1px solid transparent;
  &:hover {
    color: #212121;
    border-bottom: 1px solid #212121;
    cursor: pointer;
  }
`;

const ImageCard = styled.img`
  border-radius: 10px;
  height: 300px;
  width: 360px;
  object-fit: "contain";
`;

const HeadingSmall = styled.div`
  font-size: 1rem;
  color: #DFDFDF;
  font-weight: 500;
  z-index: 100;
`;

const HeadingMain = styled.div`
  font-size: 3.6rem;
  color: #DFDFDF;
  font-weight: 600;
  line-height: 98px;
  letter-spacing: 14px;
  z-index: 100;
`;

const DemoCarousel = () => {
  return (
    <>
      <div>
        

        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={2000}
        >
          <div>
            <img
              src={Image1}
              alt="travel"
              style={{ height: "60vh", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src={Image2}
              alt="travel"
              style={{ height: "60vh", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src={Image3}
              alt="travel"
              style={{ height: "60vh", objectFit: "cover" }}
            />
          </div>
        </Carousel>
      </div>
    </>
  );
};

function App() {
  const [openSignup, setOpenSignup] = React.useState(false);
  const [openSignin, setOpenSignin] = React.useState(false);

  const handleCloseSignup = () => {
    setOpenSignup(false);
  };

  const handleCloseSignin = () => {
    setOpenSignin(false);
  };

  return (
    <>
    <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{
            width: "100%",
            position: "absolute",
            top: "180px",
          }}
        >
          
          <HeadingMain className="" >LOVE THE PLACES</HeadingMain>
          <HeadingSmall  className="mb-3" >
            Plan a trip to south minato
          </HeadingSmall>

<button className="btn btn-warning btn-outline-text" style={{zIndex: "1000"}}>Book Now!</button>

        </div>
        



      <NavRow className="container px-5">
        <BrandImage src={Logo} />
        <div className="d-flex flex-row align-items-center justify-content-between px-5 py-2">
          <LinkButton>Home</LinkButton>
          <LinkButton>Destinations</LinkButton>

          <LinkButton>Contact</LinkButton>
          <LinkButton
            onClick={() => {
              setOpenSignin(true);
            }}
          >
            Signin
          </LinkButton>
          <LinkButton
            onClick={() => {
              setOpenSignup(true);
            }}
          >
            Sign up
          </LinkButton>
        </div>

        <div className="d-flex flex-row align-items-center">
          <button className="btn btn-outline-text btn-dark">BOOK A TRIP</button>

          <IconButton className="ms-3" style={{ color: "#212121" }}>
            <SearchRoundedIcon />
          </IconButton>
        </div>
      </NavRow>
      <div style={{ height: "60vh" }}>
        <DemoCarousel />
      </div>

      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          alignItems: "center",
          gridGap: "32px",
          position: "absolute",
          bottom: "10px",
          left: "100px",
          zIndex: "10",
        }}
      >
        <ImageCard src={Image1} />
        <ImageCard src={Image2} />
        <ImageCard src={Image3} />
      </div>

      <Signup open={openSignup} handleClose={handleCloseSignup} />
      <Signin open={openSignin} handleClose={handleCloseSignin} />
    </>
  );
}

export default App;
