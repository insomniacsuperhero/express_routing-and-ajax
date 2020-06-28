$(function(){
    let newtodobox = $('#newtodo')
    let addtodoBtn = $('#addtodo')
    let todolist = $('#todolist')

    addtodoBtn.click(function(){
        let newTodo = newtodobox.val()

        $.post(
            '/todos/',
            {task: newTodo},
            function(data){
                todolist.empty();
                for(todo of data){
                    todolist.append("<li>" + todo.task + "</li>")
                }
            }
        )
    })
})