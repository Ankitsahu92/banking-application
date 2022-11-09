import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { ICustomerRegistration } from "../../../modal/ICustomerRegistration";
import Card from "../../common/Card";

type Props = {};

const CustomerRegistration = (props: Props) => {
  const [formData, setFormData] = useState<ICustomerRegistration>({
    UserName: "",
    FullName: "",
    Password: "",
    ConfirmPassword: "",
  });

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("onSubmit", e, formData);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

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

export default CustomerRegistration;
