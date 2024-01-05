export default function CheckInput(text: string = "") {
  const regex = /^[가-힣a-zA-Z\s/g]+$/;
  let status = "";

  if (!text) {
    status = "이름을 입력해주세요.";
    return status;
  }
  if (!regex.test(text)) {
    status = "한글과 영어만 입력 가능합니다.";
    return status;
  }
  if (text.length < 2 || text.length > 10) {
    status = "2글자 이상 10글자 이하로 입력해주세요.";
    return status;
  }
  return status;
}
