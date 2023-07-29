const formatTitle = (title, size) => {
  if (!title) {
    return "";
  }

  let text = title?.toString()?.slice(0, size);

  if (title?.length > size) {
    text = text + "...";
  }

  return text;
};

export { formatTitle };
