import React , {useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';

const Header = () => {

  const { name } = useContext(GlobalContext);

  return (
    <h2>
        Expense tracker by {name}
    </h2> 
  )
}

export {Header};
