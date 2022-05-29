import React from "react";
export default function Siginup() {
  return (
    <div>
       <div class="mainBody">
                <div class="sign--container">
                    <div class="form-centered">
                    <form className="formContainer">
        <h1
          style={{
            fontSize: "30px",
            margin: "0px",
            color: " rgb(250, 150, 186)",
            fontWeight:"bold"
          }}
        >
          Create an Account
        </h1>
        <br />
        <input
          type="FirstName"
          placeholder="FirstName"
          className="form-control"
          required
        />
        <br />
        <input
          type="Lastname"
          placeholder="Lastname"
          className="form-control"
          required
        />
        <br />
        <input
          type="email"
          placeholder="Email Address"
          className="form-control"
          required
        />
        <br />
        <input
          type="Password"
          placeholder="Password"
          className="form-control"
          required
        />
        <button className="form-b">Sign Up</button>

        <div className="form-a">
          <p>
            Already have account ?
            <a style={{ textDecoration: "none" }} href="signin.html">
              Sign in
            </a>
          </p>
        </div>
      </form>
                    </div>
                </div>
                </div>
      
    </div>
  );
}
