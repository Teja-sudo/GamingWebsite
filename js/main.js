var _status=window.document.getElementById("login-register-button").innerText;
var _stat=window.document.getElementById("logdemo");
function hamburgerMenu(){
    var navMenu = document.getElementById('nav-menu-container');
    navMenu.style.display = navMenu.offsetParent === null ? 'block' : 'none';
}
function myfunction1(){
     console.log(_status);
     
     if(_status=="Login")
    {
        console.log(_status);
        window.location.href="login.html";
    }
    if(_status=="Logout"){
        _stat.innerHTML=_stat.innerHTML.replace('Logout','Login');
      }
}

function myfunction2(){
    var un,pa,ue,j=0;
    
    un=document.forms["rform"]["name"].value;
    pa=document.forms["rform"]["password"].value;
    ue=document.forms["rform"]["email"].value;
    var atpos=ue.indexOf("@");
    var dotpos=ue.lastIndexOf(".");
    if(un==""){
    alert("User Name must be filled out");}
    else{j+=1;}
    if(pa.length<6){
    alert("Password must be atleast 6 characters");}
    else{j+=1;}
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=ue.length){
    alert("Not a valid e-mail address");}
    else{j+=1;}
    if(j>2){
        window.location.href="index.html";
        _stat.innerHTML=_stat.innerHTML.replace('Login','Logout');
    }

}
function myfunction3(){
    var lpa,lue,i=0;
    
    lpa=document.forms["lform"]["password"].value;
    lue=document.forms["lform"]["email"].value;
    var atpos=lue.indexOf("@");
    var dotpos=lue.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=lue.length){
    alert("Not a valid e-mail address");}
    else{i+=1;}
    if(lpa.length<6){
        alert("Password must be atleast 6 characters");}
    else{i+=1;}
    if(i>1){
        window.location.href="index.html";
        _stat.innerHTML=_stat.innerHTML.replace('Login','Logout');
    }

}

