import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import {BrowserRouter as Router, Route, Switch, Link}from "react-router-dom";
import React from "react";
import {Opisan,Dostopri,Galer,VneResurs,MyMen} from "./Marh/MarhFun"
function Form(props) {
 
  let  nameRef = React.createRef();
  
   let  lastNameRef = React.createRef();
   let emailRef=React.createRef();
    const handlerSubmit = (event) => {
    event.preventDefault();
   props.onclic(nameRef.current.value,lastNameRef.current.value,emailRef.current.value)
    
    }
    return (
      <div>
    <form onSubmit={handlerSubmit}>
    <div className="formElement">
    <input
    type="text"
  
    placeholder="Ваше ник"
    ref={nameRef}
    
    required
    />
  
    </div>
    <div className="formElement">
    <input
    type="text"
    placeholder="Ваша пароль"
     ref={lastNameRef}
    required
    />
    </div>
    <div className="formElement">
    <input
    type="text"
    placeholder="Ваша почта"
     ref={emailRef}
    required
    />

    </div>
    <div className="formElement">
    <input type="submit" value="занести " />
    </div>
    </form>
    </div>
    );
    }
    function MyyBlock(props) {
      let dan
      if (props.Mydan!=" ") {
         dan="данные занесены";
            
      }
      if (props.MyLast!=" ") {
        dan="данные занесены";
           
     }
     if (props.MyEmail!=" ") {
      dan="данные занесены";
         
   }

      return (
        <div>
         
          <h2>{dan} </h2>
      <div >
    {props.Mydan}
    
      </div>
  
      <div>
      {props.MyLast}
      </div>
      <div>
      {props.MyEmail}
      </div>

      </div>
      );
     }
function App() {
  const [name,setname]=useState(" ");
 const [lastname, setlastname]=useState(" ");
 const [email,setemail]=useState(" ");

  let Myfun=(newName,newlasnam,newemail)=>{setname(newName);setlastname(newlasnam);setemail(newemail)}
  return (
    <div className="App">
<Form onclic={Myfun} /> 
 <MyyBlock Mydan={name} MyLast={lastname} MyEmail={email} ></MyyBlock>
  
<div>
 <Router>
 <div>

   <MyMen> </MyMen>
   <Switch>
<Route exact path="/opisan" component={Opisan} />
<Route exact path="/dostopri" component={Dostopri}/>
<Route exact path="/galer" component={Galer}/>
<Route exact path="/vneResurs" component={VneResurs}/>

   </Switch>
 </div>
 </Router>
 </div>
    </div>
  );
}

export default App;
