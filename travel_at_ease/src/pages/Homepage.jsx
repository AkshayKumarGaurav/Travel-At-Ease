import React from "react";
import { First } from "../components/First";
import { Second } from "../components/Second";
import { Featuredoffers } from "../components/FeaturedOffers";
import Options from "../components/Options";

export const HomePage = () => {
  return (
    <div>
      <First />
      <Second />
      <Featuredoffers />
      <Options />
    </div>
  );
};
