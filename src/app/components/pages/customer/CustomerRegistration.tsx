import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  Link,
  // Navigate,
  useNavigate,
  NavigateFunction,
} from "react-router-dom";
import { ICustomerRegistration } from "../../../modal/ICustomerRegistration";
import Card from "../../common/Card";
import { connect } from "react-redux";
import { SignupParams } from "../../../global.types";
import { AuthState } from "../../../redux/reducers/auth";
import { AppState } from "../../../redux/store";
import { signup } from "../../../redux/actions/authAction";
import { AppConstant } from "../../utils/AppConstant";

const CustomerRegistration = ({ signup, auth }: SignupProps) => {
  const [formData, setFormData] = useState<ICustomerRegistration>({
    UserName: "",
    FullName: "",
    Password: "",
    ConfirmPassword: "",
  });
  const navigate = useNavigate();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.Password !== formData.ConfirmPassword) {
      alert("Password and confirm password should be same");
    } else {
      signup(
        {
          name: formData.FullName,
          password: formData.Password,
          userName: formData.UserName,
          userType: AppConstant.UserTypeObj.Customer,
        },
        navigate
      );
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // if (auth.isAuthenticated) {
  //   //redirect("/dashboard");
  //   return <Navigate to={"/login"}></Navigate>;
  //   // it should navigate us to dashboard page.
  // }

  return (
    <div className="customerRegistration">
      <Card className="centerAlignItems">
        <form onSubmit={onSubmit}>
          <div className="row text-center ">
            <div className="col col-8 offset-2">
              <input
                placeholder="User Name"
                name="UserName"
                required
                onChange={onChange}
              />
            </div>
            <div className="col col-8 offset-2">
              <input
                placeholder="Full Name"
                name="FullName"
                required
                onChange={onChange}
              />
            </div>
            <div className="col col-8 offset-2">
              <input
                placeholder="Password"
                type="Password"
                name="Password"
                required
                onChange={onChange}
              />
            </div>
            <div className="col col-8 offset-2">
              <input
                required
                onChange={onChange}
                placeholder="Confirm Password"
                type="Password"
                name="ConfirmPassword"
              />
            </div>
            <div className="col col-8 offset-2">
              <button type="submit">Register</button>
            </div>
          </div>
        </form>
        <div className="col col-8 text-center ">
          Already Have An Customer Account &nbsp;
          <Link to="/login">Login Here</Link>
        </div>
        <br />
      </Card>
    </div>
  );
};

CustomerRegistration.propTypes = {};

const mapStateToProps = (state: AppState) => ({ auth: state.auth });

const mapDispatchToProps = { signup };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerRegistration);

interface SignupProps {
  // setAlert : typeof SetAlert
  signup: (signupParams: SignupParams, navigate: NavigateFunction) => void;
  auth: AuthState;
}

// interface FormData {
//   name: string;
//   email: string;
//   password: string;
//   password2: string;
// }
