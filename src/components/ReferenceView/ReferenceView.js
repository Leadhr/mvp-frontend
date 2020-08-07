import React from 'react';
import MainView from "../MainView/MainView"
import SecondView from "../SecondView/SecondView"

export default function ReferenceView(props) {
    return (
        <div className="MainView col">
          <div className="row">
            <MainView context="reference"/>
            <SecondView context="reference"/>
          </div>
        </div>
      );
}