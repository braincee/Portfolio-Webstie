const form = document.getElementById('fs-frm');
form.addEventListener('submit', (e) => {
  const fullName = form.elements['full-name'];
  const email = form.elements['email-address'];
  const fullNameError = fullName.nextElementSibling;
  const emailError = email.nextElementSibling;
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const numRegex = /['1''2''0''3''4''5''6''7''8''9'\W]+/;
  const fullNameTest = fullName.value.split(' ');

  form.elements[3].className = 'valid';
  if (fullNameTest.length === 1) {
    fullNameError.textContent = '*Enter your full name separated with space';
    fullName.className = 'invalid';
  } else {
    for (let i = 0; i < fullNameTest.length; i += 1) {
      if (numRegex.test(fullNameTest[i])) {
        fullNameError.textContent = '*Name field should have alphabets and space';
        fullName.className = 'invalid';
        break;
      } else {
        fullNameError.textContent = '';
        fullName.className = 'valid';
      }
    }
  }

  if (!emailRegex.test(email.value)) {
    emailError.textContent = '*Email address format is incorrect ';
  } else if (email.value !== email.value.toLowerCase()) {
    emailError.textContent = '*Email address should be in lowercase';
    email.className = 'invalid';
  } else {
    emailError.textContent = '';
    email.className = 'valid';
  }

  if (fullNameError.textContent || emailError.textContent) {
    e.preventDefault();
    if (fullNameError.textContent && emailError.textContent) {
      fullNameError.style.display = 'block';
      emailError.style.display = 'block';
    } else if (emailError.textContent) {
      emailError.style.display = 'block';
    } else {
      fullNameError.style.display = 'block';
    }
  } else {
    e.submit();
  }
});
