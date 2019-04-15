import React from "react";
import SEO from "../../components/SEO";
import Layout from "../../layouts/index";
import Call from "../../components/Call";

const Book = () => (
  <Layout bodyClass="page-contact">
    <SEO title="Contact" />
    <div className="intro intro-small">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Book Online</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-8">
          <h4 className="mt-4">
            Complete the form below to schedule your transportation. We will
            call and confirm your booking shortly.
          </h4>
        </div>
      </div>
      <div className="row">
        <form name="booking" method="POST" data-netlify="true">
          <div className="form-group">
            <div>Your Name:</div>
            <input id="name" type="text" name="name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <div>Your Email:</div>
              <input id="email" type="email" name="email" />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              <div>Your Phone Number:</div>
              <input id="phone" type="tel" name="phone" />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="message">
              <div>Message:</div>
              <textarea id="message" name="message" rows="4" />
            </label>
          </div>

          <div className="form-group mb-2">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  </Layout>
);

export default Book;
