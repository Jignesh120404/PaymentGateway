// App.js
import logo from "./Nike.png";
import facebook from "./Facebook.png";
import twitter from "./twittere.png";
import insta from "./Instagram.png";
import Tick from "./Card real.png";
import React from 'react';
import Paynow from "./Paynow.png";
import './App.css';
import C1 from "./C1.png";
import GT from "./GreenTick.png";

function App() {
  const boldStyle = { fontWeight: 'bold' };
  return (
    <div className='MyDiv'>
      <img src={logo} className="Img" />
      <div className="Register"><img className= "one"src={C1}></img><p className="One" style={boldStyle}>Registered cards</p>
      <p className="Blank"></p>
      <div className="R1">
  <img src={GT} alt="Bank Logo" style={{ marginRight: '110px', verticalAlign: 'middle',marginTop:'10px'}} />
  <p style={{ marginRight: '110px', display: 'inline-block', verticalAlign: 'middle' ,marginTop:'20px'}}>Bank</p>
  <p style={{ marginRight: '110px', display: 'inline-block', verticalAlign: 'middle' ,marginTop:'20px'}}>Number</p>
  <p style={{ marginRight: '110px', display: 'inline-block', verticalAlign: 'middle',marginTop:'20px' }}>Name</p>
  <p style={{ display: 'inline-block', verticalAlign: 'middle' }}>Date</p>
</div>

<div className="R2">
  <img src={C1} alt="Bank Logo" style={{ marginRight: '85px', verticalAlign: 'middle' }} />
  <p style={{ marginRight: '85px', display: 'inline-block', verticalAlign: 'middle', fontWeight: 'bold' }}>Bank of Ind</p>
  <p style={{ marginRight: "130px", display: 'inline-block', verticalAlign: 'middle', fontWeight: 'bold' }}>1234</p>
  <p style={{ marginRight: '115px', display: 'inline-block', verticalAlign: 'middle', fontWeight: 'bold' }}>Shaz</p>
  <p style={{ display: 'inline-block', verticalAlign: 'middle', fontWeight: 'bold',marginTop:'20px' }}>12/34</p>
</div>

<p className="blank"></p>

<div className="R3">
  <img src={Tick} alt="Bank Logo" style={{ marginRight: '110px', verticalAlign: 'middle',marginTop:'10px' }} />
  <p style={{ marginRight: '110px', display: 'inline-block', verticalAlign: 'middle' ,marginTop:'20px'}}>Bank</p>
  <p style={{ marginRight: '110px', display: 'inline-block', verticalAlign: 'middle' ,marginTop:'20px'}}>Number</p>
  <p style={{ marginRight: '110px', display: 'inline-block', verticalAlign: 'middle',marginTop:'20px' }}>Name</p>
  <p style={{ display: 'inline-block', verticalAlign: 'middle' }}>Date</p>
</div>

<div className="R4" style={{ fontFamily: 'Rubik, sans-serif' }}>
      <img src={C1} className="Bank" style={{ marginRight: '85px', verticalAlign: 'middle', marginTop: '-20px' }} />
      <p style={{ marginRight: '90px', display: 'inline-block', verticalAlign: 'middle',}}>Bank of BD</p>
      <p style={{ marginRight: '105px', display: 'inline-block', verticalAlign: 'middle'}}>1234</p>
      <p style={{ marginRight: '85px', display: 'inline-block', verticalAlign: 'middle'}}>Jane Cooper</p>
      <p style={{ display: 'inline-block' }}>12/34</p>
    </div>

     </div>
      <div className="Card" ><img className="card"src={Tick}></img><p className="C">Add new card</p></div>
      <div className="Order"><h3 style={{fontWeight:400}}>Order summary</h3><p style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span className="Sub">Sub total</span>
      <span style={boldStyle}>$134</span>
    </p>
    <p style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span className="Del">Delivery fee</span>
      <span style={boldStyle}>$5</span>
           </p>
           <div className="line"></div>
           <p style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span></span>
      <span style={boldStyle}>$139</span>
           </p>
           <button className="button" style={{ color: 'white', fontWeight: 'bold' }}><img className= "H"src={Paynow}></img>PAY NOW </button>
      </div>
      <p className="R"></p>
      <div className="Imp">
        
      <p className="Down"> Copyright 2021 © Nike </p></div>
        <p className="Down1">Support line: +250 788 467 808 </p>
       <p className="Down2">Don't missout on once-in-a-while-deals:<img className="T" src={twitter}></img><img className="I"src={insta}></img><img className="F" src={facebook}></img></p>
    </div>
  );
}

export default App;
