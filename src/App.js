import { useState } from 'react';
import './App.css';
// import TodoApp from './components/TodoApp';
// import "./components/TodoApp/index.scss"
import UserForm from './components/PracticeApp1/userForm';
import UserList from './components/PracticeApp1/userList';
function App() {
  const[users, setUsers] = useState([]);
  const addUser = (username)=>{
    setUsers([...users,username]);
  }
  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };
  return (
    <div className="App">
     <h1>User List App alllllllllllllllllllll</h1>
     <UserForm addUser={addUser}/>
     <UserList users={users} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
