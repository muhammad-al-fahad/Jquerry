$(document).ready(function () {
    var fnValidate =  $("#loginForm").validate({
          rules: {
              "loginForm-email": {
                  required: true,
                  email: true
              },  
              "loginForm-password": {
                  required: true,
                  minlength: 5
              } 
          }
      });

       $('.btn').click(function(e) {
          e.preventDefault();
          if(fnValidate){
          window.location.reload(true);
          Browserlocation.href = 'https://kapco.herokuapp.com/';
          }
          else{
              alert('Try Again');
          }
      });

  });
