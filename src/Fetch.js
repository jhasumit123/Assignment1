import React,{useState,useEffect} from 'react';
import axios from "axios";
export default function Fetch() {
    const [posts,setposts]= useState([])
    useEffect(()=>{
        axios.get('https://6051b8b8fb49dc00175b6997.mockapi.io/api/quotes').then(res=>{
            console.log(res);
            setposts(res.data)
        }).catch(err=>{
            console.log(err);
        })
    })
    return (
        <div>
         <img src={require('./single.png').default}/>
          <img src={require('./single.png').default}/>
          <img src={require('./single.png').default}/>
          <img src={require('./single.png').default}/>
          <img src={require('./single.png').default}/>
            {
               
                posts.map(e=>(
                    <div className="amit">
                    <li key={e.id}>{e.title}</li>
                    </div>
                ))
            }
           
        </div>
    )
}
