import { useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";


function App() {
  const [items, setItems] = useState([]);

    const handleAddItems =(item)=>
    {
        setItems((items)=>[...items,item])
    }

    const onDeleteItems =(id)=>
      {
          setItems((items)=>items.filter((item) => item.id !== id));
      }

      const handleDoneItem =(id)=>
        {
            setItems((items)=>items.map((item) => item.id ? { ...item, packed: !item.packed } : item ));
        }
  return (
    <div className="appWrapper">
      <Header/>
      <Main items={items} handleAddItems={handleAddItems} onDeleteItems={onDeleteItems} handleDoneItem={handleDoneItem}/>
      <Footer items={items}/>
    </div>
  );
}

export default App;
