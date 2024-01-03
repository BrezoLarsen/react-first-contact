// CUSTOM HOOK

import { useEffect, useState } from 'react';
import { usersApi } from '../api/usersApi';

export const useUsers = () => {
  // hooks de React (empiezan por use)
  // useState retorna siempre un array de dos elementos
  // state: constante
  // setState: fn que actualiza el valor de state
  // const [state, setState] = useState();
  const [users, setUsers] = useState([]);

  // useEffect dispara eventos secundarios (petición http)
  useEffect(
    () => {
      // Ejecutaremos lo que haya dentro de esta fn anónima
      getUsers();
    },
    [
      // Cuando algo de lo que haya en este array cambie
    ]
  );

  // const getUsers = () => {
  //   usersApi.get(usersApi.baseURL).then((res) => {
  //     console.log(res.data.data);
  //   });
  // };
  // lo mismo pero más bonito :)
  const getUsers = async () => {
    await usersApi.get(usersApi.baseURL).then((res) => {
      setUsers(res.data.data);
    });
  };

  return {
    users,
  };
};
