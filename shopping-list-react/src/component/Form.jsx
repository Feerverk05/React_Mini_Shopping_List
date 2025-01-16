import { useState } from "react";

const Form = () => {
    const [product, setProducts] = useState("");
    const [quentity, setQuentity] = useState(1);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (product){
        const newTodo = {
            id: Date.now(),
            packed: false,
            product,
            quentity,
        };
        console.log(newTodo);
        setProducts("");
        setQuentity(1);
    }
    };
    return (
    <form className="form" onSubmit={handleSubmit}>
        <select value={quentity} onChange={(e) => setQuentity(Number(e.target.value))} className="select">
        {[...Array(20)].map((_, index) => (
            <option value={index + 1} key={index + 1}>
                {index + 1}
            </option>
        ))}
        </select>
        <input className="input" type="text" placeholder="Enter a name" />
        <button className="addBtn">Add</button>
    </form>
    );
};
export default Form;