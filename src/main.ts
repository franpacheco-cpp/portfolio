import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));

document.body.onmousemove = function (e) {
  document.documentElement.style.setProperty('--x', e.clientX + window.scrollX + 'px');
  document.documentElement.style.setProperty('--y', e.clientY + window.scrollY + 'px');
};

window.addEventListener('mousedown', () => {
  document.getElementById('invertedcursor')?.classList.add('click-animado');
});

window.addEventListener('mouseup', () => {
  document.getElementById('invertedcursor')?.classList.remove('click-animado');
});
