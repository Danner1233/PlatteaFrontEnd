import React from "react";

import Card1 from "./Card3";

const Stores = () => {
  return (
    <div>
      <section className="bg-light">
        <div className="container py-5">
          <div className="row text-center py-3"></div>
          <div className="row">
            <div className="col-12 col-md-4 mb-4">
              <Card1 />
            </div>
            <div className="col-12 col-md-4 mb-4">
              <Card1 />
            </div>
            <div className="col-12 col-md-4 mb-4">
              <Card1 />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stores;
