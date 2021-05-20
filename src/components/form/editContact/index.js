import react,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import Input from '../../input/index'
import Button from '../../button/index'
import userImage from '../../images/user.webp'
import '../style.css'

const ContactEditForm = (props) => {

    // const [contacts, setContacts] = useState([]);
    const {id,propImagePath,propName,propEmail} = props.location.state.contact;
    console.log(props)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [imagePath, setImagePath] = useState(null)
    const [imgData, setImgData] = useState(null);
    // setName(propName);
    // setEmail(propEmail);

    const reset = () => {
        setName('');
        setEmail('');
        setImagePath('');
        setImgData(null);
    }

    const onChangePicture = (e) => {
        // console.log(e.target.files[0])
        if (e.target.files[0]) {
          setImagePath(e.target.files[0]);
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            setImgData(reader.result);
          });
          reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(e.name === "" && e.email === ""){
            alert("Please Fill Empty Feild")
        }
        else{
            const contact = {
                    id: id,
                    imagePath: {userImage},
                    name: name,
                    email: email
            }
            console.log(contact)
            props.updateContact(contact)
            props.history.push('/')
            reset();
        }
    }

    return(
        <form className="form" onSubmit={handleSubmit}>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="mb-0">Edit Contact Form</h4>
                <Link to="/"><Button>Back</Button></Link>
            </div>
            <Input type="text" label="Name"  name="name"  value={name} onChange={(e) => setName(e.target.value)} />
            <Input type="email" label="Email"  name="email" value={email}  onChange={(e) => setEmail(e.target.value)} />
            <Input type="file" label="File" name="file" value={imgData} onChange={(e) => onChangePicture} />
            <Button>UPDATE</Button>
        </form>
    )
}

export default ContactEditForm;