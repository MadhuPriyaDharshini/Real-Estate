function phonenumber(inputtxt)
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

  function validateForm(name)
  {
   const name1 = ""
    if(name.value=="")
     {alert("Oops!You've forgot to fill your name");
      return false;
     }
    else{
      return true;
    }
  }
  