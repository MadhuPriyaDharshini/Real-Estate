function phonenumber(inputtxt, inputdate)
{
  var phoneno = /^\d{10}$/;

  if(inputtxt.value.match(phoneno))
  {
      flag = 1;
  }
  else
  {
     alert("Not a valid Phone Number");
     return false;
  }
  }