import React, { Component } from "react";
import styles from "./Login.module.scss";
import bankImg from "../../../assets/images/bank.webp";
type Props = {};

type State = {};

class Login extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="row">
        <div className="col col-6">
          <div className={`row col-12 ${styles.col2}`}>
            <div>
              <img alt="Bank Image" src={bankImg} className={styles.img} />
            </div>
          </div>
        </div>
        <div className="col col-6">
          <div className={`row col-12 ${styles.col2}`}>
            <div className={styles.block} style={{ textAlign: "left" }}>
              <div className="col-10">
                <h1>Login</h1>
              </div>
              <div className="col-10">
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>

                  <div className="row">
                    <div className="col col-6">
                      <a href="#">Forgot Password</a>
                    </div>
                    <div className="col col-6" style={{ textAlign: "end" }}>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>

                <br />
                <div>
                  Not a Customer
                  <a href="#">Register Here</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
