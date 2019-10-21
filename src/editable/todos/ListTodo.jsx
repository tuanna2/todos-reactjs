import React, {useState} from "react";
import api from '../../api';
import ModalEdit from './ModalEdit';
import ModalCreate from './ModalCreate';

const ListTodo = ({todos, setTodos, clearCache}) => {
  const [todo, setTodo] = useState({});
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalCreate, setShowModalCreate] = useState(false);

  const handleEdit = (todo) => {
    const fetch = api.updateTodo(todo.id,todo);
    fetch.then(data => {
      const index = todos.findIndex(t => t.id === data.id);
      const newTodos = todos;
      newTodos[index] = {
        ...todos[index],
        ...data
      };
      setTodos(newTodos);
      setShowModalEdit(false);
      clearCache();
    }).catch(err => alert(err))
  }
  const handleDelete = (id) => {
    if(!confirm("Are you sure?")){
      return;
    }
    const fetch = api.deleteTodo(id);
    fetch.then(()=> {
      const index = todos.findIndex(t => t.id === id);
      const newTodos = todos.slice(0);
      newTodos.splice(index, 1);
      setTodos(newTodos);
      clearCache();
    })
    .catch(err => alert(err));
  }
  const handleCreate = (todo) => {
    const fetch = api.createTodo(todo);
    fetch.then(e => {
      const newTodos = todos;
      newTodos.push(e);
      setTodos(newTodos);
      setShowModalCreate(false);
      clearCache();
    })
  }
  return <>
  <button className = "btn btn-info" onClick = {()=> setShowModalCreate(true)}>Create Todo</button>
  <table className="table table-bordered">
  <thead  className ="thead-dark">
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Content</th>
      <th>Created At</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      { todos.map((e, i) => {
        return <tr key ={e.id}>
            <td>{e.id}</td>
            <td>{e.title}</td>
            <td>{e.content}</td>
            <td>{new Date(e.createdAt).toLocaleString()}</td>
            <td>{e.status}</td>
            <td> 
              <button onClick = {() => {
                setTodo(todos[i]);
                setShowModalEdit(true);
              }}
              className ="btn btn-warning">
              Update
              </button>
              <button onClick = {() => handleDelete(todos[i].id)} className ="btn btn-danger">Delete</button>
            </td>
          </tr>
      }) }
  </tbody>
</table>
<ModalEdit
    showModalEdit = {showModalEdit} 
    setShowModalEdit = {setShowModalEdit} 
    todo = {todo}
    handleSubmit = {handleEdit} />
<ModalCreate 
  showModalCreate = {showModalCreate}
  setShowModalCreate = {setShowModalCreate}
  handleSubmit = {handleCreate}
/>
</>;
};

export default ListTodo;
