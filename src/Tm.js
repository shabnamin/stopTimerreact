
import React from 'react';
class Tm extends React.Component {
    constructor() {
        super();
        this.state = { 
          time: {},
          inputTime: 120,
          
          
         };

        this.timer = 0;
        this.start=this.start.bind(this)
        this.stop=this.stop.bind(this)
        this.reset=this.reset.bind(this)
        console.log(this.state.inputTime)
        
      
      }
    
      toTime(inputTime){
        let hours = Math.floor(inputTime / (60 * 60));
        let dm = inputTime % (60 * 60);
        let minutes = Math.floor(dm / 60);
        let ds = dm % 60;
        let seconds = Math.ceil(ds);
    
        let time = {
          "h": hours,
          "m": minutes,
          "s": seconds
        };
        return time;
      }

      componentDidMount() {
     
        let timeLeftVar = this.toTime(this.state.inputTime);
        this.setState({ time: timeLeftVar });
      
        }
      

      start(){
        let timeLeftVar = this.toTime(this.state.inputTime);
        this.setState({ time: timeLeftVar });
    

        if ( this.state.inputTime > 0) {
          
          this.timer = setInterval(()=>{
            let inputTime = this.state.inputTime - 1;
            this.setState({
              time: this.toTime(inputTime),
              inputTime: inputTime,
            });

          }
            ,1000);

      }}

      stop(){
     
       
          clearInterval(this.timer);
        
      }
    
      reset(){
        this.stop();        
       this.setState({ inputTime: 120 }, () => {
        console.log(this.state.inputTime, 'inputTime: 120 ');
      }); 

        let timeLeft = this.toTime(this.state.inputTime);
        console.log(timeLeft)
        this.setState({ time: timeLeft });
      
        
      }
      

      render() {
      
      
        return(
            <div>
          <div >
            </div>
            <br></br>
          <button className='startandstop' onClick={this.start}>شروع</button>
          <br/>
           <div className='timer'>  {this.state.time.m} : {this.state.time.s}</div>
           <br/>
           <button  className='startandstop' onClick={this.stop}>توقف</button>
           <br/>
           <button  className='startandstop' onClick={this.reset}>ریست</button>

          </div>
        );
      }
    }
    

export default Tm
