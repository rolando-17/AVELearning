const Register = document.getElementById('register_id')
const Log =  document.getElementById('login_id')

Register.addEventListener('submit',(e) => {
  e.preventDefault()
  //console.log('submited')
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  //console.log(email,password);
  //const nombre = Register['nombre']
  //const email = Register['email']
  //const password = Register['password']
  // guardar_cambios(nombre.value, email.value, password.value)3
  firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
          console.log('Usuario registrado!');
          alert('Usuario registrado!')
      })
      .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;           
          console.log(errorMessage);
          alert('Verifique sus datos')
      });
  Register.reset()
})

Log.addEventListener('submit',(e) => {
  e.preventDefault()
  //console.log('submited')
  const email = document.getElementById('login_email').value;
  const password = document.getElementById('login_password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            console.log('sesión iniciada');
            alert('Sesión Iniciada Bienvenido')
            //MANDAR A LLAMAR A EL OTRO HTML 
            window.location="principal.html";
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert('Verifique su correo o contraseña')
        });
  Log.reset()
  
})





