import React from "react";

const Filtrotres = () => {
  return (
    <div className="col-md-6 pb-4">
      <div className="d-flex">
        <select className="form-control">
          <option>Destacado</option>
          <option>A - Z</option>
          <option>Articulo</option>
        </select>
      </div>
    </div>
  );
};

export default Filtrotres;
