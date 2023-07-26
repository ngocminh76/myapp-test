import { Button, Input } from "antd";
import { useState } from "react";
import './index.scss'
const UserForm = ({addUser}) => {
  const [username, setUsername] = useState("");
  const handelSubmit = () => {
    if (username.trim() === "") return;
    addUser(username);
    setUsername("");
  };

  return (
    <div className="user-form">
      <Input 
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></Input>
      <Button className="ant-btn" type="primary" onClick={handelSubmit} >
        AddUser
      </Button>
    </div>
  );
};

export default UserForm;
