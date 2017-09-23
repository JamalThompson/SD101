function FtoC() {
  var DegF = document.getElementById("txtDegF");
  var DegC = document.getElementById("divDegC");

  DegC.innerHTML = (DegF.value-32)*5/9;

}
