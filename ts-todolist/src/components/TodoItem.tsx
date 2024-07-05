import { IoIosCheckbox, IoIosCheckboxOutline } from 'react-icons/io';
import '../index.css';

// 타입 선언
interface TodoItemProps {
  text: string;
  completed: boolean;
}

function TodoItem({ text, completed }: TodoItemProps) {
  return (
    <li className="text-white w-full my-2 p-7 flex items-center">
      {completed ? <IoIosCheckbox size="20" /> : <IoIosCheckboxOutline size="25" className='mr-10' />}
      <div >
      <p className='mr-64'>{text}</p>
</div>
      <div className="buttonContainer">
        <button type="button">수정</button>
        <button type="button">삭제</button>
      </div>
    </li>
  );
}

export default TodoItem;
