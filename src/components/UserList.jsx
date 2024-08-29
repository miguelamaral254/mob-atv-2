// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

// eslint-disable-next-line react/prop-types
const UserList = ({ onEdit }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null); 

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users'); 
      setUsers(response.data); 
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      setError('Erro ao buscar usuários. Verifique o console para mais detalhes.');
    }
  };

  useEffect(() => {
    fetchUsers(); 
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/users/${id}`); 
      fetchUsers(); 
    } catch (error) {
      console.error('Erro ao deletar o usuário:', error);
      setError('Erro ao deletar o usuário. Verifique o console para mais detalhes.'); 
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Lista de Usuários</h2>
      {error && <div className="alert alert-danger">{error}</div>} 
      <ul className="list-group">
        {users.map(user => (
          <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
            {user.firstName} {user.lastName} - {user.email}
            <div>
              <button className="btn btn-primary btn-sm me-2" onClick={() => onEdit(user)}>Editar</button>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>Deletar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
