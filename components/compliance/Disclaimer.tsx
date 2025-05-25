import * as React from "react";
import Link from "next/link";

import "./compliance.scss";

export const Disclaimer = () => (
  <div className="compliance">
    <div className="compliance__container">
      <div className="compliance__document">
        <h1 className="compliance__title">DISCLAIMER</h1>
        <p className="compliance__date">
          Last updated:&nbsp;
          <b>19.05.2025</b>
        </p>
        <h2 className="compliance__title-small">WEBSITE DISCLAIMER</h2>
        <section>
          <p className="compliance__par">
            The information provided by <b>AristoByte</b>
            &nbsp;(&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) on&nbsp;
            <Link className="compliance__link" href="/">
              https://aristobyte.com
            </Link>
            &nbsp;(the &quot;Site&quot;) and our mobile application &nbsp;is for
            general informational purposes only. All information on the Site and
            our mobile application &nbsp;is provided in good faith, however we
            make no representation or warranty of any kind, express or implied,
            regarding the accuracy, adequacy, validity, reliability,
            availability, or completeness of any information on the Site or our
            mobile application. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY
            LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A
            RESULT OF THE USE OF THE SITE OR OUR MOBILE APPLICATION &nbsp;OR
            RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE AND OUR MOBILE
            APPLICATION. YOUR USE OF THE SITE AND OUR MOBILE APPLICATION
            &nbsp;AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE AND OUR
            MOBILE APPLICATION &nbsp;IS SOLELY AT YOUR OWN RISK.
          </p>
        </section>
      </div>
    </div>
  </div>
);
