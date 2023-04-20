function aleatorio(min,max){
 return Math.floor(Math.random() * (max-min+1)+min);
}

document.querySelectorAll('img').forEach(occurence => {
  let id = occurence.getAttribute('id');
   
  occurence.addEventListener('click', function() {
    console.log('Um botão com o id: ' + id + ' foi clicado!')
     
    var atributo = document.getElementById(id).value;
    var random = aleatorio(1,100);
    var atributo2 = atributo/2;
    var atributo5 = atributo/5;

    alert("você tirou " + random + " no dado.")

    if(atributo2 < random && random <= atributo){
        alert("Você passou com sucesso Normal.");
    }
    else if(atributo5 < random && random <= atributo2){
        alert("Você passou com sucesso Bom.");
    }
    else if(random <= atributo5){
        alert("Você passou com sucesso Muito Bom.");
    }
    else if(random === 1){
        alert("Você passou com sucesso Extremo!");
    }
    else if(random >= atributo){
        alert("Você não passou :(");
    }
    else if(random === 100){
        alert("Você fracassou muito feio :(");
    }

  } );
});

var button = document.querySelector('button');

button.onclick = function calcular() {
  var n0 = parseInt(document.getElementById('a').value);
  var n1 = parseInt(document.getElementById('b').value);
  var n2 = parseInt(document.getElementById('c').value);
  var bonus = n0+n2;
  if(bonus >= 2 && bonus <= 64) {
  document.getElementById('bonusdedano').innerHTML = "-2";
  }
  else if(bonus >= 65 && bonus <= 84) {
  document.getElementById('bonusdedano').innerHTML = "-1";
  }
  else if(bonus >= 85 && bonus <= 124) {
  document.getElementById('bonusdedano').innerHTML = "0";
  }
  else if(bonus >= 125 && bonus <= 164) {
  document.getElementById('bonusdedano').innerHTML = "+1d4";
  }
  else if(bonus >= 165 && bonus <= 204) {
  document.getElementById('bonusdedano').innerHTML = "+1d6";
  }
  else if(bonus >= 205 && bonus <= 284) {
  document.getElementById('bonusdedano').innerHTML = "+2d6";
  }
  else if(bonus >= 285 && bonus <= 364) {
  document.getElementById('bonusdedano').innerHTML = "+3d6";
  }
  else if(bonus >= 365 && bonus <= 444) {
  document.getElementById('bonusdedano').innerHTML = "+4d6";
  }
  else if(bonus >= 445 && bonus <= 524) {
  document.getElementById('bonusdedano').innerHTML = "+5d6";
  }

  document.getElementById('vida').value = (n1 + n2)/10;
  document.getElementById('sanidade').value = document.getElementById('g').value;
}