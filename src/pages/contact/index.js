import React from "react";
import SEO from "../../components/SEO";
import Layout from "../../layouts/index";

const Contact = props => (
  <Layout bodyClass="page-contact">
    <SEO title="Contact" />
    <div className="intro intro-small">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Contact</h1>
            <p>
              We welcome your feedback. Your input is greatly appreciated and
              valued by us.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <form
        name="feedback"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="feedback" />
        <div className="form-group">
          <label htmlFor="name">
            Name:
            <input
              className="form-control"
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email:
            <input
              className="form-control"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="phone">
            <div>Phone Number:</div>
            <input
              className="form-control"
              id="phone"
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="message">
            <div>Message:</div>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              placeholder="Enter your message..."
            />
          </label>
        </div>

        <div className="form-group mb-2">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  </Layout>
);

export default Contact;
