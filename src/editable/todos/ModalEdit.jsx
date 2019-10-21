import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

const ModalEdit = ({todo, showModalEdit, setShowModalEdit, handleSubmit }) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState();
  const [content, setContent] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("");
  useEffect(()=> {
    setId(todo.id);
    setTitle(todo.title);
    setContent(todo.content);
    setTime(todo.createdAt);
    setStatus(todo.status);
  },[todo.id])
  return (
    <Modal show={showModalEdit} onHide={() => setShowModalEdit(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Update Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <label>ID</label>
          <input type="text" value={ id } disabled className="form-control" />
        </div>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value= {title}
            onChange = {(e)=> setTitle(e.target.value)}
            className="form-control"
            placeholder="Enter Title"
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            value={content}
            onChange = {(e)=> setContent(e.target.value)}
            className="form-control"
            placeholder="Enter Content"
           rows = {5}
          />
        </div>
        <div className="form-group">
          <label>Created At</label>
          <input type="text" disabled className="form-control" value={new Date(time).toLocaleString()}  />
        </div>
        <div className="form-group">
          <label>Status</label>
          <select value ={status} onChange = {(e)=> setStatus(e.target.value)} className="form-control">
            <option value="DEFAULT" disabled>Choose a status ...</option>
            <option>pending</option>
            <option value="done">done</option>
          </select>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-secondary"
          onClick={() => setShowModalEdit(false)}
        >
          Close
        </button>
        <button className="btn btn-primary" onClick={() => handleSubmit({id, title, content, createdAt:time, status})}>
          Save Changes
        </button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalEdit;
