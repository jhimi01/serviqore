import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Services = () => {

  useEffect(()=>{
    window.scroll(0, 0)
  },[])

  return (
    <div>
      <Helmet>
        <title>service | serviqore</title>
      </Helmet>
      this is a service page
    </div>
  );
};

export default Services;
