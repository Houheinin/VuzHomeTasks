# ATLAS UI Kit — выполненная практическая работа №5

## Что сделано

- тёмная тема через `prefers-color-scheme`;
- ручные режимы `light` / `dark`;
- сохранение темы в `localStorage` под `atlas-theme`;
- primary / secondary / ghost кнопки;
- hover / active / focus-visible / disabled;
- поля и select;
- placeholder / focus / disabled / invalid;
- info / success / error / warning;
- переключатель плотности;
- компактный режим через компонентные токены;
- сохранение плотности под `atlas-density`;
- адаптация на узких экранах.


## Архитектура токенов

Примеры цепочек:

1. `--base-blue-700` → `--color-primary` → `--button-bg-primary`
2. `--base-white` → `--color-on-primary` → `--button-text-primary`
3. `--color-border-control` → `.input` / `.select`
4. `--color-warning` + `--color-warning-bg` → `.alert--warning`

## Проверки

| Проверка |результат |
| Auto | тема определяется системной настройкой |
| Light | вручную включается светлая тема |
| Dark | вручную включается тёмная тема |
| Обновление страницы | выбранная тема сохраняется |
| Обычная плотность | используются обычные размеры |
| Компактная плотность | уменьшаются высоты и отступы |
| Обновление страницы | плотность сохраняется |
| Primary hover/active | состояние визуально меняется |
| Secondary / Ghost | отображаются отдельные варианты |
| Disabled | кнопка недоступна |
| Invalid input | есть граница ошибки и текст |
| Warning | есть заголовок, описание и символ |
| 320 px | страница должна оставаться без горизонтального переполнения |

## Файлы

- `index.html`
- `css/tokens.css`
- `css/components.css`
- `js/theme.js`
- `README.md`



