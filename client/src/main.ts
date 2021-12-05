
import "./style.css";

class App {
  constructor(){

  }

  init(){
    this.render()
  }

  render(){
    const addTodo = () => {
      const submitBtn = <HTMLElement>(document.querySelector("#btn"))!
      // use IF statement to check is null
      if(submitBtn){
        submitBtn.addEventListener("click", (e: any) => {
          e.preventDefault();
          console.log("clicked");
          const ul = <HTMLElement>document.querySelector("#todoList");
          const newTodos = (<HTMLInputElement>document.querySelector("#todo")).value;
          console.log(newTodos)
          const todos = document.createElement("li");
          todos.innerText = newTodos;
          //appended to add on additional todos on the ul
          ul.appendChild(todos);
        });
      }
     
    }

    addTodo()
  }

}


let app = new App()

app.init()

console.log('frontenefefd')


