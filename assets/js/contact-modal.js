// assets/js/contact-modal.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const successMsg = form.querySelector('.form-success');

  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // stop browser following Formspree redirect

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.reset();
        if (successMsg) successMsg.style.display = 'block';
        // or close modal here if you prefer
        // document.getElementById('contact-modal').classList.remove('is-visible');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Network error. Please try again later.');
    }
  });
});