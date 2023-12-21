import formatDate from './utils/formatDate';
import getRandomDate from './utils/getRandomDate';

// Внеси изменения в объекты exampleTodo
export const exampleTodo = [
  { isEnd: true, text: 'Выпить кофе', date: formatDate(getRandomDate()), priority: 3 as const },
  { isEnd: false, text: 'Бросить пить кофе', date: formatDate(getRandomDate()), priority: 3 as const },
  { isEnd: true, text: 'Погладить кота', date: formatDate(getRandomDate()), priority: 3 as const },
  { isEnd: false, text: 'Завести кота', date: formatDate(getRandomDate()), priority: 1 as const },
  { isEnd: false, text: 'Найти смысл', date: formatDate(getRandomDate()), priority: 5 as const },
];
