export default function formatDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
  };

  return new Intl.DateTimeFormat('ru-RU', options).format(date);
}
