import React, { ChangeEvent, Component } from "react";
import { Link } from "react-router-dom";
import { ICustomerRegistration } from "../../../modal/ICustomerRegistration";
import Card from "../../common/Card";

type Props = {};

class CustomerRegistration extends Component<Props, ICustomerRegistration> {
  constructor(props: Props) {
    super(props);
    this.state = {
      UserName: "",
      FullName: "",
      Password: "",
      ConfirmPassword: "",
    };
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
      <div className="customerRegistration">
        <Card className="centerAlignItems">
          <form onSubmit={this.onSubmit}>
            <div className="row text-center ">
              <div className="col col-8 offset-2">
                <input
                  placeholder="User Name"
                  name="UserName"
                  required
                  onChange={this.onChange}
                />
              </div>
              <div className="col col-8 offset-2">
                <input
                  placeholder="Full Name"
                  name="FullName"
                  required
                  onChange={this.onChange}
                />
              </div>
              <div className="col col-8 offset-2">
                <input
                  placeholder="Password"
                  type="Password"
                  name="Password"
                  required
                  onChange={this.onChange}
                />
              </div>
              <div className="col col-8 offset-2">
                <input
                  required
                  onChange={this.onChange}
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
  }
}

export default CustomerRegistration;
