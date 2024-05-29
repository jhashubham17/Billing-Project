import React, { useState, ChangeEvent } from "react";
import "./HomePage.css";
import ParkingandTollComponent from "./Component/ParkingandTollPlaza/ParkingandTollComponent";
import DistanceandDuration from "./Component/DistanceandDuration/DistanceandDuration";
import PickupandDrop from "./Component/PickupandDrop/PickupandDrop";
import { FormDataType } from "../../Type/FormType";

const HomePage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [formData, setFormData] = useState<FormDataType>({} as FormDataType);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    updateFormData("typeOfBooking", event.target.value);
  };

  const updateFormData = (key: keyof FormDataType, value: any) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const selected = () => {
    if (selectedOption === "distance" || selectedOption === "duration") {
      return (
        <DistanceandDuration
          formData={formData}
          updateFormData={updateFormData}
          title={selectedOption}
        />
      );
    } else if (selectedOption === "pickup_drop") {
      return (
        <PickupandDrop formData={formData} updateFormData={updateFormData} />
      );
    }
    return null;
  };

  return (
    <div>
      <h1 className="Heading">Jha Cab Services Billing</h1>
      <div className="container">
        <form>
          <div className="outerDiv">
            <h1 className="thirtyPercentage">Name :</h1>
            <input
              value={formData.name}
              className="input seventyPercentage"
              placeholder="Enter the customer's name."
              onChange={(text) => updateFormData("name", text.target.value)}
            />
          </div>
          <div className="outerDiv">
            <h1 className="thirtyPercentage">Contact :</h1>
            <input
              value={formData.contact}
              className="input seventyPercentage"
              inputMode="numeric"
              onChange={(text) => updateFormData("contact", text.target.value)}
              placeholder="Enter the customer's contact number."
            />
          </div>
          <div className="outerDiv">
            <label htmlFor="dropdown thirtyPercentage">
              <h1
                style={{
                  marginRight: 50,
                }}
              >
                Booking Type :
              </h1>
            </label>
            <select
              className="dropDown"
              id="dropdown"
              value={selectedOption}
              onChange={handleChange}
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                borderStyle: "dotted",
                width: "73.8%",
              }}
            >
              <option value="" disabled>
                Select a booking type.
              </option>
              <option value="distance">Distance</option>
              <option value="duration">Duration</option>
              <option value="pickup_drop">Pickup & Drop</option>
            </select>
          </div>
          {selectedOption ? (
            <div className="outerDiv">
              <h1 className="thirtyPercentage">Selected : </h1>
              <h1
                className="seventyPercentage"
                style={{ textTransform: "capitalize" }}
              >
                {" "}
                {selectedOption == "pickup_drop"
                  ? "Pickup & Drop"
                  : selectedOption}
              </h1>
            </div>
          ) : null}
          <div>{selected()}</div>
          <div>
            <ParkingandTollComponent
              formData={formData}
              updateFormData={updateFormData}
              title={"Parking"}
            />
          </div>
          <div>
            <ParkingandTollComponent
              formData={formData}
              updateFormData={updateFormData}
              title={"Toll Plaza"}
            />
          </div>
          <div className="outerDiv">
            <h1 className="thirtyPercentage">Other Expense(s) :</h1>
            <input
              style={
                {
                  // width: "73%",
                }
              }
              className="input seventyPercentage"
              inputMode="numeric"
              value={formData.otherExpenses}
              onChange={(text) =>
                updateFormData("otherExpenses", text.target.value)
              }
            />
          </div>
          <button
            onClick={() => console.log("Form : ", JSON.stringify(formData))}
            type="button"
          >
            <h1>Submit</h1>
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
