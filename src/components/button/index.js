import react from 'react';
import './style.css'

const Button = ({children, ...btnProp}) => {
    return(
        <button className="btn btn-primary" {...btnProp}>{children}</button>
    )
}

export default Button;