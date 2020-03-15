var student = {                 // object name
    firstName:"Bobby",           // list of properties and values
    lastName:"Alestra",
        age : 21 ,
        height:170,
        fullName : function() {     // object function
           return this.firstName + " " + this.lastName;
        }
    }; 
    student.age = 19;           // setting value

    name = student.fullName();  // call object function

    console.log(student); 