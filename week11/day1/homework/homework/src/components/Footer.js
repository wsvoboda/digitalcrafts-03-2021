import React, { Component } from "react";
import leaf from "../images/leaf.png";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="leftfooter">
          <a
            href={`https://ads.google.com/intl/en_us/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1#!/`}
          >
            Advertising
          </a>
          <a
            href={`https://smallbusiness.withgoogle.com/?subid=us-en-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google&utm_medium=ep&utm_campaign=google_hpbfooter&utm_content=google_hpbfooter&gmbsrc=us-en_US-et-gs-z-gmb-s-z-u~sb-g4sb_srvcs-u`}
          >
            Business
          </a>
          <a href={`https://www.google.com/search/howsearchworks/?fg=1`}>
            How Search works
          </a>
        </div>
        <div className="centerfooter">
          <a
            href={`https://sustainability.google/commitments/?utm_source=googlehpfooter&utm_medium=housepromos&utm_campaign=bottom-footer&utm_content=`}
          >
            <img src={leaf} alt="leaf" />
            Carbon neutral since 2007
          </a>
        </div>
        <div className="rightfooter">
          <a href={`https://policies.google.com/privacy?hl=en&fg=1`}>Privacy</a>
          <a href={`https://policies.google.com/terms?hl=en&fg=1`}>Terms</a>
          <a href={`https://www.google.com/preferences?hl=en&fg=1`}>Settings</a>
        </div>
      </div>
    );
  }
}
