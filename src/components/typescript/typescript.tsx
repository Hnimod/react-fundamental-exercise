import { useState } from 'react';

type Company = {
  name: string;
  position: string;
};

type UserType = {
  id: number;
  name: string;
  company: Company;
};

const INIT_USER_LIST: UserType[] = [
  { id: 1, name: 'Minh', company: { name: 'Pyco', position: 'Intern' } },
  { id: 2, name: 'Hoi', company: { name: 'Pyco', position: 'Intern' } },
];

const INIT_INPUT_USER: UserType = {
  id: -1,
  name: '',
  company: { name: '', position: '' },
};

const TypeScript = () => {
  const [userList, setUserList] = useState<UserType[]>(INIT_USER_LIST);
  const [inputUser, setInputUser] = useState<UserType>(INIT_INPUT_USER);

  const addUser = () => {
    setUserList([...userList, inputUser]);
  };

  const handleUserId = (id: string) => {
    setInputUser({ ...inputUser, id: Number(id) });
  };

  const handleUserName = (value: string) => {
    setInputUser({ ...inputUser, name: value });
  };

  const handleCompanyName = (value: string) => {
    setInputUser({
      ...inputUser,
      company: { ...inputUser.company, name: value },
    });
  };

  const handlePosition = (value: string) => {
    setInputUser({
      ...inputUser,
      company: { ...inputUser.company, position: value },
    });
  };

  const removeUser = (userId: number) => {
    const newUserList = userList.filter((user) => user.id !== userId);
    setUserList(newUserList);
  };

  return (
    <>
      <ul className="center column">
        {!!userList &&
          userList.map((user) => (
            <li key={user.id} onClick={() => removeUser(user.id)}>
              {user.id}-{user.name}-{user.company.name} -{' '}
              {user.company.position}
            </li>
          ))}
        {userList.length === 0 && <p>No user available</p>}
      </ul>
      <div className="center column">
        <input
          id="userId"
          placeholder="User id"
          onChange={(e) => handleUserId(e.target.value)}
        />
        <input
          id="userName"
          placeholder="User name"
          onChange={(e) => handleUserName(e.target.value)}
        />
        <input
          id="companyName"
          placeholder="Company name"
          onChange={(e) => handleCompanyName(e.target.value)}
        />
        <input
          id="position"
          placeholder="Position"
          onChange={(e) => handlePosition(e.target.value)}
        />
        <button onClick={addUser}>Add user</button>
      </div>
    </>
  );
};

export default TypeScript;
