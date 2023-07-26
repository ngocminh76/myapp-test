import { Col, Input, Row, Button, List } from "antd";
import { RightCircleOutlined,DeleteOutlined  } from "@ant-design/icons";

import { useState } from "react";
const TodoApp = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const handelAddTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]); // dùng cú pháp spread(`...`) để sao chép danh sách hiện tại, và thêm task mới vào cuối danh sách
    setTask("");
  };
  const handelDelete =(index)=>{
    const updatedTask = tasks.filter((_,i)=>i!==index)
    setTasks(updatedTask)
  }

  return (
    <div className="todo-container">
      <Row justify="center">
        <Col span={12}>
          <h1>Todo App</h1>
          <Input
            className="todo-input"
            placeholder="Enter your task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button
            onClick={handelAddTask}
            className="add-task-button"
            type="primary"
            icon={<RightCircleOutlined />}
          >
            Add your task
          </Button>
          <List
            bordered
            dataSource={tasks}
            renderItem={(item,index) => (
              <List.Item actions={[<Button
              icon={<DeleteOutlined />}
              type="link"
              danger
              onClick={()=>{handelDelete(index)}}
              >Deltete</Button>]}>{item}</List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  );
};

export default TodoApp;
