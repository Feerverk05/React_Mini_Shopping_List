import { useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";


function App() {
  const [items, setItems] = useState([]);

    const handleAddItems =(item)=>
    {
        setItems(items=>[...items,item])
    }
  return (
    <div className="appWrapper">
      <Header/>
      <Main items={items} handleAddItems={handleAddItems}/>
      <Footer/>
    </div>
  );
}

export default App;
