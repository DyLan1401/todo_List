// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {
  // State để lưu danh sách công việc (todo list)
  let [todolist, setTodolist] = useState([]);

  // Hàm để lưu một công việc mới vào danh sách
  let saveToDoList = (event) => {
    let toname = event.target.toname.value;

    if (!todolist.includes(toname)) {
      let finalDolist = [...todolist, toname];
      setTodolist(finalDolist);
    } else {
      alert("Công việc đã tồn tại...");
    }

    event.preventDefault();
  };

  let lisst = todolist.map((value, index) => {
    return (
      <ToDoListItems
        value={value}
        key={index}
        indexNumber={index}
        todolist={todolist}
        setTodolist={setTodolist}
      />
    );
  });

  // Giao diện chính
  return (
    <div className="App">
      <h1>Danh sách công việc</h1> {/* Tiêu đề */}
      <form onSubmit={saveToDoList}>
        {" "}
        {/* Form để thêm công việc mới */}
        <input type="text" name="toname" style={{ padding: "8px" }} />{" "}
        {/* Ô nhập tên công việc */}
        <button>Lưu</button> {/* Nút để gửi form */}
      </form>
      <div className="outerDiv">
        {<ul style={{ listStyle: "none" }}>{lisst}</ul>}
      </div>
    </div>
  );
}

// Thành phần hiển thị một công việc cụ thể
export default App;

function ToDoListItems({ value, indexNumber, todolist, setTodolist }) {
  // State để theo dõi trạng thái hoàn thành của công việc
  let [status, setStatus] = useState(false);

  let deleteRow = () => {
    let finalData = todolist.filter((v, i) => i !== indexNumber);
    setTodolist(finalData); // Cập nhật danh sách công việc
  };

  let checkStatus = () => {
    setStatus(!status); // Chuyển đổi trạng thái
  };

  return (
    <li
      style={{ fontSize: "30px" }}
      className={status ? "completeTodo" : ""}
      onClick={checkStatus}
    >
      {indexNumber + 1}.
      <span style={{ marginLeft: "60px", marginRight: "60px" }}>{value}</span>
      <span style={{ cursor: "pointer", fontSize: "30px" }} onClick={deleteRow}>
        &times;
      </span>
    </li>
  );
}
