const form = document.querySelector('.contact-form');
const firstName = document.querySelector('#firstName');
const email = document.querySelector('#email');
const comment = document.querySelector('#comment');
const list = document.querySelector('#list');
const submitBtn = document.querySelector('.contact-btn');

submitBtn.disabled = true;

form.addEventListener('input', function() {
  firstName.value !== '' && email.value !== '' && comment.value !== '' && list.value !== '' ?
  submitBtn.disabled = false : 
  submitBtn.disabled = true
});
