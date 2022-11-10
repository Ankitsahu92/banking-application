import React, { ChangeEvent, useState } from "react";
import styles from "./Login.module.scss";
import bankImg from "../../../../assets/images/bank.webp";

import { Link, useNavigate } from "react-router-dom";
import { AppConstant } from "../../../modal/AppConstant";
import { ILogin } from "../../../modal/ILogin";

type Props = {};

const Login = (props: Props) => {
  const [formData, setFormData] = useState<ILogin>({
    Password: "",
    UserName: "",
  });

  const navigate = useNavigate();

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("onSubmit", e, formData);
    localStorage.setItem("UserType", AppConstant.UserType.Customer);
    localStorage.setItem(AppConstant.UserName, formData.UserName);
    setTimeout(() => {
      navigate("/Dashboard");
    }, 100);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className={styles.flexRow}>
      <div className={styles.flexColumn}>
        <img alt="Bank Image" src={bankImg} className={styles.img} />
      </div>
      <div className={styles.flexColumn}>
        <div className={styles.flexContainer}>
          <div className={styles.flexContainerRow}>
            <div className={styles.flexItem}>
              <div style={{ textAlign: "left" }}>
                <div className="col-12">
                  <h1>Login</h1>
                </div>
                <div className="col-12">
                  <form onSubmit={onSubmit}>
                    <div className="form-group">
                      <label htmlFor="UserName">User Name</label>
                      <input
                        required
                        onChange={onChange}
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
                        onChange={onChange}
                        type="password"
                        className="form-control"
                        id="Password"
                        name="Password"
                        placeholder="Enter Password"
                      />
                    </div>

                    <div className="row">
                      <div className="col col-8">
                        <Link to="/ForgotPassword">Forgot Password</Link>
                      </div>
                      <div className="col col-4" style={{ textAlign: "end" }}>
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
      </div>
    </div>
  );
};

export default Login;
