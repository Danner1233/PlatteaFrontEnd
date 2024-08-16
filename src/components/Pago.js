import React, { useState } from 'react';

const Tarjeta = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="container-fluid bg-light py-5">
      <div className="col-md-6 m-auto text-center">
        <h1 className="h1">Agregar Tarjeta</h1>
        <p>
          ¿Quieres agregar una nueva tarjeta a tu cuenta? Completa la información a continuación y haz clic en "Agregar".
        </p>
        <form id="tarjetaForm" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="cardNumber" className="form-label">Número de Tarjeta</label>
            <input type="text" className="form-control" id="cardNumber" placeholder="1234 5678 9012 3456" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="cardName" className="form-label">Nombre en la Tarjeta</label>
            <input type="text" className="form-control" id="cardName" placeholder="Nombre Apellido" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="cardName" className="form-label">Número de Identificación</label>
            <input type="text" className="form-control" id="cardName" placeholder="Número de Identificación" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="expiryDate" className="form-label">Fecha de Expiración</label>
            <input type="date" className="form-control" id="expiryDate" placeholder="MM/AA" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="cvv" className="form-label">CVV</label>
            <input type="text" className="form-control" id="cvv" placeholder="123" onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-success btn-lg">Agregar</button>
        </form>
      </div>
    </div>
  );
};

export default Tarjeta;
