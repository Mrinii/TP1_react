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
        <input type="button" value="0" className="value" onClick={(e)=>tapper(e)} />
        <input type="button" value="1" className="value" onClick={(e)=>tapper(e)} />
        <input type="button" value="2" className="value" onClick={(e)=>tapper(e)}/>
        <input type="button" value="3" className="value" onClick={(e)=>tapper(e)} />
        <input type="button" value="4" className="value" onClick={(e)=>tapper(e)}/>
        <input type="button" value="5" className="value" onClick={(e)=>tapper(e)}/>
        <input type="button" value="6" className="value" onClick={(e)=>tapper(e)} />
        <input type="button" value="7" className="value" onClick={(e)=>tapper(e)}/>
        <input type="button" value="8" className="value" onClick={(e)=>tapper(e)}/>
        <input type="button" value="9" className="value" onClick={(e)=>tapper(e)}/>
        <br />
        <input type="button" value="+" className="value" onClick={(e)=>tapper(e)}/>
        <input type="button" value="-" className="value" onClick={(e)=>tapper(e)}/>
        <input type="button" value="x" className="value" onClick={(e)=>tapper(e)}/>
        <input type="button" value="=" className="value" onClick={(e)=>equal(e)}/>
        <input type="button" value="C" className="value" onClick={(e)=>del(e)}/>
        <br />
        <input type="text" name="res" id="res" value={operation}/>
        
    </div>
    )
}
