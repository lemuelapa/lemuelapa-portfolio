const buttons = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('.project');
buttons.forEach(button => button.addEventListener('click', () => {
  buttons.forEach(item => {item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button));});
  let count = 0;
  projects.forEach(project => {project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter; if (!project.hidden) count++;});
  document.querySelector('#count').textContent = `${count} ${count === 1 ? 'project' : 'projects'}`;
}));

const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const fields = new FormData(contactForm);
  const name = fields.get('name').trim();
  const email = fields.get('email').trim();
  const message = fields.get('message').trim();
  if (!name || !message) {
    document.querySelector('#contact-status').textContent = 'Please enter your name and a message about your project.';
    return;
  }
  const subject = `Portfolio inquiry from ${name}`;
  const body = `Hi Lemuel,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`;
  window.location.href = `mailto:${contactForm.dataset.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.querySelector('#contact-status').textContent = 'Your email draft is ready to open. Send it from your email app. If no app opens, use the email address alongside this form.';
});
