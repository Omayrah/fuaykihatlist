const task_list = document.getElementById("tasks")
const input_box = document.getElementById("input")

var list = JSON.parse(localStorage.getItem("list"))||[]



function addTask(){


    var task = input_box.value.trim();
    if (!task){
        window.alert("اكتب شيء أولا !")
    }
    else{

        var li = document.createElement('li')



        li.innerHTML = ` <label>  <button>🗑️</button> ${task} <input type="checkbox"> </label> `
        task_items = li.innerHTML
        list.push(task_items)
        console.log(list)
        localStorage.setItem("list",JSON.stringify(list))

        task_list.appendChild(li)

        input_box.value = ""


    }

}

function addTaskFromStorage(html_task){

    li=document.createElement('li')
    li.innerHTML = html_task
    task_list.appendChild(li)


}

task_list.addEventListener("click",function(mouse){

    if (mouse.target.tagName =="BUTTON"){
        
        var task_li = mouse.target.closest("li")
        var html = task_li.innerHTML

        mouse.target.parentElement.remove()
        list=list.filter(task=> task!==html)
        localStorage.setItem('list',JSON.stringify(list))


    }},false)
input_box.addEventListener('keydown',function(key){

    if (key.keyCode == 13){

        addTask()
    }
})

if(list){
    list.forEach(task=>addTaskFromStorage(task))
}
