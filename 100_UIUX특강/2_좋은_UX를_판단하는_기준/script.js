const loginBtn = document.getElementById("loginBtn");
const errorBox = document.getElementById("errorBox");
const successBox = document.getElementById("successBox");
const findPw = document.getElementById("helperLink");

// 입력값
const userId = document.getElementById("userId");
const userPw = document.getElementById("userPw");

const validId = "admin";
const validPw = "1234";

// 메시지 초기화 함수
// 로그인 시도 전에 기존 메시지를 모두 숨기고 초기화
function resetMessages() {
  // 메시지 영역 숨기기
  errorBox.classList.add("hidden");
  successBox.classList.add("hidden");
  helperLink.classList.add("hidden");

  // 메시지 내용 초기화
  errorBox.textContent = "";
  successBox.textContent = "";
}

loginBtn.addEventListener("click", () => {
  checkAuthentication();
});

userPw.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    checkAuthentication();
  }
})

userId.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    checkAuthentication();
  }
})

function checkAuthentication() {
  if (userPw.value == "" || userId.value == "") {
      errorBox.innerHTML = "<strong>ID와 패스워드를<br/>모두 입력해주세요.</strong>";
      successBox.classList.add('hidden');
      errorBox.classList.remove("hidden");
      return;
    }
  else if (userPw.value == validPw && userId.value == validId) {
    successBox.innerHTML = "<strong>로그인에 성공하였습니다!</strong>";
    successBox.classList.remove('hidden');
    errorBox.classList.add('hidden');
    findPw.classList.add('hidden');
  } else if (userId.value != validId) {
    errorBox.innerHTML = "<strong>존재하지 않는 ID입니다.<br/>다시 입력해주세요.</strong>";
    successBox.classList.add('hidden');
    errorBox.classList.remove("hidden");
  } else {
    errorBox.innerHTML = "<strong>비밀번호가 올바르지 않습니다.<br/>다시 입력해주세요.</strong>";
    successBox.classList.add('hidden');
    findPw.classList.remove("hidden");
    errorBox.classList.remove("hidden");
  }
  
}