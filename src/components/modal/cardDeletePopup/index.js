import './style.css'

const CardDeletePopup = (props) => {
    return(
        <div className="modal fade" id="cardDeletePopup" tabIndex="-1" role="dialog" aria-labelledby="cardDeletePopup" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-body">
                    <i className="fas fa-trash mr-2" style={{color: "red"}}></i>
                    Are you sure you want to delete this?
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-delete" data-dismiss="modal"  onClick={() => props.deleteHandlerPopup(props.contactId)}>Yes</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => props.onPopupClose()}>No</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CardDeletePopup;