document
  .getElementById('button-login')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const phoneNumber = document.getElementById('phone-number');
    console.log(phoneNumber.value);
  });
