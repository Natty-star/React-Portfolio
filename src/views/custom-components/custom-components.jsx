import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner2 from "../../components/banner2/banner2.jsx";
import Footer from "../../components/footer/footer.jsx";

// sections for this page

import PortfolioComponent from "./sections/portfoliocomponent.jsx";
import PricingComponent from "./sections/pricingcomponent.jsx";
import ContactComponent from "./sections/contactcomponent.jsx";

const CustomComponents = () => {
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <HeaderBanner2 />
          <PortfolioComponent />
          <PricingComponent />
          <ContactComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

CustomComponents.propTypes = {
  classes: PropTypes.object,
};

export default CustomComponents;
