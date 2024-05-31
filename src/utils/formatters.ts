export function formatDateString(date: Date) {
  return date.toLocaleDateString(undefined, {
    dateStyle: 'long',
    timeZone: 'UTC',
  });
}
