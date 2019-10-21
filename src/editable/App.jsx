import React,{ useState, useMemo, useEffect} from "react";
import Search from "./Search";
import StatusSelect from "./StatusSelect";
import ListTodo from "./todos/ListTodo";
import ScrollUpButton from './ScrollUpButton';
import CachedSearch from './Cache';
import './style/bs4.min.css';
import './style/custom.css';
import api from '../api';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [option, setOption] = useState("all");
  const cache = useMemo(() => new CachedSearch(api.getTodos, setTodos),[]); 
  const handleSearchSubmit = e => {
    cache.changeQuery(e, option);
  }
  const clearCache = () => {
    cache.clearCache()
  }
  useEffect(()=> {
      cache.changeQuery("", option);
  },[])
  return (
    <div className ="container-fluid">
      <div className = "form-group">
        <StatusSelect value = {option} onChange={setOption} />
        <Search onSubmit={handleSearchSubmit} />
      </div>
      <h3>Your todo list</h3>
      <ListTodo todos = {todos} setTodos = {setTodos} clearCache = {clearCache} />
      <ScrollUpButton viewport = {window.innerHeight} />
    </div>
  );
};

export default App;
