import React, { ChangeEvent, Component } from "react";
import styles from "./Login.module.scss";
import bankImg from "../../../assets/images/bank.webp";
import { Link } from "react-router-dom";
import { ILogin } from "../../modal/ILogin";
type Props = {};
class Login extends Component<Props, ILogin> {
  constructor(props: Props) {
    super(props);
    this.state = { UserName: "", Password: "" };
  }

  onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("onSubmit", e, this.state);
  };

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

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
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label htmlFor="UserName">User Name</label>
                    <input
                      required
                      onChange={this.onChange}
                      name="UserName"
                      type="text"
                      className="form-control"
                      id="UserName"
                      aria-describedby="UserNameHelp"
                      placeholder="Enter User Name"
                    />
                    {/* <small id="UserNameHelp" className="form-text text-muted">
                      We'll never share your user name with anyone else.
                    </small> */}
                  </div>
                  <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input
                      required
                      onChange={this.onChange}
                      type="password"
                      className="form-control"
                      id="Password"
                      name="Password"
                      placeholder="Enter Password"
                    />
                  </div>

                  <div className="row">
                    <div className="col col-6">
                      <Link to="/ForgotPassword">Forgot Password</Link>
                    </div>
                    <div className="col col-6" style={{ textAlign: "end" }}>
                      <button type="submit">Submit</button>
                    </div>
                  </div>
                </form>

                <br />
                <div>
                  Not a Customer &nbsp;
                  <Link to="/CustomerRegistration">Register Here</Link>
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
