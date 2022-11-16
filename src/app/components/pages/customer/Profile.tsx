import React, { ChangeEvent, useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { ProfileType } from "../../../global.types";
import {
  createOrUpdateProfile,
  deleteAccount,
  getCurrentUserProfile,
} from "../../../redux/actions/profileAction";

import { AppState } from "../../../redux/store";
import Card from "../../common/Card";

export const Profile = ({
  profileData,
  profileLoading,
  createOrUpdateProfile,
  getCurrentUserProfile,
  deleteAccount,
}: ProfileProps) => {
  useEffect(() => {
    getCurrentUserProfile();
  }, [getCurrentUserProfile]);

  const navigate = useNavigate();

  const [formData, setFormData] = useState<ProfileType>(
    profileData
      ? profileData
      : {
          id: "",
          customerId: "",
          Aadhar: "",
          name: "",
          PAN: "",
          Phone: "",
          SecurityQuestionAnswer: "",
          UploadAadhar: "",
          UploadPAN: "",
        }
  );

  useEffect(() => {
    if (profileData) setFormData(profileData);
  }, [profileData]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("onSubmit", e, formData);
    createOrUpdateProfile({ ...formData }, navigate);
  };
  const onlyNumberKey = (evt: any) => {
    // Only ASCII character in that range allowed
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode !== 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
      evt.preventDefault();
      return false;
    }

    return true;
  };
  return (
    <Card height="100%">
      <form onSubmit={onSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-3">Customer ID:</div>
            <div className="col-9">
              <input
                required
                disabled
                onChange={onChange}
                placeholder="Customer ID"
                defaultValue={formData.customerId}
                name="customerId"
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-3">Full Name:</div>
            <div className="col-9">
              <input
                required
                onChange={onChange}
                placeholder="Full Name"
                defaultValue={formData.name}
                name="name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">Phone:</div>
            <div className="col-9">
              <input
                required
                onKeyPress={onlyNumberKey}
                onChange={onChange}
                placeholder="Phone"
                defaultValue={formData.Phone}
                name="Phone"
                maxLength={10}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">PAN:</div>
            <div className="col-9">
              <input
                required
                onChange={onChange}
                placeholder="PAN"
                maxLength={10}
                defaultValue={formData.PAN}
                name="PAN"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">Aadhar:</div>
            <div className="col-9">
              <input
                required
                onChange={onChange}
                placeholder="Aadhar"
                defaultValue={formData.Aadhar}
                name="Aadhar"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">Upload PAN:</div>
            <div className="col-9">
              <input
                required
                onChange={onChange}
                placeholder="Upload PAN"
                defaultValue={formData.UploadPAN}
                name="UploadPAN"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">Upload Aadhar:</div>
            <div className="col-9">
              <input
                required
                onChange={onChange}
                placeholder="Upload PAN"
                defaultValue={formData.UploadAadhar}
                name="UploadAadhar"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">Select Security Question:</div>
            <div className="col-9">
              <select>
                <option>Your favourite actor name</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-3">Enter Your Answer :</div>
            <div className="col-9">
              <input
                required
                onChange={onChange}
                placeholder="Enter Your Answer"
                defaultValue={formData.SecurityQuestionAnswer}
                name="SecurityQuestionAnswer"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12" style={{ textAlign: "end" }}>
              <button type="submit">Update</button>
            </div>
          </div>
        </div>
      </form>
    </Card>
  );
};

Profile.propTypes = {};

const mapStateToProps = (state: AppState) => ({
  profileData: state.profile.profile,
  profileLoading: state.profile.loading,
});

const mapDispatchToProps = {
  createOrUpdateProfile,
  getCurrentUserProfile,
  deleteAccount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

interface ProfileProps {
  profileData: ProfileType | null | undefined;
  getCurrentUserProfile: VoidFunction;
  createOrUpdateProfile: (
    data: ProfileType,
    navigate: NavigateFunction
  ) => void;
  deleteAccount: VoidFunction;
  profileLoading: boolean;
}
