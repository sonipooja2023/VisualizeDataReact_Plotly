
import "./main.css";
import Plot from "react-plotly.js";
function PitchView(props) {
   const {data,pitch,pitcher} = props;
   //--------Information to show about pitch-------------
    const posX=data.filter(i=>i.pitcher_name===pitcher && i.pitch_type===pitch).map(i=> i.init_pos_x);
    const posY=data.filter(i=>i.pitcher_name===pitcher && i.pitch_type===pitch).map(i=> i.init_pos_y);
    const posZ=data.filter(i=>i.pitcher_name===pitcher && i.pitch_type===pitch).map(i=> i.init_pos_z);
    const velX=data.filter(i=>i.pitcher_name===pitcher && i.pitch_type===pitch).map(i=> i.init_vel_x);
    const velY=data.filter(i=>i.pitcher_name===pitcher && i.pitch_type===pitch).map(i=> i.init_vel_y);
    const velZ=data.filter(i=>i.pitcher_name===pitcher && i.pitch_type===pitch).map(i=> i.init_vel_z);
    const accelX=data.filter(i=>i.pitcher_name===pitcher && i.pitch_type===pitch).map(i=> i.init_accel_x);
    const accelY=data.filter(i=>i.pitcher_name===pitcher && i.pitch_type===pitch).map(i=> i.init_accel_y);
    const accelZ=data.filter(i=>i.pitcher_name===pitcher && i.pitch_type===pitch).map(i=> i.init_accel_z);
    const speed=data.filter(i=>i.pitcher_name===pitcher && i.pitch_type===pitch).map(i=> i.initial_speed);

  return (
    <div class="container">
      <h3>Pitch View {pitch}</h3> 
       
       <div className="pitch-view">
       <div className="chart">
        <div className="chart-data"><Plot
         data={[
        {
          x: posX.map(x=>x),
          y: posY.map(y=>y),
          z: posZ.map(z=>z),
          type: 'scatter',
          mode: 'markers',
          marker: {color: 'red'},
          name: "Initial Positions",
          
        }, 
        {
          x: velX.map(x=>x),
          y: velY.map(y=>y),
          z: velZ.map(z=>z),
          type: 'scatter',
          mode: 'markers',
          marker: {color: 'blue'},
          name: "Initial Velocity"
        },
        {
          x: accelX.map(x=>x),
          y: accelY.map(y=>y),
          z: accelZ.map(z=>z),

          type: 'scatter',
          mode: 'markers',
          marker: {color: 'yellow'},
          name: "Initial Acceleration"
        },
        {
          x: speed.map(x=>x),
          type: 'scatter',
          mode: 'markers',
          marker: {color: 'orange'},
          name: "Initial Speed"
        }
      ]}
      layout={ 
        {width: 500, height: 400,
         xaxis: { visible: false },
         yaxis: { visible: false },
         zaxis: { visible: false },
         plot_bgcolor: "rgba(0, 0, 0, 0)",
         paper_bgcolor: "rgba(0, 0, 0, 0)",
        
        }}
          /></div>
         <div className="strike-zone"></div>
         </div>
          <div className="pitcher-mound pitch-pos"></div>
         <div className="home-plate pitch-pos"></div>
         <div className="pitcher pitch-pos"></div>
        <div className="batter pitch-pos"></div>
         </div>
        

    </div>
  )
}

export default PitchView