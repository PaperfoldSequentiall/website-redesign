import React from 'react';
import LandingHeader from './landingHeader/LandingHeader';
import LandingForm from './landingForm/LandingForm';
import ServiceComp from './serviceComp/ServiceComp';

const Landing = () => {
  return (
    <>
      <LandingHeader />
      <LandingForm />
      <ServiceComp />
    </>
  );
};

export default Landing;
