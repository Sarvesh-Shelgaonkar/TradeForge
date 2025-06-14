import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";
import PricingTables from "./PricingTables";

const PricingPage = () => {
  return (
    <>
      <Hero />
      <PricingTables />
      <OpenAccount />
      <Brokerage />
    </>
  );
};

export default PricingPage;
