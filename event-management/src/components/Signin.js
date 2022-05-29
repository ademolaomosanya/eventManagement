import React from "react";

export default function Signin(){
    return(
    //     <div class="sign--container">
    //   <div class="form">
    //   <h1 style={{fontSize:"20px", margin:"0px", color:" rgb(250, 150, 186)"}}>Sign into your Account</h1>
    //     <input
    //       type="email"
    //       placeholder="Email Address"
    //       class="form-control"
    //       required
    //     />
        
    //     <input
    //       type="Password"
    //       placeholder="Password"
    //       class="form-control"
    //       required
    //     />
    //        <button className="form-b" >LOGIN</button>
    //        <div className="form-a">
    //        <p>Dont have an account? <a style={{textDecoration:"none"}} href="signup.html">Register here</a></p>
    //        </div>
    //   </div>
      
    // </div>



    <div>
       <div class="mainBody">
                <div class="sign--container">
                    <div class="form-centered">
                    <form className="formContainer">
                    <h1 style={{fontSize:"20px", margin:"0px", color:" rgb(250, 150, 186)"}}>Sign into your Account</h1>
       <input
          type="email"
          placeholder="Email Address"
          class="form-control"
          required
        />
        
        <input
          type="Password"
          placeholder="Password"
          class="form-control"
          required
        />
           <button className="form-b" >LOGIN</button>
           <div className="form-a">
           <p>Dont have an account? <a style={{textDecoration:"none"}} href="signup.html">Register here</a></p>

        </div>
      </form>
                    </div>
                </div>
                </div>
      
    </div>
    )
}