export function convertDateFormat(dateString: string): string {
  const date = new Date(dateString);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthName = months[date.getMonth()];

  const day = date.getDate();

  const year = date.getFullYear();

  const result = `${monthName} ${day}, ${year}`;

  return result;
}
