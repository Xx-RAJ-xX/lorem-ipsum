import React, {useState} from 'react';
import Text from './Text';
import data from './data';
const Tab = () => {


    const [length,setLength]= useState(0);
    const [text,setText] = useState([]);
    const handleSubmit= (e) =>{
        e.preventDefault();
        let amount = parseInt(length);
        if(length<=0){
            amount=1;
        }
        if(length>8){
            amount=8;
        }
        setText(data.slice(0,amount));         
        
    }

    return (
        <>
            <form className="lorem-form" onSubmit={handleSubmit}>
                   <label htmlFor='amount'>Pararaphs : </label>
                   <input type="number" name="amount" id="amount"  value={length} onChange={(e) => setLength(e.target.value)}/>
                   <button className="btn" type='submit'>Generate</button>
            </form>
            <Text text={text}/>
            
        </>
    )
}

export default Tab
