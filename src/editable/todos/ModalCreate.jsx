import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

const ModalEdit = ({ showModalCreate, setShowModalCreate, handleSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  useEffect(() => {
    setTitle("");
    setContent("");
    setStatus("pending");
  }, [showModalCreate]);
  return (
    <Modal show={showModalCreate} onHide={() => setShowModalCreate(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Create Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="form-control"
            placeholder="Enter Title"
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            className="form-control"
            placeholder="Enter Content"
            rows={5}
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <select
            defaultValue="pending"
            onChange={e => setStatus(e.target.value)}
            className="form-control"
          >
            <option value="DEFAULT" disabled>
              Choose a status ...
            </option>
            <option value="pending">pending</option>
            <option value="done">done</option>
          </select>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-secondary"
          onClick={() => setShowModalCreate(false)}
        >
          Close
        </button>
        <button
          className="btn btn-primary"
          onClick={() => handleSubmit({ title, content, status })}
        >
          Create
        </button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalEdit;
