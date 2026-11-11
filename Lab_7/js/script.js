function init(){
  //add your javascrip between these two lines of code
  
  let button = document.getElementById('entrybutton');
  let input = document.getElementById('entryinput');
  let output = document.getElementById('textoutput');

  button.addEventListener('click', function() {
      let message = input.value;
      alert('Janel Abad: ' + message);
      output.textContent = message;
  });

}

window.addEventListener('load', init);
