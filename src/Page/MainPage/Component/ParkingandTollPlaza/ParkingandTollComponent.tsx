import React, { useState } from "react";
import { FormDataType } from "../../../../Type/FormType";

type Props = {
  title: string;
  formData: FormDataType;
  updateFormData: (key: keyof FormDataType, value: any) => void;
};

const ParkingandTollComponent: React.FC<Props> = ({
  title,
  // formData,
  // updateFormData,
}) => {
  const [count, setCount] = useState<number>(0);
  const [titleAmount, setTitleAmount] = useState<string[]>([]);
  // const [totalAmount, setTotalAmount] = useState<number>(0);
  const [calculated, setCalculated] = useState<boolean>(false);

  const increment = () => {
    setCount(count + 1);
    setTitleAmount([...titleAmount, ""]);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setTitleAmount(titleAmount.slice(0, 1));
    }
  };

  const handleParkingAmountChange = (index: number, value: string) => {
    const updatedtitleAmount = titleAmount.map((amount, i) =>
      i === index ? value : amount
    );
    setTitleAmount(updatedtitleAmount);
  };

  const calculate = () => {};

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     // You can add further form submission logic here
  //     console.log("Form submitted with parking amounts:", titleAmount);
  //   };

  return (
    <div>
      <div className="outerDiv">
        <h1 className="thirtyPercentage">No of {title} : </h1>
        <div
          style={{
            marginLeft: 15,
            borderWidth: 1,
            borderStyle: "dotted",
            borderColor: "#fff",
            paddingLeft: 10,
            paddingRight: 10,
            height: 50,
            width: 205,
            borderRadius: 10,
          }}
          className="outerDiv "
        >
          <button type="button" onClick={() => decrement()}>
            <h6 style={{ margin: 0, padding: 0 }}>-</h6>
          </button>
          <h1 style={{ marginLeft: 10, marginRight: 10 }}>{count}</h1>
          <button
            style={{ margin: 0 }}
            type="button"
            onClick={() => increment()}
          >
            <h6 style={{ margin: 0, padding: 0 }}>+</h6>
          </button>
        </div>
      </div>
      {count != 0 ? (
        <form
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "50%",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="container"
            >
              {Array.from({ length: count }).map((_, index) => (
                <div
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    marginBottom: 15,
                  }}
                  key={index}
                >
                  <label className="outerDiv">
                    {index + 1}st {title} amount :
                    <input
                      style={{
                        width: "66%",
                      }}
                      className="input"
                      type="text"
                      value={titleAmount[index] || ""}
                      onChange={(e) => {
                        handleParkingAmountChange(index, e.target.value);
                        // updateFormData('')
                      }}
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>
          {count == 0 ? null : (
            <button
              type="button"
              onClick={() => {
                calculate();
                setCalculated(true);
              }}
            >
              <h1>Calculate</h1>
            </button>
          )}
        </form>
      ) : null}

      {calculated && count > 0 && (
        <div className="outerDiv">
          <h1 className="thirtyPercentage">Total {title} Amount :</h1>
          <h1>
            {/* {totalAmount} */}
            </h1>
        </div>
      )}
    </div>
  );
};

export default ParkingandTollComponent;
