function validateForm(form){
    var emailReg= /^\w+([\.-]?\w+)*@\w+(-?\w+)*(\.\w{2,3})+$/;
    if(form==="form1"){
        var emailjs=document.forms['login']['email'].value;
        var passjs=document.forms['login']['password'].value;
        if(emailjs===""){
            document.getElementById("mailm").innerHTML="You must enter an email";
            return false;
        }
        else if(!emailReg.test(emailjs)){
            document.getElementById("mailm").innerHTML="You must enter a valid email";
           return false;
        }
        else if(passjs===""){
            document.getElementById("mailm").innerHTML="You must enter a password";
            return false;
        }
        else{
            document.getElementById("mailm").innerHTML="";
            checkMail();
        }
    }
    else{
        var namejs=document.forms['reg']['name'].value;
        var emailjs=document.forms['reg']['email'].value;
        var passjs=document.forms['reg']['pass'].value;
        var conpassjs=document.forms['reg']['conpass'].value;
        if(namejs===""){
            document.getElementById("val").innerHTML="You must enter a name";
            return false;
        }
        else if(emailjs===""){
            document.getElementById("val").innerHTML="You must enter an email";
            return false;
        }
        else if(!emailReg.test(emailjs)){
            document.getElementById("val").innerHTML="You've entered an invalid email";
            return false;
        }
        else if(passjs===""){
            document.getElementById("val").innerHTML="You must enter a password";
            return false;
        }
        else if(passjs!=conpassjs){
            document.getElementById("val").innerHTML="The passwords don't match";
            return false;
        }
        else{
            document.getElementById("val").innerHTML="";
            register();
        }
    }
}
function register(){
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState == 4 ) {
            if ( xmlhttp.responseText.trim() == 'wrong' ){
                document.getElementById("val").innerHTML="Email already exists";
            }
            else{
                var name=xmlhttp.responseText;
                window.location.href = "welcome.php?name="+ name;
            }
        }
    }
    var name= document.getElementById('namereg').value;
    var email= document.getElementById('emailreg').value;
    var password=document.getElementById('passreg').value;
    password=md5(password);
    var querystr= "?email=" + email + "&password=" + password + "&name=" + name;
    xmlhttp.open("GET","register.php"+querystr,true);
    xmlhttp.send();
}
function checkMail(){
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState == 4 ) {
            if ( xmlhttp.responseText.trim() == 'wrong' ){
                document.getElementById("mailm").innerHTML="wrong email or password";
            }
            else{
                var name=xmlhttp.responseText;
                window.location.href = "welcome.php?name="+ name;
            }
        }
    }
    var email= document.getElementById('email').value;
    var password=document.getElementById('pass').value;
    password=md5(password);
    var querystr= "?email=" + email + "&password=" + password;
    xmlhttp.open("GET","connection.php"+querystr,true);
    xmlhttp.send();
}
function openForm(){
    document.querySelector("#modal").showModal();
}
function closeForm(){
    document.querySelector("#modal").close();
}