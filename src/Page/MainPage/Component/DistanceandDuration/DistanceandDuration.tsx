import React, { useState } from "react";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
type Props = {
  title: string;
  formData: FormDataType;
  updateFormData: (key: keyof FormDataType, value: any) => void;
};
import DateTimePicker from "react-datetime-picker";
import { FormDataType } from "../../../../Type/FormType";

const DistanceandDuration: React.FC<Props> = ({
  title = "",
  formData,
  updateFormData,
}) => {
  const [start, setStart] = useState<Date | null>(null);
  // const [end, setEnd] = useState<number>(0);
  // const [total, setTotal] = useState<number>(0);
  const [calculated, setCalculated] = useState<boolean>(false);
  const [finalCalculated, setFinalCalculated] = useState<boolean>(false);
  const calculate = () => {
    // setTotal(start + end);
    setCalculated(true);
  };

  const finalCalculate = () => {
    setFinalCalculated(true);
  };

  return (
    <div>
      <form>
        <div className="outerDiv">
          <h1 className="thirtyPercentage">
            {title == "distance" ? "Starting Reading " : "Starting Time "}:
          </h1>
          <input
            // style={{ width: "75%" }}
            value={formData.startedReading}
            onChange={(text) =>
              updateFormData("startedReading", text.target.value)
            }
            className="input seventyPercentage"
            inputMode="numeric"
          />
        </div>
        <div className="outerDiv">
          <h1 className="thirtyPercentage">
            {title == "distance" ? "Ending Reading  " : "Ending Time "}:
          </h1>
          {title === "duration" ? (
            <DateTimePicker
              onChange={(value) => setStart(value)}
              value={start as Date | null}
              disableClock={true}
              format="dd/MM/yyyy hh:mm a"
              dayPlaceholder="dd"
              monthPlaceholder="mm"
              yearPlaceholder="yyyy"
              hourPlaceholder="hh"
              minutePlaceholder="mm"
              showLeadingZeros
            />
          ) : (
            <input
              // style={{ width: "75%" }}
              className="input"
              inputMode="numeric"
              value={formData.endingReading}
              onChange={(text) => updateFormData("endingReading", text.target.value)}
              // onChange={(e) => setStart(parseInt(e.target.value) || 0)}
            />
          )}
        </div>
        <button type="button" onClick={() => calculate()}>
          <h1>Calculate</h1>
        </button>
      </form>
      {calculated ? (
        <div>
          <div className="outerDiv">
            <h1 className="thirtyPercentage">
              Total {title == "distance" ? "Distance" : "Duration"} :
            </h1>
            <h1> 
              {/* {total} */}
              </h1>
          </div>
          <div className="outerDiv">
            <h1 className="thirtyPercentage">
              {title == "distance" ? "Amount Per KM " : "Amount Per Hour"} :
            </h1>
            <input
              // style={{ width: "75%" }}
              className="input"
              inputMode="numeric"
              onChange={(text) => {
                title === "distance"
                  ? updateFormData("amountPerKM", text.target.value)
                  : updateFormData("amountPerHour", text.target.value);
              }}
              value={
                title === "distance"
                  ? formData.amountPerKM
                  : formData.amountPerHour
              }
            />
          </div>
          <button type="button" onClick={() => finalCalculate()}>
            <h1>Calculate</h1>
          </button>
        </div>
      ) : null}

      {finalCalculated ? (
        <div className="outerDiv">
          <h1 className="thirtyPercentage">Total Amount :</h1>
          <h1 className="seventyPercentage"> 
          {/* {total} */}
          </h1>
        </div>
      ) : null}
    </div>
  );
};

export default DistanceandDuration;
