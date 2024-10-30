import React from "react";
import Header from "../components/Header";
import HospitalCard from "../components/HospitalCard";
import Footer from "../components/Footer";


function Hospital({hospital}) {

  return (
    <>
      <Header />
      <HospitalCard hospital={hospital}/>
      <Footer />
    </>
  );
}

export default Hospital;
