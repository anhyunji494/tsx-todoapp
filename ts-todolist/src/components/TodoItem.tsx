import '../index.css';

// 타입 선언
interface TodoItemProps {
  text: string;
  completed: boolean;
}

function TodoItem({ text, completed }: TodoItemProps) {
  return (
    <li className="todoContainer">
      {completed ? <button>완료됨</button> : <button>완료하기</button>}
      <p>{text}</p>
      <div className="buttonContainer">
        <button type="button">수정</button>
        <button type="button">삭제</button>
      </div>
    </li>
  );
}

export default TodoItem;