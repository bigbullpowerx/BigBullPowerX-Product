function validateForm(flag) {
        let x = document.forms["contact-form"]["name"].value;
        let y = document.forms["contact-form"]["phone"].value;
        let z = document.forms["contact-form"]["address"].value;
        var phoneno = /^\d{10}$/;

    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
  
    else if (y == "") {
        alert("Phone Number must be filled out");
        return false;
    }

    else if(y!="")
    {
        if(y.match(phoneno)){

            if(z == ""){
                alert("Address must be filled out");
                return false;
            }
            else{
                flag = true;
                return true;
            }
        }
        else{
            alert("Not a valid Phone Number");
            return false;
         }

    }

    else if(z == ""){
        alert("Address must be filled out");
        return false;
    }
  
    
    
    else{
        flag=true;
    }

  }
  
