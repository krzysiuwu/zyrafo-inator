const Button = (props) => {
    switch(props.action){
        case "new":
            
    }

    return (
        <button type="button" className="Button" >
            {props.text}
        </button>
    )
}

export default Button