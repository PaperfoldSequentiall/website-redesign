import React from 'react';
import LandingHeader from './landingHeader/LandingHeader';
import LandingForm from './landingForm/LandingForm';
import ServiceComp from './serviceComp/ServiceComp';
import Work from './work/Work';

const Landing = () => {
  return (
    <>
      <LandingHeader />
      <LandingForm />
      <ServiceComp />
      <Work />
    </>
  );
};

export default Landing;
