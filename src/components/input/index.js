import react from 'react';
import './style.css'

const Input = ({label, ...inputProp}) => {
    return(
        <div className="form-group">
            {label && (
                <label>{label}</label>
            )}
            <input className="form-control" {...inputProp} />
        </div>
    )
}

export default Input;