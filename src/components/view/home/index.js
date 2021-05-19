import react,{useState,useEffect} from 'react';
import {uuid} from 'uuidv4'
import Input from '../../input/index'
import Button from '../../button/index'
import CardListing from '../../card/cardListing/index'
import userImage from '../../images/user.webp'

import './style.css'

const Home = () => {
    const LOCAL_STORAGE_KEY = 'contacts'
    const [contacts, setContacts] = useState([]);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [imagePath, setImagePath] = useState({userImage})
    const reset = () => {
        setName('');
        setEmail('');
        setImagePath('');
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(name == "" && email == ""){
            alert("Please Fill Empty Feild")
        }
        else{
            const contactArray = [...contacts];
            const contact = {
                    id: uuid(),
                    imagePath: {userImage},
                    name: name,
                    email: email
            }
            contactArray.push(contact)
            setContacts(contactArray)
            reset();
        }
    }

    const deleteContact = (id) => {
        const newContactList = contacts.filter((contact)=>{
            return contact.id != id;
        })
        setContacts(newContactList);
    }

    useEffect(() => {
        const retreiveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if(retreiveContacts)
            setContacts(retreiveContacts)
    },[])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
    },[contacts])

    return(
        <div className="container my-3">
            <div className="row">
                <div className="col-md-6">
                    <form className="form" onSubmit={handleSubmit}>
                        <h1>Contact Form</h1>
                        <Input type="text" label="Name"  name="name"  value={name} onChange={(e) => setName(e.target.value)} />
                        <Input type="email" label="Email"  name="email" value={email}  onChange={(e) => setEmail(e.target.value)} />
                        <Button>ADD</Button>
                    </form>
                </div>
                <div className="col-md-6">
                    <CardListing contact={contacts} deleteContact={deleteContact} />
                </div>
            </div>
        </div>
    )
}

export default Home;