

var inputs = document.querySelectorAll("input");
var textarea=document.querySelector("textarea");



var pattern = {
	uName:/^[a-z0-9]{5,12}$/,
	password:/^[\w@-]{5,20}$/,
	email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
	fName:/^[a-z]{3,10}$/,
	lName:/^[a-z]{4,10}$/,
	fullName: /^[a-z\s]{5,20}$/,
	address:/^[\d\w.\s,-]{10,100}$/,
	city: /^[a-z]{5,12}$/,
	state: /^[A-Z]{2}$/,
	zip: /^[a-z0-9\s]{7}$/,
	cardname: /^[a-z\s]{3,20}$/,
	cardnumber: /^[\d]{16}$/,
	cvv:/^[\d]{3}$/,
	cardmonth:/^[a-z]{3,10}$/,
    cardyear:/^[\d]{4}$/,
	msg:/^[\d\w.\s,-]{10,100}$/,
}

function validate(field, regex){

	if(regex.test(field.value)){
		field.className = "valid";
	}else{
		field.className = "invalid";
	}
	
}
function checkValidation(form){
	if(form.uName.value == "admin" && form.password.value == "12345")
				{
					alert("Welcome to my Website !!");
					window.open('home.html')/*opens the target page while Id & password matches*/
					
				}
				 else
				{
				   alert("Error Password or Username")/*displays error message*/
				   return false;
				}
}
function checkPassword(form) { 
				uName = form.uName.value;
				email = form.email.value;
                password = form.password.value; 
                cpassword = form.cpassword.value;
		
  
                    
                if (password != cpassword) { 
                    alert ("\nPassword did not match: Please try again...");
					return false;
                } 
				else{
					
				}
				if(uName == '' || email == '' || password == '' || cpassword == '' )
				{
					alert ("\nPlease enter all the details properly and try again...") 
					return false;
				}
           
                else{ 
                    alert("Welcome to Login Page!") 
                    return true; 
                } 
} 
			
inputs.forEach(function(input){
	
	input.addEventListener("keyup", function(e){
		validate(e.target, pattern[e.target.attributes.name.value])
	})
	
})
textarea.addEventListener("keyup", function(e){
	validate(e.target,pattern[e.target.attributes.name.value])
})
function checkout_btn(form){
	fullName = form.fullName.value;
	email = form.email.value;
	address = form.address.value; 
	city = form.city.value;
	state = form.state.value;
	zip = form.zip.value;
	cardname = form.cardname.value;
	cardnumber = form.cardnumber.value;
	cardmonth = form.cardmonth.value;
	cardyear = form.cardyear.value;
	cvv = form.cvv.value;

	
	if(fullName == '' || email == '' || address == '' || city == ''  || state == ''  || zip == ''  || cardname == ''  || cardnumber == ''  || cardmonth == ''  || cardyear == ''  || cvv == '' )
	{
		alert ("\nPlease enter all the details properly and try again...") 
		return false;
	}

	else{ 
		alert ("Payment Done Successfully!!");
		window.open('lastPage.html') 
		return true;  
	} 
	
}
function msgSend_btn(form){

	fName = form.fName.value;
	lName = form.lName.value;
	email = form.email.value; 
	msg = form.msg.value;


		
	
	if(fName == '' || lName == '' || email == '' || msg == '' )
	{
		alert ("\nPlease enter all the details properly and try again...") 
		return false;
	}

	else{ 
		alert ("Your Message Has been Sent!!");
		window.open('home.html') 
		return true;  
	} 
		
	
	
	
}








