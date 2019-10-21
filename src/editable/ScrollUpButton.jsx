import React, {useEffect, useState} from 'react';

export default ({viewport}) => {
  const [showBtn,setShowBtn] = useState(false);
  const handleScroll = () => {
    if(window.pageYOffset > (viewport/2)){
      setShowBtn(true);
    }
    else setShowBtn(false);
  }
  useEffect(()=> {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll",handleScroll);
    }
  },[])
  return (
    <button onClick = {()=>window.scrollTo({left:0,top:0,behavior:"smooth"})  }
    className = {`btn btn-success backtotop ${showBtn ? "" : "d-none"}`}>
    Top
    </button>
  );
}