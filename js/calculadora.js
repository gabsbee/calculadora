function Somar() {
  var prim_num = document.getElementById("primeiro-numero").value;
  var seg_num = document.getElementById("segundo-numero").value;

  var resultado = parseInt(prim_num) + parseInt(seg_num);

  document.getElementById("result").innerHTML = resultado;
}

function Subtrair() {
  var prim_num = document.getElementById("primeiro-numero").value;
  var seg_num = document.getElementById("segundo-numero").value;

  var resultado = parseInt(prim_num) - parseInt(seg_num);

  document.getElementById("result").innerHTML = resultado;
}

function Multiplicar() {
  var prim_num = document.getElementById("primeiro-numero").value;
  var seg_num = document.getElementById("segundo-numero").value;

  var resultado = parseInt(prim_num) * parseInt(seg_num);

  document.getElementById("result").innerHTML = resultado;
}
function Dividir() {
  var prim_num = document.getElementById("primeiro-numero").value;
  var seg_num = document.getElementById("segundo-numero").value;

  var resultado = parseInt(prim_num) / parseInt(seg_num);

  document.getElementById("result").innerHTML = resultado;
}
