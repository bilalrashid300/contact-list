import react from 'react';
import './style.css'

const Card = (props) => {
    const {id,imagePath,name,email} = props.contact;
    return(
        <div className="cardContainer">
            <div className="cardContent">
                <img className="cardImage" src={imagePath.userImage} />
                <div className="cardDetail">
                    <p>{name}</p>
                    <p>{email}</p>
                </div>
            </div>
            <i className="fas fa-trash" style={{color: "red"}} onClick={() => props.deleteHandler(id)}></i>
        </div>
    )
}

export default Card;