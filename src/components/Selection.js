import React , {useState}from 'react';

const Selection = (props) =>{
    let [color, setcolor] = useState({ background: '' })
    const{applyColor} = props;
    const apply = (background) =>{
        setcolor({background: background});
    }
    
    return(
        <div className = "fix-box" style = {{color}} onClick={applyColor(apply)} > 
            <h2 className = "subheading">Selection</h2>
            </div> 
    )
    
}

export default Selection;
