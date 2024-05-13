"use client";

import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className={"w-full"}>
      <CountUp
        decimal={","}
        decimals={2}
        duration={2.0}
        prefix={"RUB"}
        end={amount}
      />
    </div>
  );
};
export default AnimatedCounter;
