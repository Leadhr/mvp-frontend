import React from 'react';
import MainView from "../MainView/MainView"
import SecondView from "../SecondView/SecondView"

export default function WorkStylesCompanyView() {
    return (
        <div className="WorkStylesCompanyView col">
          <div className="row">
            <MainView context="workstylescompany"/>
            <SecondView context="workstylescompany"/>
          </div>
        </div>
      );
}