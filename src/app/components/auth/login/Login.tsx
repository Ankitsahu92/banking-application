import React, { ChangeEvent, useState } from "react";
import styles from "./Login.module.scss";
import bankImg from "../../../../assets/images/bank.webp";
import jwt from "jwt-decode"; // import dependency
import { Link, useNavigate } from "react-router-dom";
import { ILogin } from "../../../modal/ILogin";
import api from "../../utils/utility";
import { Constant } from "../../utils/constant";
import { AppConstant } from "../../../modal/AppConstant";

type Props = {};

const Login = (props: Props) => {
  const [formData, setFormData] = useState<ILogin>({
    password: "",
    userName: "",
  });

  const navigate = useNavigate();

  const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("onSubmit", e, formData);
    // localStorage.setItem("UserType", AppConstant.UserType.Customer);
    // localStorage.setItem(AppConstant.UserName, formData.UserName);
    try {
      const resp = await api.post("/auth", {
        ...formData,
        // userName: "sahu@gmail.com",
        // password: "sahu@gmail.com1",
      });
      const token = resp.data.data.token;
      localStorage.setItem(Constant.Token, token);
      const decodeToken: any = jwt(token);
      console.log(decodeToken.user.name, "user");
      //localStorage.setItem("UserType", AppConstant.UserType.Customer);
      localStorage.setItem(AppConstant.UserType, decodeToken.user.userType);
      localStorage.setItem(AppConstant.UserName, decodeToken.user.name);
      localStorage.setItem(AppConstant.ID, decodeToken.user.id);
      return navigate("/dashboard");
    } catch (e) {
      console.error(e);
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className={styles.flexRow}>
      <div className={styles.flexColumn}>
        <input
          type="Image"
          alt="Bank Image"
          src={bankImg}
          className={styles.img}
        />
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
                        name="userName"
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
                        name="password"
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
