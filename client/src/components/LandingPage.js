import React, {useContext} from 'react';
import UserContext from '../context/UserContext'
const LandingPage = () =>{

const {auth} = useContext(UserContext)

  return(
    <div>
      Hello
    </div>
  )
}

export default LandingPage;