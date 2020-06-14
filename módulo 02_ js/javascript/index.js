


const form = document.getElementById('register');

const errTxt = document.querySelector('#erroMessage1');
const errMail = document.querySelector('#erroMessage2');
const errPass = document.querySelector('#erroMessage3');
const errGender= document.querySelector('#erroMessage4')
const errDate = document.querySelector('#erroMessage5');

const personName = document.getElementById('txtName');
const email = document.getElementById('txtEmail');
const data = document.getElementById('dateTime');
const pass1 = document.getElementById('txtPassword');
const pass2 = document.getElementById('cnfPassword');
const gender = document.getElementById('gender');


form.addEventListener('submit', (e) => {

   

  if (!checkName()) e.preventDefault();
  if (!checkMail()) e.preventDefault();
  if (!checkPass()) e.preventDefault();
  if (!checkGender()) e.preventDefault();
  if (!checkDate()) e.preventDefault();
 
})
 
let global = [];


function checkName() {
  if (personName.value.length < 3 || personName.value.length > 50) {
    errTxt.innerHTML = "Informe um nome válido. Min. 3 e Max. 50 caracteres";
    personName.className = personName.className + "nameError";  // this adds the error class
    return false;
  } else {
    return global.push(`nome: ${personName.value}`)


  }


}

function checkMail() {
  if ((email.value.length < 5 || email.value.length >100) || email.value.indexOf('.') <= 0 || email.value.indexOf('@') <= 0) {
    errMail.innerHTML = `Informe um email válido. Min.5 e Max.100 caracteres`;
    email.className = email.className + "emailError"; 
    return false;

  } else {
    return global.push(`email: ${email.value}`)
  }

}



function checkPass() {
  if ((pass1.value.length < 7 || pass1.value.length > 100) || pass1.value != pass2.value) {
    pass1.className = pass1.className + 'errPass';
    pass2.className = pass2.className + 'errPass';
    errPass.innerHTML = `Informe uma senha válida. Min. 7 e max. 100 caracteres`;
    return false;
  } else {
    return global.push(`Senha: ${pass1.value}`)
  }
}



function checkGender()  {
  if (gender.selectedIndex == '') {
    gender.className = gender.className + 'errGender';
    errGender.innerHTML =`Selecione o sexo` ;
   return false
    
} else {
  let selectedGender = gender.options[gender.selectedIndex].text;
   return global.push(`Sexo : ${selectedGender}`)
   
}

 
}


function checkDate() {
  const dayfield = data.value.split("/")[0]
  const monthfield = data.value.split("/")[1]
  const yearfield = data.value.split("/")[2]

  let validformat = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!validformat.test(data.value)) {
    errDate.innerHTML = `Informe uma data no formato válido`;
    data.className = data.className + 'errDate';
    return false;
  }  // avalia formatos de data  
  else if (monthfield > 12 || monthfield < 01) {
    errDate.innerHTML = `Informe um mês válido`;
    data.className = data.className + 'errDate';
    return false;
  }
  else if (yearfield < 1940 || yearfield > 2020) {
    errDate.innerHTML = `Informe um ano válido`;
    data.className = data.className + 'errDate';
    return false;
  }
  else if (dayfield < 01 || dayfield > 31) {
    errDate.innerHTML = `Informe um dia válido`;
    data.className = data.className + 'errDate';
    return false;
  }
  else {
    return global.push(`data:${data.value}`)
  }

}





