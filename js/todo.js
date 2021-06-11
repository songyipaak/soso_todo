const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
// id가 todo-form인 form 안에서 input을 찾는 것
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // JSON.stringify(value)는 value를 string으로 저장시켜주는 JSON 기능
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    // 클릭했던 li의 id를 갖고 있는 toDo를 지우기
    // li.id는 string type이고 todo.id는 number 타입이기에 int형으로 형변환
    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");

    span.innerText = newToDo.text;

    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    // toDoInput.value를 newToDo에 복사하는 것, 그 이후엔 newToDo 변수와 상관x
    toDoInput.value = "";

    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    // id로 각각의 li item을 구별하기 위해
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);

    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

// forEach는 function을 실행하게 해주는데
// 그 array에 있는 각각의 item에 대해 실행해줌
// => 화살표함수