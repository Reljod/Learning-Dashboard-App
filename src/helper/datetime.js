

export function getNow() {
  const now = new Date(Date.now());
  return now.toString();
}

export function formatDate(dateString) {
  let date = '-';

  try {
    let _date = new Date(dateString);
    date = _date.toDateString() + ' ' + _date.toLocaleTimeString();

  } catch (error) {
    date = '-'
  }
  
  return date;
}