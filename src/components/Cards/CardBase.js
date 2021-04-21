import react from 'react'
import styled from 'styled-components';
import img1 from '../../static/images/Green.png'
import "./card.css"







const CardBase = (props) => {
    const text_color =props.text_color;
    return (
        
       
            <div class="card" style={{backgroundImage:`url(${props.img})`, backgroundPosition: 'center',height:150,
                backgroundSize: 'cover', color:`${props.shadow}`,
                 backgroundRepeat: 'no-repeat'}}>
            <div class="text-center" style={{marginTop:"5%" ,marginLeft:"42%" ,width:"50px",height:"50px"}}   >
            <div style={{width:"100%", height:"100%",backgroundSize:'cover' ,backgroundImage:`url(${props.licon})`}} />
            </div>  
            <div class="text-center" style={{marginTop:"5%"}}>
            
            <a href="#" class="btn" style={{color:text_color, fontWeight:"bold"}}>{props.fun}</a>
            </div>  
            </div>
    

        
    
        
    )
  }
  
  export default CardBase