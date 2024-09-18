// cash out btn click hidden to display in
document
  .getElementById('btn-show-cash-out')
  .addEventListener('click', function () {
    document.getElementById('cash-out-form').classList.remove('hidden');

    document.getElementById('add-money-form').classList.add('hidden');
  });

// now add money btn click

document
  .getElementById('btn-show-add-money')
  .addEventListener('click', function () {
    document.getElementById('cash-out-form').classList.add('hidden');

    document.getElementById('add-money-form').classList.remove('hidden');
  });
