import React from 'react';


const Text = ({text}) => {
    console.log(text);
    return (
        <div>
            {
                text.map((para)=>{
                        return(
                            <p>{para}</p>);
                })
            }
        </div>
    )
}

export default Text
