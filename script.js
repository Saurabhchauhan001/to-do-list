const inputBox=document.getElementById('input-box');
const listContainer = document.getElementById('list-container'); 
function AddTask(){
    if(inputBox.value ===''){
        alert('you must write somthing');

    }
    else{
        let li = document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML='x';
        li.appendChild(span)
    }
    inputBox.value='';
    saveData();

}
listContainer.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('cheked');
        saveData();

    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}
function showList(){
    listContainer.innerHTML=localStorage.getItem('data');
}
showList();
