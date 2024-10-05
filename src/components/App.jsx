import { AddUserForm } from './AddUserForm'
import { SearchUserForm } from './SearchUserForm'
import { PhoneBook } from './PhoneBook'
import { useDispatch } from "react-redux"
import { useEffect } from "react";
import { getContacts } from "../redux/apiContacts/operation";
import { useSelector } from "react-redux";
function App() {

  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getContacts())  
    }, [useSelector((state)=>state.apiRemove),
        useSelector((state)=>state.apiAdd),
        useSelector((state)=>state.filter)
    ]);
 
  return (
    <>
      <AddUserForm/>
      <SearchUserForm/>
      <PhoneBook/>
    </>
  )
}
export default App
