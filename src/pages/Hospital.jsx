import React from "react";
import Header from "../component/Header";
import HospitalCard from "../component/HospitalCard";
import Footer from "../component/footer";

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
