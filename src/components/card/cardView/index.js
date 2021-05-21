import {useState} from 'react';
import {Link} from 'react-router-dom'
import CardDeletePopup from '../../modal/cardDeletePopup/index'
import './style.css'



const Card = (props) => {

    const {id,imagePath,name,email} = props.contact;
    const [deleteItem, setDeleteItem] = useState(false);

    const deleteHandlerPopup = (id) => {
        props.deleteHandler(id)
    }

    const onPopupOpen = () => {
        setDeleteItem(true)
    }

    const onPopupClose = () => {
        setDeleteItem(false)
    }

    return(
        <div className="cardContainer">
            <div className="cardContent">
                <img className="cardImage" src={imagePath.userImage} alt="user"  />
                <Link to={{pathname:`/contact/${id}`, state:{contact:props.contact}}}>
                    <div className="cardDetail">
                        <p>{name}</p>
                        <p>{email}</p>
                    </div>
                </Link>
            </div>
            <div className="cardBtn">
                <Link to={{pathname:`/edit`, state:{contact:props.contact}}}>
                    <i className="fas fa-pen mt-1 mr-2" style={{color: "blue"}}></i>
                </Link>
                <i className="fas fa-trash" data-toggle="modal" data-target="#cardDeletePopup" style={{color: "red"}} onClick={onPopupOpen}></i>
            </div>
            { deleteItem ? <CardDeletePopup deleteHandlerPopup={deleteHandlerPopup} onPopupClose={onPopupClose} contactId={id} /> : null}
        </div>
    )
}

export default Card;