import {useState,useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {uuid} from 'uuidv4'
import Header from '../header/index'
import ContactEditForm from '../../form/editContact/index'
import ContactForm from '../../form/addContact/index'
import CardListing from '../../card/cardListing/index'
import CardDetail from '../../card/cardDetail/index'
import api from '../../../api/contacts'

import './style.css'

const Home = () => {
    const LOCAL_STORAGE_KEY = 'contacts'
    const [contacts, setContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState([])

    const searchHandler = (item) => {
        setSearchTerm(item)
        if(item !== ""){
            const newContactList = contacts.filter((contact) => {
                return Object.values(contact).join("").toLowerCase().includes(item.toLowerCase());
            });
            setSearchResult(newContactList)
        }
        else{
            setSearchResult(contacts)
        }
    }

    const retreiveContacts = async () => {
        const res = await api.get("/contacts");
        return res.data;
    }

    const updateContact = async (contact) => {
        const res = await api.put(`/contacts/${contact.id}`,contact);
        const {id} = res.data
        setContacts(contacts.map((contact) => {
            return contact.id === id ? {...res.data} : contact;
        }))
    }

    const addContact = async (contact) => {
        const request = {
            id: uuid(),
            ...contact
        }
        const res = await api.post("/contacts",request);
        setContacts([...contacts,res.data]);
    }

    const deleteContact = async (id) => {
        await api.delete(`/contacts/${id}`)
        const newContactList = contacts.filter((contact)=>{
            return contact.id !== id;
        })
        setContacts(newContactList);
    }

    useEffect(() => {
        const getAllContacts = async () => {
            const retreive = await retreiveContacts();
            if(retreive) 
                setContacts(retreive);
        }
        getAllContacts()
    },[])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
    },[contacts])

    return(
        <div className="">
            <Header />
            <div className="container my-4">
                <div className="row">
                    <Router>
                        <Switch>
                            <div className="col-md-12">
                                <Route path="/edit" render={(props) => (<ContactEditForm {...props} updateContact={updateContact}/>)} />
                                <Route path="/add" render={(props) => (<ContactForm {...props} addContact={addContact}/>)} />
                                <Route exact path="/" render={(props) => (<CardListing {...props} contact={searchTerm.length > 0 ? searchResult : contacts} searchTerm={searchTerm} searchHandler={searchHandler} deleteContact={deleteContact} />)} />
                                <Route path ="/contact/:id" component={CardDetail} />
                            </div>
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    )
}

export default Home;