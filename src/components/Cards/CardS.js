import react from 'react'
import styled from 'styled-components';
import left from '../../static/images/Green.png'
import mid from '../../static/images/blue_back.png'
import right from '../../static/images/orange_back.png'
import lefticon from '../../static/images/left_icon.png'
import mid_icon from '../../static/images/mid_icon.png'
import right_icon from '../../static/images/right_icon.png'
import CardBase from './CardBase';
import "./card.css"



const CardS = () => {



    return (


        
        <div class="row">
        <div class="column" >
          <CardBase  fun={"Case Upload"} img ={left} text_color={"#38c38c"} licon={lefticon} shadow={"#39C38D"}/>  
        </div>
        <div class="column">
          <CardBase fun={"Generate Report"} img={mid} text_color={"#1e60db"} licon={mid_icon} shadow={"#316CDE"}/>  
        </div>
        <div class="column">
          <CardBase fun={"Broadcast Message"} img ={right} text_color={"#ff7930"} licon={right_icon} shadow={"#FF833F"}/>  
        </div>
      </div>
      
    )
  }
  
  export default CardS