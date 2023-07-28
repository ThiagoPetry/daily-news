const formatDate = (str) => {
  if (!str) {
    return "";
  }

  const date = new Date(str);

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const hours = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  const newDate = `${day < 10 ? `0${day}` : day}/${month < 10 ? `0${month}` : month}/${year} - ${hours < 10 ? `0${hours}` : hours}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
  return newDate;
};

export { formatDate };
