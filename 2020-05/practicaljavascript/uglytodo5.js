let todoList ={
    todo: [],

displayTodos: function (){
console.log("My Todo's : ")


if  (this.todo.lengh === 0){
    console.log("My Todo's : ")
    for(i = 0; i < this.todo.length; i++){
        console.log(this.todo[i].todoText);

        if (this.todo[i].completed ===true){
            console.log('(x)',this.todo[i].todoText);
        }else{
            console.log( '( )' , this.todo[i].todoText);
    }
}
}
},

addTodos: function (todoText){
this.todo.push({
    todoText: todoText,
    completed: false
});
this.displayTodos();

},

changeTodo: function (position, todoText){
//this.todo[position] = newValue;
this.todo[position].todoText = todoText;
this.displayTodos();
},

deleteTodo: function (position){
this.todo.splice(position,1);
this.displayTodos();
},

toggleComplete: function (position){
   let todo= this.todo[position]
   todo.completed = !todo.completed;
   this.displayTodos();
}

};
todoList.addTodos('this is an objoect');
todoList.displayTodos();