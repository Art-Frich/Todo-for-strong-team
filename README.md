# My ToDo

Тестовый проект для Stront-Team.

### Возможности

- добавлять дела
- удалять дела
- редактировать дела
- помечать дела как выполненные
- выполнять по ним поиск
- сортировка по имени, дате, важности
- drag and drop

### Инструменты:

![image](https://img.shields.io/badge/React-100000?style=for-the-badge&logo=react)
![image](https://img.shields.io/badge/Redux_Toolkit-100000?style=for-the-badge&logo=redux)
![image](https://img.shields.io/badge/Type_Script-100000?style=for-the-badge&logo=typescript)
![image](https://img.shields.io/badge/Vite-100000?style=for-the-badge&logo=vite)
![image](https://img.shields.io/badge/Sass-100000?style=for-the-badge&logo=sass)
![image](https://img.shields.io/badge/Eslint-100000?style=for-the-badge&logo=eslint)
![image](https://img.shields.io/badge/Prettier-100000?style=for-the-badge&logo=prettier)
![image](https://img.shields.io/badge/Husky-100000?style=for-the-badge&logo=husky)

### Чтобы развернуть локально:

```
git clone git@github.com:Art-Frich/Todo-for-strong-team.git
cd ./frontend
npm i
npm run dev
Пройти по ссылке из терминала или используйте http://localhost:5173/
```

### Руководство разработчика

| Скрипт       | Описание                                                                                                     |
| ------------ | ------------------------------------------------------------------------------------------------------------ |
| `dev`        | Запускает приложение в режиме разработки с использованием Vite.                                              |
| `build`      | Собирает приложение для продакшена с использованием TypeScript и Vite.                                       |
| `preview`    | Предварительный просмотр собранной продакшн версии локально.                                                 |
| `format`     | Проверяет форматирование кода с использованием Prettier.                                                     |
| `format-fix` | Исправляет проблемы с форматированием кода с использованием Prettier.                                        |
| `lint`       | Линтит файлы TypeScript и TypeScript React с использованием ESLint.                                          |
| `lint-fix`   | Исправляет проблемы, выявленные линтингом, с использованием ESLint.                                          |
| `commit`     | Выполняет предкоммит-проверки, добавляет изменения и использует commitizen для стандартизированных коммитов. |
