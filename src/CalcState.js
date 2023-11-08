import React, { useState } from 'react'

export default function CalcState() {
    const [operation,setOperation] = useState('');


    const tapper = (e)=>{
        let oldop = operation ;
        let newop = oldop + e.target.value ;
        setOperation(newop) ;
    }
    const equal = (e)=>{
        let op = operation ;
        setOperation(eval(op)) ;
    }
    const del = (e)=>{
        setOperation('');
    }
    return (
    <div>
        <h1>calculatrice</h1>
        <input type="button" value="0" className="value btn btn-primary m-3 p-3" onClick={(e)=>tapper(e)} />
        <input type="button" value="1" className="value btn btn-primary m-3 p-3" onClick={(e)=>tapper(e)} />
        <input type="button" value="2" className="value btn btn-primary m-3 p-3" onClick={(e)=>tapper(e)}/>
        <input type="button" value="3" className="value btn btn-primary m-3 p-3" onClick={(e)=>tapper(e)} />
        <input type="button" value="4" className="value btn btn-primary m-3 p-3" onClick={(e)=>tapper(e)}/>
        <input type="button" value="5" className="value btn btn-primary m-3 p-3" onClick={(e)=>tapper(e)}/>
        <input type="button" value="6" className="value btn btn-primary m-3 p-3" onClick={(e)=>tapper(e)} />
        <input type="button" value="7" className="value btn btn-primary m-3 p-3" onClick={(e)=>tapper(e)}/>
        <input type="button" value="8" className="value btn btn-primary m-3 p-3" onClick={(e)=>tapper(e)}/>
        <input type="button" value="9" className="value btn btn-primary m-3 p-3" onClick={(e)=>tapper(e)}/>
        <br />
        <input type="button" value="+" className="value btn btn-primary m-3 p-3" onClick={(e)=>tapper(e)}/>
        <input type="button" value="-" className="value btn btn-primary m-3 p-3" onClick={(e)=>tapper(e)}/>
        <input type="button" value="*" className="value btn btn-primary m-3 p-3" onClick={(e)=>tapper(e)}/>
        <input type="button" value="=" className="value btn btn-success m-3 p-3" onClick={(e)=>equal(e)}/>
        <input type="button" value="C" className="value btn btn-danger  m-3 p-3" onClick={(e)=>del(e)}/>
        <br />
        <input type="text" name="res" id="res" className="value btn btn-dark  m-3 p-3" value={operation}/>
        
    </div>
    )
}
