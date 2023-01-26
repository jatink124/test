import React,{useContext} from 'react'
import AuthContext from './AuthContext';
function MyComponent() {
  return (
    <div>
    const {user,setUser} = useContext(AuthContext)
    </div>
  )
}

export default MyComponent