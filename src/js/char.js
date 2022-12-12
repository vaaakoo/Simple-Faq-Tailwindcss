function countChars(obj) {
  let maxLength = 300;
  var strLength = obj.value.length;

  if (strLength < maxLength) {
    document.getElementById("charNum").innerHTML = strLength + "/300";
  }
}
