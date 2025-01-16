import Form from "./Form";
import List from "./List";

const Main = ({items, handleAddItems, handleDoneItem, onDeleteItems}) => {
    return(
        <div>
            <Form handleAddItems={handleAddItems} />
            <ul className="mainWrapper">
            {items.map((item) => (
                <List item={item} key={item.id} onDeleteItems={onDeleteItems} handleDoneItem={handleDoneItem}/>
            ))}
        </ul>
        </div>
        
    );
};
export default Main;
