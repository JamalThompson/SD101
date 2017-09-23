window.onload = function() {
  document.getElementById('txtCardNumber').onkeyup = ccInputMask;
    document.getElementById('txtPhoneNumber').onkeyup = phoneInputMask;
}

function ccInputMask(event){
  var cardNumberTextbox = document.getElementById('txtCardNumber');
var unMaskedCardNumber = removeCCMask(cardNumberTextbox.value);

if(event.keyCode == 8){
  return;
}

  switch (unMaskedCardNumber.length) {
    case 4:
    cardNumberTextbox.value = unMaskedCardNumber+"-";
      break;

      case 8:
      cardNumberTextbox.value = unMaskedCardNumber.substr(0, 4) + "-" + unMaskedCardNumber.substr(4, 4)+"-";

        break;

        case 12:
        cardNumberTextbox.value = unMaskedCardNumber.substr(0, 4) + "-" + unMaskedCardNumber.substr(4, 4)+"-" + unMaskedCardNumber.substr(8,4)+"-";

          break;

            case 16:
            cardNumberTextbox.value = unMaskedCardNumber.substr(0, 4) + "-" + unMaskedCardNumber.substr(4, 4)+"-" + unMaskedCardNumber.substr(8,4)+"-" + unMaskedCardNumber.substr(12,4);
              break;

  }
}


function removeCCMask(ccInput){
  return ccInput.replace(/-/gi,"");

}







function phoneInputMask() {

}
