$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:10
            },
            sname:{
                required:true,
                minlength:4,
                maxlength:20

            },
            emailaddress:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:6

            },
            day:{
                required:true,
                

            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            gender:{
                required:true
            }
           
        },
        messages:{
            fname:{
                required:"enter first name",
                minlength:"enter atleast 4 characters"
            }
                
            
        }
    })
})