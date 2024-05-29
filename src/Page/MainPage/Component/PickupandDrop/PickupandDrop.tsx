import React from "react";
import { FormDataType } from "../../../../Type/FormType";

type Props = {
  formData: FormDataType;
  updateFormData: (key: keyof FormDataType, value: any) => void;
};

const PickupandDrop: React.FC<Props> = ({ formData, updateFormData }) => {
  return (
    <div>
      <form>
        <div className="outerDiv">
          <h1 className="thirtyPercentage">Pickup Location :</h1>
          <input
            value={formData.pickUpLocation}
            onChange={(text) =>
              updateFormData("pickUpLocation", text.target.value)
            }
            className="input"
            inputMode="text"
          />
        </div>
        <div className="outerDiv">
          <h1 className="thirtyPercentage">Drop Location :</h1>
          <input
            value={formData.dropLocation}
            onChange={(text) =>
              updateFormData("dropLocation", text.target.value)
            }
            className="input"
            inputMode="text"
          />
        </div>
        <div className="outerDiv">
          <h1 className="thirtyPercentage">Amount :</h1>
          <input
            // style={{ width: "80%" }}
            value={formData.amountOfLocation}
            onChange={(text) =>
              updateFormData("amountOfLocation", text.target.value)
            }
            className="input"
            inputMode="numeric"
          />
        </div>
      </form>
    </div>
  );
};

export default PickupandDrop;
