import react from 'react';
import Button from '../../button/index'
import {Link} from 'react-router-dom'
import Card from '../cardView/index'

const CardListing = (props) => {
    
    const deleteHandler = (id) => {
        props.deleteContact(id)
    };

    const renderContactList = props.contact.map((contact) => {
        return(
            <Card key={contact.id} contact={contact} deleteHandler={deleteHandler}/>
        )
    })

    return(
        <div className="cardList">
            <div className="d-flex justify-content-between align-items-center mb-5">
                <h4 className="mb-0">Contact List</h4>
                <Link to="/add"><Button>Add Contact</Button></Link>
            </div>
            {renderContactList ? renderContactList : "EMPTY"}
        </div>
    )
}

export default CardListing;