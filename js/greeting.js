const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
// 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용
const USERNAME_KEY = "username";
// string을 반복적으로 사용하게 될 경우 대문자 변ㅅ로 저장

function onLoginSubmit(event) {
    event.preventDefault();
    // 1. event가 원래 하던 동작(새로고침)을 멈춤
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // 2. form을 다시 숨겨줌
    const username = loginInput.value;
    // 3. loginInput.value를 username이라는 변수(상수)로 저장
    localStorage.setItem(USERNAME_KEY, username);
    // 4. username 값을 USERNAME_KEY와 함께 localStorage에 저장
    paintGreetings(username);
    // 5. paintGreetings이라는 함수를 호출 - username이라는 인자를 받고 있다
    // 3의 username : loginInput의 value(값)을 받고있음
}

function paintGreetings(username){
    greeting.innerText = `안녕하세요, ${username}님!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
// 이 함수가 하는 일은 1.비어있는 <h1> 안에 hello username이라는 text를 추가해줌(innerText)
// 2. h1요소로부터 "hidden"(==HIDDEN_CLASSNAME)이라는 class를 제거해줌

// localStorage.removeItem("username");

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername);
}