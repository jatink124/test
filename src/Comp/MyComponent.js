import React,{useContext} from 'react'
import MyContext from '../context';
function MyComponent() {
    const value = useContext(MyContext);
    return (
   
<div>{value}</div>
  
  )
}

export default MyComponent