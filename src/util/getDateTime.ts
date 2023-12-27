type getDateFuncType = (date: string) => string;

function pad(n: number) {
  return n < 10 ? "0" + n : n;
}

export const getDate: getDateFuncType = (date) => {
  const d = new Date(date.replace(/-/g, "/"));
  return `${d.getFullYear()}년 ${pad(d.getMonth() + 1)}월 ${pad(
    d.getDate()
  )}일`;
};
