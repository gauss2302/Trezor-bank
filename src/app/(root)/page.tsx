import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

export default function Home() {
  const loggedIn = { firstName: "John Doe" };
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
      </div>
    </section>
  );
}
