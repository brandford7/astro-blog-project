const dateFormat = (datetime) => {
  const dateTime = new Date(datetime);
  const date = dateTime.toLocaleDateString([], {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  dateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
  return date;
};

export { dateFormat as d };
