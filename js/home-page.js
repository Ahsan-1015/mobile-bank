document
  .getElementById('btn-add-money')
  .addEventListener('click', function (event) {
    event.preventDefault();

    const moneyInput = document.getElementById('input-add-money').value;
    const pinInput = document.getElementById('input-pin-number').value;

    if (pinInput === '0000') {
      const currentBalance =
        document.getElementById('current-balance').innerText;

      const currentBalanceFloat = Number(currentBalance);
      const moneyInputFloat = Number(moneyInput);

      const mainBalance = currentBalanceFloat + moneyInputFloat;
      const updateBalance = document.getElementById('current-balance');
      updateBalance.innerText = mainBalance;
      // console.log(mainBalance);
    } else {
      alert('wrong pin number! Enter your current pin number');
    }
  });
