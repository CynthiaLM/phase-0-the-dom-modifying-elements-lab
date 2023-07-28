//remove main with id of main
const main = document.querySelector('#main');
  main.remove();

  //create h1 with id of victory
const newHeader = document.createElement ('h1');
  newHeader.id = 'victory';
  newHeader.textContent = 'laleti is the champion';
  document.body.append(newHeader);
