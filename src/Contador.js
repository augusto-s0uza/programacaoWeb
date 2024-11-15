import React, {useState, useEffect} from "react";
const Counter=()=>{
    const[contagem,setContagem]=useState(0);
    const[rodando,setRodando]=useState(true);

    useEffect(()=>{
        if(rodando){
            const intervalo=setInterval(()=>{
                setContagem((contagemAnterior)=>contagemAnterior+1);
            },1000);

            return()=>clearInterval(intervalo);
        }

    },[rodando]);
    const paraContagem=()=>{
        setRodando(false);
    };

    return(
        <div>
            <h1>Contador:{contagem}</h1>
            <button onClick={paraContagem}>Parar contador</button>
        </div>
    );
};
export default Counter;