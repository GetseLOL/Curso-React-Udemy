import React from "react";
import PropTypes from "prop-types";
import "./FirstApp.css";

const FirstApp = ({ title, subTitle, name }) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <h2>{subTitle}</h2>
      <h2>{subTitle}</h2>
      <h3>{name}</h3>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  // title: "No hay titulo",
  subTitle: "No hay subtitulo",
  name: "No hay titulo",
};

export default FirstApp;
