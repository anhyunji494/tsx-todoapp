import { useState } from "react";
import TodoItem from "./TodoItem";
import CreateTodo from "./CreateTodo";
import '../index.css'
// type 지정
interface TList {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoList(){
    // input useState
    const [inputText, setInputText] = useState("");
  // todoList useState
  const [todoList, setTodoList] = useState<TList[]>([{
    id: 1, 
    text: "할 일 1", 
    completed: false, 
  }, {
    id: 2, 
    text: "할 일 2", 
    completed: false
    },
  ])
    
    // 입력값 변경내용 확인 
    const textTypingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('textTypingHandler')
        setInputText(e.target.value)
    }

    // 입력 확인
    const textInputHandler = (event:React.FormEvent<HTMLFormElement>):void=>{
        event.preventDefault(); 
        const newTodo: TList = {
            id: Date.now(),
            text: inputText,
            completed: false
        }; 
        setTodoList(todoList.concat(newTodo))
        // 입력한 값 지우기 
        setInputText("");
    }
  
    return (
    <>
        <div className="bg-rose-400 items-center h-fit p-50 ">
          <div className="bg-white w-full m-20">
        {
          // map을 통해 list 내부 아이템 꺼내기
          todoList.map((item) => (
              <TodoItem key={item.id } text={item.text} completed={item.completed} />
          ))
        }</div>
                <CreateTodo onChange={
                    textTypingHandler
        } onSubmit={textInputHandler} inputText={inputText} />
      </div>
    </>
  );
}

