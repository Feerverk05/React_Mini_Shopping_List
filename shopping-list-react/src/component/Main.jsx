import Form from "./Form";
import List from "./List";

const Main = ({items, handleAddItems}) => {
    return(
        <div>
            <Form handleAddItems={handleAddItems} />
            <ul className="mainWrapper">
            {items.map((item) => (
                <List item={item} key={item.id}/>
            ))}
        </ul>
        </div>
        
    );
};
export default Main;
