import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { add, toggle, remove, deleteAll } from "./redux/action";

function App() {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");
  const [empty, setEmpty] = useState("");

  const arr = useSelector((state) => state);

  const completedTodo = arr.filter((todo) => todo.isCompleted === true);

  let date = new Date();
  let time = date.getTime();
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todo.trim().length !== 0) {
      setEmpty("");
      const todoObject = {
        id: time,
        title: todo,
        isCompleted: false,
      };
      setTodo("");
      dispatch(add(todoObject));
    } else {
      setEmpty("Please enter an activity");
    }
  };

  return (
    <div className="App">
      <div className="lg:min-h-[30rem] min-h-[25rem] lg:pt-[2rem] lg:pb-[3rem] pt-[1rem] pb-[1.5rem]  lg:w-[50%] w-[90%] rounded-[.5rem] lg:rounded-[.8rem] bg-[white] flex flex-col items-center">
        <p className="text-[1.2rem] p-[1rem] lg:p-0 lg:text-[2.8rem] font-[400] text-center mb-3 lg:mb-6">
          Todo List
        </p>
        <form
          action="
        "
          onSubmit={handleAddTodo}
          //in redux the eventlisteners are passed with anonymous function
          className="flex lg:flex-row flex-col items-center lg:w-[70%] w-[100%] justify-around gap-4"
        >
          <input
            className="lg:w-[70%] w-[90%] p-2 border-solid border-2 border-[#2c1f1f] rounded-[.5rem] bg-white"
            type="text"
            placeholder="Input activity here...."
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button
            // onClick={handleAddTodo}
            className="w-[90%] p-2 lg:w-[20%] border-solid border-2 border-[#2c1f1f]  rounded-[.5rem] bg-[white] text-[#2c1f1f] hover:bg-[#2c1f1f] hover:border-[#ffe6c4] hover:text-white"
          >
            Add to list
          </button>
        </form>
        <p className="text-red-500 mt-1 w-[65%] mb-6">{empty}</p>

        {arr.map((e, index) => (
          <div
            key={e.id}
            onClick={() => {
              dispatch(toggle(e.id));
            }}
            className={`text-black w-[90%] lg:w-[50%] items-center justify-between  font-[400] text-[1.2rem] flex gap-2 border-solid border-2 border-[#e6e6e6] rounded-[0.3rem] px-4 p-2 my-2 ${
              e.isCompleted === true
                ? "border-l-solid border-l-4 border-l-green-500"
                : "border-l-solid border-l-4 border-l-red-500"
            }`}
          >
            <input type="checkbox" checked={e.isCompleted} />

            <span
              className={
                e.isCompleted === true
                  ? "completed w-[20rem]"
                  : "incompleted w-[20rem]"
              }
            >
              {e.title}
            </span>
            <span onClick={() => dispatch(remove(e.id))}>
              <img className="h-5 w-5" src="/image/close.svg" alt="" />
            </span>
          </div>
        ))}
        {arr.length > 0 && (
          <button onClick={() => dispatch(deleteAll())} className="delete_all">
            DELETE ALL
          </button>
        )}
        <h2 className="w-[80%] mt-4 font-[500]">
          Items Completed: {completedTodo.length}
        </h2>
      </div>
    </div>
  );
}

export default App;
