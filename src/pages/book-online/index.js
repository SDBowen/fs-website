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
            <p>
              Complete the form below to schedule your transportation. We will
              call and confirm your booking shortly.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <form
            name="booking"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="booking" />
            <div className="form-group">
              <label htmlFor="name" className="mr-1">
                Name
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
              </label>

              <label htmlFor="phone" className="mr-1">
                Phone Number
                <input
                  className="form-control"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                />
              </label>

              <label htmlFor="email" className="mr-1">
                Email
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="mr-1">
                Pickup Date
                <input className="form-control" type="date" name="date" />
              </label>

              <label htmlFor="pickup-time" className="mr-1">
                Pickup Time
                <input
                  className="form-control"
                  type="time"
                  name="pickup-time"
                />
              </label>

              <label htmlFor="appointment-time">
                Appointment Time
                <input
                  className="form-control"
                  type="time"
                  name="appointment-time"
                />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="pickup-address" className="mr-1">
                Pickup Address
                <input
                  className="form-control"
                  type="text"
                  name="pickup-address"
                  placeholder="Street"
                />
              </label>
              <label htmlFor="pickup-city" className="mr-1">
                Pickup City
                <input
                  className="form-control"
                  type="text"
                  name="pickup-city"
                  placeholder="City"
                />
              </label>
              <label htmlFor="pickup-state" className="mr-1">
                Pickup State
                <input
                  className="form-control"
                  type="text"
                  name="pickup-address"
                  placeholder="State"
                />
              </label>
              <label htmlFor="pickup-zip">
                Pickup Zip Code
                <input
                  className="form-control"
                  type="text"
                  name="pickup-zip"
                  placeholder="Zip Code"
                />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="return-time">
                Return Time
                <input
                  className="form-control"
                  type="time"
                  name="return-time"
                />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="destination-address" className="mr-1">
                Destination Address
                <input
                  className="form-control"
                  type="text"
                  name="destination-address"
                  placeholder="Street"
                />
              </label>
              <label htmlFor="destination-city" className="mr-1">
                Destination City
                <input
                  className="form-control"
                  type="text"
                  name="destination-city"
                  placeholder="City"
                />
              </label>
              <label htmlFor="destination-state" className="mr-1">
                Destination State
                <input
                  className="form-control"
                  type="text"
                  name="destination-address"
                  placeholder="State"
                />
              </label>
              <label htmlFor="destination-zip" className="mr-1">
                Destination Zip Code
                <input
                  className="form-control"
                  type="text"
                  name="destination-zip"
                  placeholder="Zip Code"
                />
              </label>
            </div>

            <div className="form-group">
              <div className="form-check form-check-inline">
                <span className="mr-2">
                  Would you like to be contacted with a quote?
                </span>
                <label className="form-check-label mr-1" htmlFor="quote-yes">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="quote-yes"
                    value="Yes"
                  />
                  Yes
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="quote-no">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="quote-no"
                    value="No"
                  />
                  No
                </label>
              </div>
            </div>

            <div className="form-group">
              <div className="form-check form-check-inline">
                <span className="mr-2">Payment Method:</span>
                <label className="form-check-label mr-1" htmlFor="payment-cash">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment-cash"
                    value="Cash"
                  />
                  Cash
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label
                  className="form-check-label mr-1"
                  htmlFor="payment-check"
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment-check"
                    value="Check"
                  />
                  Check
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label
                  className="form-check-label mr-1"
                  htmlFor="payment-credit"
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment-credit"
                    value="Credit"
                  />
                  Credit
                </label>
              </div>

              <div className="form-check form-check-inline">
                <label
                  className="form-check-label mr-1"
                  htmlFor="payment-account"
                >
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment-account"
                    value="Account"
                  />
                  Bill to Account
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="comments" className="col-10">
                Questions / Comments
                <textarea
                  className="form-control"
                  type="text"
                  name="comments"
                  placeholder="Enter questions or comments"
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
      </div>
    </div>
  </Layout>
);

export default Book;
