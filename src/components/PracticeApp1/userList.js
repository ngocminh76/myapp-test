import { Button, List } from "antd";
import "./index.scss";
import React from "react";
const UserList = ({ users, deleteUser }) => {
  return (
    <List className="user-list"
      bordered
      dataSource={users}
      renderItem={(username, index) => (
        <List.Item
          actions={[
            <Button type="link" danger onClick={() => deleteUser(index)}>
              Delete
            </Button>,
          ]}
        >
          {username}
        </List.Item>
      )}
    ></List>
  );
};
export default UserList;
