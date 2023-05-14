import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./redux/action";
import { todoReducer } from "./redux/reducers";

function App() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const arr = useSelector((state) => state);

  // const add = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="App">
      <div className="lg:h-[80%] h-[95%] lg:w-[50%] w-[90%] rounded-[.5rem] lg:rounded-[.8rem] bg-[white] flex flex-col items-center">
        <p className="text-[1.2rem] p-[1rem] lg:p-0 lg:text-[2.8rem] font-[400] text-center mb-3 lg:mb-6">
          Todo List
        </p>
        <form
          action="
        "
          onSubmit={() => {
            dispatch(add());
          }}
          className="flex lg:flex-row flex-col items-center lg:w-[70%] w-[100%] justify-around mb-6 gap-4"
        >
          <input
            className="lg:w-[70%] w-[90%] border-solid border-1 p-2 border-black rounded-[.5rem] bg-[#ffcd87]"
            type="text"
            placeholder="Input activity here...."
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button className="w-[90%] p-2 lg:w-[20%] border-solid border-2 border-[#ffcd87]  rounded-[.5rem] bg-[white] text-[#ffcd87] hover:bg-[#ffcd87] hover:border-[#ffe6c4] hover:text-white">
            Add to list
          </button>
        </form>

        {arr.map((e, index) => {
          <div
            onClick={() => {
              dispatch(toggle);
            }}
            className="text-black w-[90%] lg:w-[50%] items-center font-[400] text-[1.2rem] flex gap-2 border-solid border-2 border-[#e6e6e6] rounded-[0.3rem] p-2 my-2"
          >
            <input type="checkbox" checked={e.isCompleted} />
            <span
              className={e.isCompleted === true ? "completed" : "incompleted"}
            >
              {e.todo}
            </span>
            <span onClick={() => dispatch(remove())}>X</span>
          </div>;
        })}
      </div>
    </div>
  );
}

export default App;
