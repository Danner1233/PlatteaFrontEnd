import React, { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    // Crear un nuevo elemento script
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/js/loginA.js`;
    script.async = true;
    
    // Agregar el script al documento
    document.body.appendChild(script);

    // Limpiar el script cuando el componente se desmonte
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="form-container sign-in-container" id="container">
      <form action="#">
        <h1>Iniciar Sesión</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <span>o usa tu cuenta</span>
        <input type="email" placeholder="Correo Electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <a href="#">¿Olvidaste tu contraseña?</a>
        <button>Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
