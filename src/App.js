import React, { useState } from 'react'; 
import Table from './Table'; 
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm'; 

const App = () => {
  const initialTable = [
    { id: 1, name: 'Aimeric', job: 'dev'},
    { id: 2, name: 'Patricia', job: 'economiste'}, 
    { id: 3, name: 'Jojo', job: 'prof'}
  ]
  const [users, setUsers] = useState(initialTable); 

    const addUser = (user) => {
      user.id = users.length + 1;
      setUsers( [...users, user] ); 
    }

    const handleDelete = (id) => {
      setUsers( users.filter((user) => user.id !== id )); 
    }
   
    const [editing, setEditing] = useState(false); 
    const initialEdit = { id: null, name: '', job: '' }; 
    const [currentUser, setCurrentUser] = useState(initialEdit); 

    const editRow = (user) => {
      setEditing(true); 
      setCurrentUser( {id: user.id, name: user.name, job: user.job} ); 
    }
    const updateUser = (id, updateUser) => {
      setEditing(false); 
      setUsers( users.map((user) => user.id === id ? updateUser : user ) );
    }
  return (
    <div>
        <h1>CRUD MILAY</h1>
        <div>
            {editing ? (
              <div>
                <h2>edit user</h2>
                <EditUserForm
                updateUser={updateUser}
                setEditing={setEditing}
                currentUser={currentUser} />
              </div>
            ) : (
              <div>
                <h2>add user</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )}
            
        </div>
        <div>
            <h2>Table</h2>
            <Table 
              users={users} 
              handleDelete={handleDelete} 
              editRow={editRow} />
        </div>
    </div>
  )
}
export default App; 