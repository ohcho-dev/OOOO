export default function CheckInput(text: string = "") {
  const regex = /^[가-힣\s/g]+$/;
  let status = "";

  if (!text) {
    status = "이름을 입력해주세요.";
    return status;
  }
  if (!regex.test(text)) {
    status = "한글만 입력 가능합니다.";
    return status;
  }
  if (text.length < 1 || text.length > 6) {
    status = "1글자 이상 6글자 이하로 입력해주세요.";
    return status;
  }
  return status;
}
