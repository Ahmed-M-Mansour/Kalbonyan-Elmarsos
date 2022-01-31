import { useState  , Fragment} from 'react';
import AddUser from './components/users/AddUser';
import UserList from './components/users/UsersList';


function App(props) {

  const [userList , setUserList] = useState([])
  const addUserHandler = (uNanme , uAge) =>{
    setUserList(prevUsersList=>{
      return [...prevUsersList , {key:Math.random()  ,name: uNanme , age: uAge }]
    } )
  }
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} /> 
      <UserList users={userList }/>
    </Fragment>
  );
}

export default App;
