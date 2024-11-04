let array = [0,2,3];
let span = [document.querySelector("#post-1"),document.querySelector("#post-2"),document.querySelector("#post-3")];

function like(id){
    array[id]++;
    span[id].innerHTML = array[id] + " Likes ";
}