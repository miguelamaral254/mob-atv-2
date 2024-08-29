// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEditUser = (user) => {
    setSelectedUser(user);
  };

  const handleSuccess = () => {
    setSelectedUser(null); 
  };

  return (
    <div className="container mt-5">
      <h1>Gerenciamento de Usuários</h1>
      <UserForm selectedUser={selectedUser} onSuccess={handleSuccess} />
      <UserList onEdit={handleEditUser} />
    </div>
  );
}

export default App;
