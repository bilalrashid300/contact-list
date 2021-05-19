import react from 'react';
import Card from '../cardView/index'

const CardListing = (props) => {
    
    // console.log(props.contact)
    const deleteHandler = (id) => {
        props.deleteContact(id)
    };
    const renderContactList = props.contact.map((contact) => {
        return(
            <Card key={contact.id} contact={contact} deleteHandler={deleteHandler}/>
        )
    })

    return(
        <div className="cardList my-4">
            <h4 className="mb-4">Contact List</h4>
            {renderContactList ? renderContactList : "EMPTY"}
        </div>
    )
}

export default CardListing;