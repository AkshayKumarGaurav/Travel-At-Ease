import React from "react";
import { First } from "../Components/First";
import { Second } from "../Components/Second";
import { Featuredoffers } from "../Components/FeaturedOffers";
import Options from "../Components/Options";
import Reward from "../Components/Reward";

export const HomePage = () => {
  return (
    <div>
      <First />
      <Second />
      <Featuredoffers />
      <Options />
      <br />
      <br />
      <Reward />
    </div>
  );
};
