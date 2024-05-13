import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";
import RightSideBar from "@/components/RightSideBar";

export default function Home() {
  const loggedIn = {
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com",
  };
  return (
    <section className={"home"}>
      <div className={"home-content"}>
        <header className={"home-header"}>
          <HeaderBox
            type={"greeting"}
            title={"Welcome"}
            user={loggedIn?.firstName || "Guest"}
            subtext={"Manage your account wisely"}
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1500.22}
          />
        </header>
        {/*  Recent Transactions*/}
      </div>
      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.99 }, { currentBalance: 584.01 }]}
      />
    </section>
  );
}
