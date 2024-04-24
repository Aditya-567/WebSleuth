"use client";

import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter backgroundColor="dark" className="text-center text-lg-left">
      <MDBContainer className="p-4">
        <section className="mb-4">
          <MDBRow>
            <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Newsletter Signup</h5>

              <p>
                Sign up for our newsletter to get the latest news and updates.
              </p>

              <div className="form-outline form-white mb-4">
                <MDBInput
                  label="Email address"
                  id="form5Example2"
                  type="email"
                />
                <MDBBtn outline color="dark" className="mt-2">
                  Subscribe
                </MDBBtn>
              </div>
            </MDBCol>

            <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Follow us</h5>

              <a href="https://www.facebook.com/" className="me-4 text-reset">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/" className="me-4 text-reset">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/" className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/" className="me-4 text-reset">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/" className="me-4 text-reset">
                <i className="fab fa-github"></i>
              </a>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Company Name:
        <a className="text-reset fw-bold" href="https://yourdomain.com/">
          yourdomain.com
        </a>
      </div>
    </MDBFooter>
  );
}
