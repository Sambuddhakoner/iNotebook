import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    const isDelete=()=>{
        let con=window.confirm("Do you really want to delete the note?");
        if(con===true){
            deleteNote(note._id);
            props.showAlert("Deleted Successfully!","success");
        }
    }
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="far fa-trash-alt mx-2" onClick={()=>{isDelete()}}></i>
                        <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
                    </div>
                    <p className="card-text">{note.description}</p>
                    <p className="card-text" style={{fontSize:"12px"}}>{note.tag}</p>

                </div>
            </div>
        </div>
    )
}

export default Noteitem