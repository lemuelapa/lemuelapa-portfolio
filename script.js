const buttons = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('.project');
buttons.forEach(button => button.addEventListener('click', () => {
  buttons.forEach(item => {item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button));});
  let count = 0;
  projects.forEach(project => {project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter; if (!project.hidden) count++;});
  document.querySelector('#count').textContent = `${count} ${count === 1 ? 'project' : 'projects'}`;
}));
