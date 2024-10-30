import React from "react";
import Header from "../component/Header";
import HospitalCard from "../component/HospitalCard";
import Footer from "../component/Footer"

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
