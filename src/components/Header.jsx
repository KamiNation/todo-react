function Header (props){
    return(<>
        <div id="left">
            <label for="task">Task Name:</label>
            <input type="text" value={props.value} name="task" id="task" onChange={props.change}/>
            <button type="button" onClick={props.btnFunc}>Submit</button>
        </div>
    </>)    
}

export default Header