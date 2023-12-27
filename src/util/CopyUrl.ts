export const copyURL = (url: string) => {
  let t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = url;
  t.select();
  document.execCommand("copy");
  document.body.removeChild(t);
};
