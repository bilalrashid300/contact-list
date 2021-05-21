import {useRef} from 'react';
import Button from '../../button/index'
import {Link} from 'react-router-dom'
import Card from '../cardView/index'
import './style.css'

const CardListing = (props) => {

    const InputEl = useRef("")
    
    const deleteHandler = (id) => {
        props.deleteContact(id)
    };

    const getsearchTerm = () => {
        props.searchHandler(InputEl.current.value);
    }

    const renderContactList = props.contact.map((contact) => {
        return(
            <Card key={contact.id} contact={contact} deleteHandler={deleteHandler}/>
        )
    })

    return(
        <div className="cardList">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="mb-0">Contact List</h4>
                <Link to="/add"><Button>Add Contact</Button></Link>
            </div>
            <div className="mb-5">
                <div className="input-group mb-3">
                    <input ref={InputEl} type="text" className="form-control" placeholder="Search" value={props.value} onChange={getsearchTerm} aria-label="Username" aria-describedby="basic-addon1"/>
                    <div className="input-group-append">
                        <span className="input-group-text input-icon" id="basic-addon1"><i className="fa fa-search"></i></span>
                    </div>
                </div>
            </div>
            {renderContactList ? renderContactList : "EMPTY"}
        </div>
    )
}

export default CardListing;