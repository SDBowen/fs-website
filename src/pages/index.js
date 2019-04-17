import React from "react";
import { graphql, withPrefix, Link } from "gatsby";
import Helmet from "react-helmet";
import SEO from "../components/SEO";
import Layout from "../layouts/index";
import Call from "../components/Call";

const Home = props => {
  const services = props.data.allMarkdownRemark.edges;
  const json = props.data.allFeaturesJson.edges;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home" />
      <Helmet>
        <meta
          name="description"
          content="208-866-3055. Wheelchair accessible vans. Always on time. Wheelchair service. Medical transportation. Recreational transportation. Airport transportation."
        />
      </Helmet>
      <div className="intro pb-4">
        <div className="container">
          <h1>
            Timely, Trustworthy,
            <br />
            and Consistent Transportation.
          </h1>
          <p>
            Providing non-emergency medical and private transportation in the
            greater Boise and Southwest Idaho area.
          </p>
        </div>
      </div>

      <div className="container pt-2">
        <Call button />
      </div>

      <div className="container pt-8 pb-5 pt-md-10 pb-md-7">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className="title-3 text-dark mb-3">Our Services</h2>
          </div>
          {services.map(edge => (
            <div
              key={edge.node.frontmatter.path}
              className="col-12 col-md-6 col-lg-4 mb-2"
            >
              <div className="feature">
                {edge.node.frontmatter.image && (
                  <div className="feature-image">
                    <img src={withPrefix(edge.node.frontmatter.image)} />
                  </div>
                )}
                <Link to={edge.node.frontmatter.path}>
                  <h2 className="feature-title">
                    {edge.node.frontmatter.title}
                  </h2>
                </Link>

                <div className="feature-content">
                  {edge.node.frontmatter.description}
                </div>
              </div>
            </div>
          ))}
          <div className="col-12 text-center">
            <Link className="button button-primary mt-2" to="/services">
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            description
            image
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
          image
        }
      }
    }
  }
`;

export default Home;
