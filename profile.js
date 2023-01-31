function phonenumber(inputtxt, inputdate)
{
  var phoneno = /^\d{10}$/;

  if(inputtxt.value.match(phoneno))
  {
      return true;
  }
  else
  {
     alert("Not a valid Phone Number");
     return false;
  }
  }