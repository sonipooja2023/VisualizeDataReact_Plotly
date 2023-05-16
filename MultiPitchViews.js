import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./main.css";
import PitchView from './PitchView';
function MultiPitchView() {
    const [data,setData]=useState([]);
    const [pitcher,setPitcher]=useState("");
    const [pitch,setPitch]=useState("");
    const [view,setView]=useState("");
    useEffect(()=>{
     axios.get("https://raw.githubusercontent.com/rd-astros/hiring-resources/master/pitches.json")
     .then(function(response){
        setData(response.data.queryResults.row);
     })
    },[]);
    console.log(data);
    const allPitcher=data.map(i=>i.pitcher_name).reduce((acc,name)=>{
        if(!acc.includes(name)){
            return [...acc,name];
        } return acc;
    },[]);
    console.log(allPitcher);
    const allPitch=data.map(i=>i.pitch_type).reduce((acc,pitch)=>{
        if(!acc.includes(pitch)){
            return [...acc,pitch];
        } return acc;
    },[]);
    console.log(allPitch);    
    
  return (
    <div class="container">
       <h1>Pitch View</h1>
       <div class="filter">
         <label htmlFor='pithcer'>Select Pitcher</label>
         <select className="filterPitcher" onChange={(e)=>setPitcher(e.target.value)}>
            {allPitcher.map(pitcher=><option>{pitcher}</option>)}
         </select>
         <label>Select Pitch</label>
         <select className="filterPitch" onChange={(e)=>setPitch(e.target.value)}>
            {allPitch.map(pitch=><option>{pitch}</option>)}
         </select>
         <label>Select View</label>
         <select className="filterView" onChange={(e)=>setView(e.target.value)}>
            <option value="singlePitchView">Single Pitch View</option>
            <option value="MultiPitchView">Multi Pitch View</option>
         </select>
         {view==="MultiPitchView" 
            ? allPitch.map(p=>{
             return <PitchView 
                     data={data}
                     pitch={p} 
                     pitcher={pitcher}
                   />
                })
            : <PitchView 
                     data={data}
                     pitch={pitch}
                     pitcher={pitcher} 
                   />
         }  
       </div>
    </div>
  )
}

export default MultiPitchView