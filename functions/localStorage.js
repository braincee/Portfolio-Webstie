const dataStorage = {
  name: '',
  email: '',
  message: '',
};

const formValue = document.getElementById('fs-frm');
const nameValue = document.getElementById('full-name');
const emailValue = document.getElementById('email-address');
const messageValue = document.getElementById('message');

formValue.addEventListener('input', () => {
  dataStorage.name = nameValue.value;
  dataStorage.email = emailValue.value;
  dataStorage.message = messageValue.value;
  localStorage.setItem('UserData', JSON.stringify(dataStorage));
});

if (localStorage.getItem('UserData') === null) {
  localStorage.setItem('UserData', JSON.stringify(dataStorage));
} else {
  const data = JSON.parse(localStorage.getItem('UserData'));
  nameValue.value = data.name;
  emailValue.value = data.email;
  messageValue.value = data.message;
}