document.getElementById("result").style.display = "none";
function validateForm() {
    if(document.getElementById("fname").value == "" || document.getElementById("sname").value == "" || document.getElementById("email").value == "" || document.getElementById("adress").value == ""){
	window.alert("Name must be filled out");
        }else
        {
        	document.getElementById("firstname").innerHTML=document.getElementById("fname").value;
        	document.getElementById("lastname").innerHTML=document.getElementById("sname").value;
        	document.getElementById("mail").innerHTML=document.getElementById("email").value;
        	document.getElementById("adr").innerHTML=document.getElementById("adress").value;
        	document.getElementById("validateForm").style.display="none";
        	document.getElementById("result").style.display="block";
        }
}

