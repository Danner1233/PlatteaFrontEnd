(function() {
    // Verifica si los elementos ya están disponibles
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
  
    // Asegúrate de que los elementos existen antes de añadir eventos
    if (signUpButton && signInButton && container) {
      signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
      });
  
      signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
      });
    }
  })();
  