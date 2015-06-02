function formValidation() {
   
    var errMessages = ""; // Initialize for each time the function is called

    errMessages = validateFname(errMessages); // Call first name validation function
    errMessages = validateLname(errMessages); //call the last name function
    errMessages = validateSid(errMessages);  // Call Student ID function
    errMessages = validateLearn(errMessages); // Call Learn ID Function
    generateEmail();   //Generate Email

    errMessages = validatePhoneNumber(errMessages);  //Call Phone number function

    if (errMessages.length > 0) { 
									
        showErrors(errMessages); 
        return false; 
     
    } else {
        clearShowErrors();
        return true; // No errors - return to browser and submit form
    }

}
/* Valdidate First Name */
function validateFname(errMessages) {
    
    var nameMessageRules = "<p> - Please enter a minimum of 1 alphabetic character</p>";
    var countNonAlpha = 0;
    var stringName = document.getElementById("fname").value;
    stringName = stringName.trim();
    var stringLength = stringName.length;

    if (stringLength == 0) {
        errMessages += "<p><mark>First Name</mark><br /> - The name field can not be left empty or just blank characters<br />" + nameMessageRules + "</p>";
    }

    stringName = stringName.toUpperCase();

    for (i = 0; i < stringLength; i++) {
        if (((stringName.charCodeAt(i) < 65) || (stringName.charCodeAt(i) > 90)) && stringName.charAt(i) != '-' && stringName.charAt(i) != "'") {
            countNonAlpha++;
            break;
        }
    } 

    if (countNonAlpha) {
        errMessages += "<p><mark>First Name</mark><br /> - Only alphabetic characters are allowed for the First name hyphens and apostrope are accepted<br />" + nameMessageRules + "</p>";
    }

    return errMessages;

}


/* Valdidate Last Name */
function validateLname(errMessages) {
  
    var nameMessageRules = "<p> - Please enter a minimum of 1 alphabetic character</p>";

    var stringName = document.getElementById("lname").value;
    var stringName = stringName.trim();

    var stringLength = stringName.length;

    if (stringLength == 0) {
        errMessages += "<p><mark>Last Name</mark><br /> - The Last name field can not be left empty or just blank characters<br />" + nameMessageRules + "</p>";
        return errMessages;
    }

    var countNonAlpha = 0;
    stringName = stringName.toUpperCase();
    for (var i = 0; i < stringLength; i++) {
        if (((stringName.charCodeAt(i) < 65) || (stringName.charCodeAt(i) > 90)) && stringName.charAt(i) != '-' && stringName.charAt(i) != "'") {
            countNonAlpha++;
            break;
        }
    }

    if (countNonAlpha) {
        errMessages += "<p><mark>Last Name</mark><br /> - Only alphabetic characters are allowed for the Last Name<br />" + nameMessageRules + "</p>";
    }

    return errMessages;

}

/* Valdidate Student ID */
function validateSid(errMessages) {

   
    var nameMessageRules = "<p> - Please enter 10 digits only</p>";
    var stringName = document.getElementById("sid").value;
    stringName = stringName.trim();
    var stringLength = stringName.length;



    if (stringLength != 10) {
        errMessages += "<p><mark>Student ID</mark><br /> - The Student ID field can not be left empty and must have 10 digits only<br />" + nameMessageRules + "</p>";
    }
    return errMessages;

    var countNumber = 0;
    for (var i = 0; i < stringLength; i++) {
        if (isNan(stringName.charAt(i))) { //validating for digits
            countNumber++;
            break;
        }
    }
    if (countNumber) {
        errMessages += "<p><mark>Student ID</mark><br /> - Only numeric digits are allowed for student ID <br />" + nameMessageRules + "</p>";
    }
    return errMessages;

}



/* Valdidate Learn ID */
function validateLearn(errMessages) {

    
    var nameMessageRules = "<p> - Please enter a valid Learn ID </p>";

    var stringName = document.getElementById("lid").value;
    stringName = stringName.trim();

    var temp = document.getElementById("fname").value;
    var temp1 = document.getElementById("lname").value;




    if (stringName.charAt(0).toUpperCase() !== temp.charAt(0).toUpperCase()) { // First Character
        errMessages += "<p><mark>Learn ID</mark><br /> - The  first character of the Learn ID must be the same as the  first character of the FirstName <br /></p>";
    }


   

    var donot_accept = 0;
    for (i = 0; i < temp1.length; i++) {
        if (stringName.charAt(i + 1) !== temp1.charAt(i)) {
            donot_accept++;
            break;
        }
    }

    if (donot_accept) {
        errMessages += "<p><mark>Learn ID</mark><br />- Starting from the 2nd character, the following characters should be the field value of “Last Name” <br />" + nameMessageRules + "</p>";
    }

    var countNonDigits = 0;
    if (stringName.length > temp1.length + 1) {
        for (i = temp1.length + 1; i < stringName.length; i++) {
            if (isNaN(stringName.charAt(i))) {
                countNonDigits++;
                break;
            }
        }
    }

    if (countNonDigits) {
        errMessages += "<p><mark>Learn ID</mark><br />- Only numeric digits are allowed after the 'Last Name' in the field ID  <br />" + nameMessageRules + "</p>";
    }

    return errMessages;

}

/* Valdidate Phone Number */
function validatePhoneNumber(errMessages) {

   
    var messageRules = "<p> - Please enter a phone number with the format of (999)999-9999.</p>";
    var stringName = document.getElementById("pnumber").value;
    var stringLength = stringName.length;
    stringName = stringName.trim();
    var countNonNumeric = 0;
    var countNonNumeric1 = 0;
    var countNonNumeric2 = 0;
    var countAreacodezeros = 0;
    var phonenumberzeros = 0;
    var validformat = 0;
    


    if (stringName.charAt(0) !== '(' || stringName.charAt(4) !== ')' || stringName.charAt(8) !== '-' || stringLength !== 13) {
        errMessages += "<p><mark>Phone Number</mark></br>- The phone number was in the wrong format" + messageRules + "</p>"; 
    }
    

    for (var m = 1; m < 4; m++) {
        if (stringName.charAt(m) === "0") { //validating for digits .charAt(0)
            countAreacodezeros++;
            if (countAreacodezeros == 3) {
                break;
            }
        }
    }

    for (var n = 5; n < 13; n++) {

        if (stringName.charAt(n) === "0") { //validating for digits .charAt(0)
            phonenumberzeros++;
            if (phonenumberzeros == 7) {
                break;
            }
        }
    }


    if (countAreacodezeros > 2 || phonenumberzeros > 6) {
        errMessages += "<p><mark>Phone Number</mark><br /> - The area code or the following 7 numeric digits after area code cannot be all zeros </p> ";

    }

    for (var i = 1; i < 4; i++) {
        if (stringName.charCodeAt(i) < 48 || stringName.charCodeAt(i) > 57) { //validating for digits
            countNonNumeric++;
            break;
        }
    }
  

    for (var j = 5; j < 8; j++) {
        if (stringName.charCodeAt(j) < 48 || stringName.charCodeAt(j) > 57) { //validating for digits
            countNonNumeric1++;
            break;
        }
    }
    

    for (var k = 10; k < 13; k++) {
        if (stringName.charCodeAt(k) < 48 || stringName.charCodeAt(k) > 57) { //validating for digits
            countNonNumeric2++;
            break;
        }
    }
  

    if (countNonNumeric || countNonNumeric1 || countNonNumeric2) {
        errMessages += "<p><mark>Phone Number</mark><br /> - Only numeric digits are allowed for Phone Number</p> ";
    }


    return errMessages;
}


function generateEmail() {
    var ID = document.getElementById("lid").value;
    document.getElementById("email").value = ID + "@myseneca.ca";
}


function showErrors(messages) {
    document.getElementById("errors").innerHTML = messages;
}

function clearShowErrors() {
    document.getElementById("errors").innerHTML = "";
    document.getElementById("fname").focus();
}