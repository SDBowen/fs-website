import React from "react";
import { StaticQuery, graphql } from "gatsby";

const Call = props => (
  <div className="call">
    <div className="call-box-top">
      <div className="call-phone">
        <span>Call us! </span>
        <strong>{props.data.site.siteMetadata.contact.phone}</strong>
      </div>
    </div>
    {props.button && (
      <div className="call-box-bottom">
        <a href="/book-online" className="button">
          Book Online
        </a>
      </div>
    )}
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            contact {
              email
              phone
            }
          }
        }
      }
    `}
    render={data => <Call button={props.button} data={data} />}
  />
);
