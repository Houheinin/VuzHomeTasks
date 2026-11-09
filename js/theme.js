/* ОСНОВНАЯ РАБОТА: реализуйте переключение темы без библиотеки.
 * "auto" означает отсутствие атрибута data-theme у <html>.
 * В таком случае тёмную тему применяет CSS media query.
 * Настройку нужно сохранять в localStorage (ключ "atlas-theme").
 */
const root = document.documentElement;
const themeSelect = document.querySelector('#theme-select');
const densitySelect = document.querySelector('#density-select');
const demoAction = document.querySelector('#demo-action');
const demoFeedback = document.querySelector('#demo-feedback');

// применение выбранной цветовой темы
function applyTheme(choice) {
  if (choice === 'auto') {
    root.removeAttribute('data-theme');
  } else {
    root.dataset.theme = choice;
  }

  themeSelect.value = choice;
}

// загрузка и сохранение темы
let savedTheme = 'auto';

try {
  const storedTheme = localStorage.getItem('atlas-theme');
  if (storedTheme === 'light' || storedTheme === 'dark' || storedTheme === 'auto') {
    savedTheme = storedTheme;
  }
} catch (error) {
  savedTheme = 'auto';
}

applyTheme(savedTheme);

// смена темы без перезагрузки
themeSelect.addEventListener('change', () => {
  const choice = themeSelect.value;
  applyTheme(choice);

  try {
    localStorage.setItem('atlas-theme', choice);
  } catch (error) {

  }
});


demoAction.addEventListener('click', () => {
  demoFeedback.textContent = 'Демонстрация: действие выполнено, новая заявка создана.';
});

// переключение плотности
function applyDensity(choice) {
  if (choice === 'compact') {
    root.dataset.density = 'compact';
  } else {
    root.removeAttribute('data-density');
    choice = 'normal';
  }

  densitySelect.value = choice;
}

let savedDensity = 'normal';

try {
  const storedDensity = localStorage.getItem('atlas-density');
  if (storedDensity === 'compact' || storedDensity === 'normal') {
    savedDensity = storedDensity;
  }
} catch (error) {
  savedDensity = 'normal';
}

applyDensity(savedDensity);

densitySelect.addEventListener('change', () => {
  const choice = densitySelect.value;
  applyDensity(choice);

  try {
    localStorage.setItem('atlas-density', choice);
  } catch (error) {
  }
});
