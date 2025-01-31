import React, {useState} from 'react';
import './App.css';

import { ItemList } from './INCR';
const App = () =>{
  const initVal = [{
    id:1, value: 5, title:"Break length"
  },
  {
    id:2, value:25, title:"Session length"
  },
 {
    id:3, value:0, title:"Session"
  }]
  const [items, setItems] = useState(initVal); 
  
  const increment = (id)=>{
setItems(items.map(item =>item.id===id?{...item, value: item.value +1} : item));
  };
  const decrement = (id)=>{
    setItems(items.map(item =>item.id===id?{...item, value: item.value -1} : item));
      };
      const reset = (id)=>{
       setItems(items.map(item =>item.id===id ?{...item, value: initVal.find(i=>i.id===id).value} : item));
            };
          
  return (
    <div className="App">
<div>

 <ItemList items={items} onIncrement = {increment} onDecrement={decrement} onReset={reset}/>
  </div>
    </div>
     );
    };
export default App;
