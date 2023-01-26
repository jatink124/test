import React,{useContext} from 'react'
import AuthContext from './AuthContext';
function MyComponent() {
    const {user,setUser} = useContext(AuthContext)
    return (
    <div>
    {user}
    </div>
  )
}

export default MyComponent