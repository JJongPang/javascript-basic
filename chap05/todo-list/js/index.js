const title = document.getElementById('title');
const list= document.getElementById('list');
const li = list.getElementsByTagName('li');
const addBtn = document.getElementById('add-btn');

list.addEventListener("click", activeItem);

function activeItem(event) {
    if(event.target.nodeName == 'LI') {
        title.innerHTML = event.target.innerText;

        for(let i = 0; i < event.target.parentNode.children.length; i++) {
            event.target.parentNode.children[i].removeAttribute('class');
        }
        event.target.setAttribute("class", "active");
    }
}

//목록 추가
addBtn.addEventListener("click", () => {
    let text = prompt('제목을 입력하세요');
    list.innerHTML += '<li>' + text + '</li>';
});