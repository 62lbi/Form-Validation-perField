const form = document.getElementById('registrationForm');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  clearErrors();
  validateForm();
});

function showError(id, message) {
  document.getElementById(id).innerText = message;
}

function clearErrors() {
  const errors = document.querySelectorAll('.error');
  errors.forEach(error => error.innerText = '');
}

function validateForm() {
  let isValid = true;

  const fullName = document.getElementById('fullName').value.trim();
  const schoolName = document.getElementById('schoolName').value.trim();
  const address = document.getElementById('address').value.trim();
  const parentName = document.getElementById('parentName').value.trim();
  const phoneNumber = document.getElementById('phoneNumber').value.trim();
  const schedule = document.getElementById('schedule').value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const schoolLevel = document.querySelector('input[name="schoolLevel"]:checked');
  const programs = document.querySelectorAll('.program:checked');

  if (fullName === '') {
    showError('fullNameError', 'Full name is required.');
    isValid = false;
  }

  if (!gender) {
    showError('genderError', 'Please select a gender.');
    isValid = false;
  }

  if (!schoolLevel) {
    showError('schoolLevelError', 'Please select a school level.');
    isValid = false;
  }

  if (schoolName === '') {
    showError('schoolNameError', 'School name is required.');
    isValid = false;
  }

  if (address.length < 10) {
    showError('addressError', 'Address must be at least 10 characters.');
    isValid = false;
  }

  if (parentName === '') {
    showError('parentNameError', "Parent's name is required.");
    isValid = false;
  }

  if (phoneNumber === '') {
    showError('phoneNumberError', 'Phone number is required.');
    isValid = false;
  }

  if (schedule === '') {
    showError('scheduleError', 'Please select a tutoring schedule.');
    isValid = false;
  }

  if (programs.length === 0) {
    showError('programError', 'Please select at least one tutoring program.');
    isValid = false;
  }

  if (isValid) {
    alert('Registration completed');
  }
}