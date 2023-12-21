export default function getRandomDate() {
  const start = new Date(2023, 0, 1); // Начало 2023 года
  const end = new Date(); // Текущая дата
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
