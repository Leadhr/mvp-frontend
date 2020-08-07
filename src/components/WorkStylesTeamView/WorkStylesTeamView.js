import React from "react";
import Head from "../Head/Head";
import Viz from "../Viz/Viz";
import Avatar from "../Avatar/Avatar";
import Search from "../Search/Search";

import TeamWrapper from "../TeamWrapper/TeamWrapper"

export default function WorkStylesTeamView() {
  return (
    <div className="WorkStylesTeamView col">
      <div className="row">
        <div className="MainView col">
          <Head />
          <Viz />
        </div>
        <div className="SecondView col">
          <Avatar />
          <Search />
          <TeamWrapper />
        </div>
      </div>
    </div>
  );
}
