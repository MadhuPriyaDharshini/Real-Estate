function phonenumber(inputtxt) {
  console.log(inputDate);
  var phoneno = /^\d{10}$/;

  if (inputtxt.value.match(phoneno)) {
    return true;
  } else {
    alert("Not a valid Phone Number");
    return false;
  }
  }