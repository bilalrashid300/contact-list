import './style.css'

const CardDetail = (props) => {
    const {imagePath,name,email} = props.location.state.contact;
    return(
        <div className="cardDetailContainer">
            <div className="cardContent">
                <img className="cardImage" src={imagePath.userImage} alt="user" />
                <div className="cardDetail">
                    <p>{name}</p>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    )
}

export default CardDetail;