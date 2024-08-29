import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Use a instância do axios configurada

const UserList = ({ onEdit }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null); // Adicione um estado para armazenar erros

  // Função para buscar usuários
  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users'); // Use o prefixo /api que será redirecionado pelo proxy configurado
      setUsers(response.data); // Atualiza o estado com a lista de usuários
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      setError('Erro ao buscar usuários. Verifique o console para mais detalhes.'); // Define uma mensagem de erro
    }
  };

  useEffect(() => {
    fetchUsers(); // Busca os usuários quando o componente é montado
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/users/${id}`); // Deleta o usuário pelo ID
      fetchUsers(); // Atualiza a lista de usuários após a deleção
    } catch (error) {
      console.error('Erro ao deletar o usuário:', error);
      setError('Erro ao deletar o usuário. Verifique o console para mais detalhes.'); // Define uma mensagem de erro
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Lista de Usuários</h2>
      {error && <div className="alert alert-danger">{error}</div>} {/* Exibe mensagem de erro, se houver */}
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
