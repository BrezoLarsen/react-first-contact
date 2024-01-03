import React from 'react';
import { useUsers } from '../hooks/useUsers';
import { UserRow } from '../components/userRow';

const UsersPage = () => {
  // Existen extensiones para las develooper tools de chrome específicas de React: React Chrome Developer Tools

  const { users } = useUsers();

  return (
    <div className='mt-5'>
      <h1>USERS:</h1>
      <hr />
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>EMAIL</th>
            <th>NAME</th>
            <th>AVATAR</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            // React siempre necesita un key (valor único) y se aconseja que sea un string
            // <tr key={String(user.id)}></tr>
            <UserRow key={String(user.id)} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
