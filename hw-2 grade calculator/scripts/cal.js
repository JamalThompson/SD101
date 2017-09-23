

function printGrade() {
  var txtPercentage = document.getElementById("txtPercentage")
  var spnGradeResult = document.getElementById("spnGradeResult")



if (parseInt(txtPercentage.value)>=90) {
  spnGradeResult.innerHTML = "A";

}

else if (parseInt(txtPercentage.value)>=80) {
  spnGradeResult.innerHTML ="B";

}

else if (parseInt(txtPercentage.value)>=70) {
  spnGradeResult.innerHTML = "C";
}

else if (parseInt(txtPercentage.value)>=60) {
  spnGradeResult.innerHTML = "D";
}

else if (parseInt(txtPercentage.value)>=60)
  {
  spnGradeResult.innerHTML = "F"

}

else {
  spnGradeResult.innerHTML = "No Attributed Value"
}
}
