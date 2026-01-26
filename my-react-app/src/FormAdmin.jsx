import  Axios  from 'axios';
import { useState,useEffect } from 'react'
// import { data } from 'react-router-dom';


function FormAdmin() {
    const [name,setName]=useState('');
    const [Password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const[list,setList]=useState([])
    // const [id, setId] = useState('')
    // const[delete,setDelete]=useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/api/admin').then(res=> res.json()).then(data => setList(data)
        )
    },[]);
    function h1(e){
        setName(e.target.value)
    }
    function h2(e){
        setPassword(e.target.value)
    }
    function h3(e){
        setEmail(e.target.value)
    }
    function h4(e){
        e.preventDefault()
      var data={  Name:name,Password:Password,email:email}
      Axios.post("http://localhost:8000/api/admin",data).then(res=>console.log(res)
      )
    }

    function handledelete(e){
        let id=e.target.value;
        // console.log(id)
        Axios.delete('http://localhost:8000/api/admin/'+id).then(res=>console.log(res))
    }
    return(
        <>

        <form onSubmit={h4}>

        name <input type="text"  value={name} onChange={h1}/>
        password <input type="text"  value={Password} onChange={h2}/>
        email <input type="text"  value={email} onChange={h3}/>
        <button type="submit">submit</button>
        </form>
        
        <div>
            {
                list.map((item,index)=>(
                    <div key={index}>

                        <h1>{item.Name}</h1>
                        <button value={item.Id} onClick={handledelete}>remove</button>
                        <button>edit</button>
                        



                    </div>
                ))
            }
        </div>
        </>
    )
}

export default FormAdmin