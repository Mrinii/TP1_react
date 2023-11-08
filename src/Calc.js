import React, { useState } from 'react'

export default function Calc() {

const [exp,setExp]=useState('');


const clear=()=>{
  setExp('');
}

const result=()=>{
  try {
  let v=exp;
    setExp(eval(v));
    
   }
  catch(error){
    setExp('expression non valide') ;
  }
}
const tapecar=(e)=>{
let oldval=exp;
let newval=oldval+e.target.value;
setExp(newval);
}

  return (
    <div>
      <input onClick={(e)=>tapecar(e)} type="button" value="." className="value btn btn-primary w p-4" />
      <input onClick={(e)=>tapecar(e)} type="button" value="0" className="value btn btn-primary w p-4"/>
      <input onClick={(e)=>tapecar(e)} type="button" value="1" className="value btn btn-primary w p-4"/>
      <input onClick={(e)=>tapecar(e)} type="button" value="2" className="value btn btn-primary w p-4"/>
      <br />
      <input onClick={(e)=>tapecar(e)} type="button" value="3" className="value btn btn-primary w p-4"/>
      <input onClick={(e)=>tapecar(e)} type="button" value="4" className="value btn btn-primary w p-4"/>
      <input onClick={(e)=>tapecar(e)} type="button" value="5" className="value btn btn-primary w p-4"/>
      <br />
      <input onClick={(e)=>tapecar(e)} type="button" value="6" className="value btn btn-primary w p-4"/>
      <input onClick={(e)=>tapecar(e)} type="button" value="7" className="value btn btn-primary w p-4"/>
      <input onClick={(e)=>tapecar(e)} type="button" value="8" className="value btn btn-primary w p-4"/>
      <input onClick={(e)=>tapecar(e)} type="button" value="9" className="value btn btn-primary w p-4"/>
      <br />
      <input onClick={(e)=>tapecar(e)} type="button" value="+" className="value btn btn-warning w p-4"/>
      <input onClick={(e)=>tapecar(e)} type="button" value="-" className="value btn btn-warning w p-4"/>
      <input onClick={(e)=>tapecar(e)} type="button" value="*" className="value btn btn-warning w p-4"/>
      <input onClick={(e)=>tapecar(e)} type="button" value="/" className="value btn btn-warning w p-4"/>
      <br />
      <input onClick={clear} type="button" className="value btn btn-danger w p-4" value="C" />
      <input onClick={result} type="button" className="value btn btn-succsess w p-4" value="=" />
      <input value={exp} type="text"  />
    </div>
  )
}
