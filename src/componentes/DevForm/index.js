import React, {useState} from 'react';
//import './styled.css';

function DevForm({onSubmit}){
    const[Name,setName]=useState('');
    const[NotIdeia,setNotIdeia]=useState('');


    async function handSubmit(e){
        e.preventDefault()
        await onSubmit({
            Name,
            NotIdeia,
        });
        setName('');
        setNotIdeia('');
        
    }
    return(
        <form onSubmit={handSubmit}>
            <div className='input-block'>
                <input
                    Name="Name"
                    id="Name"
                    required value={Name}
                    onChange={e=> setName(e.target.value)}
                />
            </div>
                
            <div>
                <input
                    NotIdeia="NotIdeia"
                    id="NotIdeia"
                    required value={NotIdeia}
                    onChange={e=> setNotIdeia(e.target.value)}
            />
            </div>
            <button type="submit">Salvar</button>
        </form>
    )
}
export default DevForm;