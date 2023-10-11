const form = document.querySelector('.login-form');

const submit = event => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    return alert('Uzupełnij wszystkie pola!');
  }
  loginData.email = email.value;
  loginData.password = password.value;

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  onClick.currentTarget.reset();
  console.log(loginData);
};

form.addEventListener('submit', submit);
