import React from "react";
import Footer from "../components/Footer";

const footer = () => {
  return (
    <div>
      <Footer>
        <Footer.Title>Questions? Contact Us</Footer.Title>

        <Footer.Row>
          <Footer.Column>
            <Footer.Link href="#">FAQ</Footer.Link>
            <Footer.Link href="#">Investor Relations</Footer.Link>
            <Footer.Link href="#">Privacy</Footer.Link>
            <Footer.Link href="#">Speed Test</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="#">Help Centre</Footer.Link>
            <Footer.Link href="#">Jobs</Footer.Link>
            <Footer.Link href="#">Cookie Preferences</Footer.Link>
            <Footer.Link href="#">Legal Notices</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="#">Account</Footer.Link>
            <Footer.Link href="#">Ways to Watch</Footer.Link>
            <Footer.Link href="#">Corporate Information</Footer.Link>
            <Footer.Link href="#">Netflix Originals</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="#">Media Centre</Footer.Link>
            <Footer.Link href="#">Terms of Use</Footer.Link>
            <Footer.Link href="#">Contact Us</Footer.Link>
          </Footer.Column>
        </Footer.Row>

        <Footer.Text>Netflix Egypt</Footer.Text>
      </Footer>
    </div>
  );
};

export default footer;
