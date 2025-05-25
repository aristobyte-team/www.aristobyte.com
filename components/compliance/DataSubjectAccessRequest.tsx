import * as React from "react";
import Link from "next/link";

import "./compliance.scss";

export const DataSubjectAccessRequest = () => {
  return (
    <div className="compliance">
      <div className="compliance__container">
        <div className="compliance__document">
          <h1 className="compliance__title">
            AristoByte Data Subject Access Request (DSAR) Policy
          </h1>
          <p className="compliance__date">
            Last updated:&nbsp;<b>19.05.2025</b>
          </p>

          <h2 className="compliance__title-small">1. Introduction</h2>
          <p className="compliance__par">
            At AristoByte, we prioritize data privacy and transparency. This
            Data Subject Access Request (DSAR) Policy describes how you, as a
            data subject, can request access to, correction of, or deletion of
            your personal information that we collect, store, or process through
            our digital platforms and services.
          </p>
          <p className="compliance__par">
            This policy ensures compliance with applicable data protection
            regulations, including the General Data Protection Regulation
            (GDPR), California Consumer Privacy Act (CCPA), and other global
            privacy laws.
          </p>
          <h2 className="compliance__title-small">
            2. What is a Data Subject Access Request?
          </h2>
          <p className="compliance__par">
            A Data Subject Access Request (DSAR) is a formal request submitted
            by an individual (the data subject) to obtain access to the personal
            data that AristoByte holds about them. This includes requests to:
          </p>
          <ul className="compliance__list compliance__list--with-dots">
            <li>
              <p className="compliance__par">
                Access the personal data we have collected.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Request corrections or updates to personal data.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Request deletion or restriction of processing of personal data.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Obtain a copy of personal data in a portable format.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Object to specific types of data processing.
              </p>
            </li>
          </ul>
          <h2 className="compliance__title-small">3. How to Submit a DSAR</h2>
          <p className="compliance__par">
            You may submit a Data Subject Access Request through the following
            channels:
          </p>
          <ul className="compliance__list compliance__list--with-dots">
            <li>
              <p className="compliance__par">
                Online Contact Form:&nbsp;
                <Link className="compliance__link" href="/contact">
                  https://aristobyte.com/contact
                </Link>
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Email:&nbsp;
                <Link
                  className="compliance__link"
                  href="mailto:info@aristobyte.com"
                  target="_blank"
                >
                  info@aristobyte.com
                </Link>
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Phone:&nbsp;
                <Link
                  className="compliance__link"
                  href="tel:+48-451-652-749"
                  target="_blank"
                >
                  (+48) 451 652 749
                </Link>
              </p>
            </li>
          </ul>
          <p className="compliance__par">
            When submitting a request, please provide sufficient information to
            verify your identity and specify the nature of your request to help
            us respond effectively.
          </p>
          <h2 className="compliance__title-small">
            4. Verification of Identity
          </h2>
          <p className="compliance__par">
            To protect your personal information and prevent unauthorized
            disclosures, AristoByte may require you to verify your identity
            before processing your DSAR. We may request additional information
            or documentation for this purpose.
          </p>
          <h2 className="compliance__title-small">5. Response Timeframe</h2>
          <p className="compliance__par">
            We strive to acknowledge and respond to DSARs within 30 calendar
            days &nbsp;of receipt. If the request is complex or requires
            additional verification, we may extend this period by up to 60 days,
            in which case we will notify you accordingly.
          </p>
          <h2 className="compliance__title-small">
            6. Scope of Information Provided
          </h2>
          <p className="compliance__par">
            Upon validating your request, AristoByte will provide you with:
          </p>
          <ul className="compliance__list compliance__list--with-dots">
            <li>
              <p className="compliance__par">
                A copy of the personal data we process about you.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Details on the purposes of processing.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Categories of personal data concerned.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Recipients or categories of recipients with whom your data has
                been shared.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Retention periods or criteria used to determine data retention.
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Information on your rights related to data correction, deletion,
                and objection.
              </p>
            </li>
          </ul>
          <h2 className="compliance__title-small">
            7. Data Correction and Deletion Requests
          </h2>
          <p className="compliance__par">
            You may request corrections to inaccurate or incomplete personal
            data. You may also request deletion of your personal data where
            applicable, unless retention is required for legal or legitimate
            business purposes.
          </p>
          <h2 className="compliance__title-small">8. Data Portability</h2>
          <p className="compliance__par">
            Where applicable, you can request your personal data in a
            structured, commonly used, and machine-readable format to facilitate
            transfer to another data controller.
          </p>
          <h2 className="compliance__title-small">
            9. Limitations and Exceptions
          </h2>
          <p className="compliance__par">
            Certain data may be exempt from disclosure or deletion under
            applicable laws, such as data necessary for compliance with legal
            obligations, fraud prevention, or exercising legal claims.
          </p>
          <h2 className="compliance__title-small">10. No Fee Policy</h2>
          <p className="compliance__par">
            AristoByte processes one DSAR per individual free of charge within a
            12-month period. Additional requests within the same period may
            incur a reasonable administrative fee.
          </p>
          <h2 className="compliance__title-small">11. Contact Information</h2>
          <p className="compliance__par">
            For questions or concerns regarding this DSAR Policy or to submit a
            request, please contact Data Privacy Officer (DPO):
          </p>
          <ul className="compliance__list compliance__list--with-dots">
            <li>
              <p className="compliance__par">
                Online Contact Form:&nbsp;
                <Link className="compliance__link" href="/contact">
                  https://aristobyte.com/contact
                </Link>
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Email:&nbsp;
                <Link
                  className="compliance__link"
                  href="mailto:info@aristobyte.com"
                  target="_blank"
                >
                  info@aristobyte.com
                </Link>
              </p>
            </li>
            <li>
              <p className="compliance__par">
                Phone:&nbsp;
                <Link
                  className="compliance__link"
                  href="tel:+48-451-652-749"
                  target="_blank"
                >
                  (+48) 451 652 749
                </Link>
              </p>
            </li>
          </ul>
          <h2 className="compliance__title-small">
            12. Changes to this Policy
          </h2>
          <p className="compliance__par">
            AristoByte reserves the right to update this DSAR Policy to reflect
            changes in legal requirements or business practices. Any updates
            will be posted on our website.
          </p>
        </div>
      </div>
    </div>
  );
};
