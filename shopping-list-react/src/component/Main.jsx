import shoppingList from "../data/data";
import Form from "./Form";
import List from "./List";

const Main = () => {
    return(
        <div>
            <Form />
            <ul className="mainWrapper">
            {shoppingList.map((item) => (
                <List item={item} key={item.id}/>
            ))}
        </ul>
        </div>
        
    );
};
export default Main;