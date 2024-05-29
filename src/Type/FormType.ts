export type FormDataType = {
  name: string;
  contact: number;
  typeOfBooking: string;
  startingTime?: string;
  endingTime?: string;
  TotalDuration?: string;
  amountPerHour?: string;
  startedReading?: number;
  endingReading?: number;
  totalDistance?: number;
  amountPerKM?: number;
  pickUpLocation?: string;
  dropLocation?: string;
  amountOfLocation?: number;
  totalAmount?: number;
  noOfParking?: number;
  parkingAmounts?: [
    {
      name: string;
      amount: number;
    }
  ];
  totalParkingAmount?: number;
  noOfTollPlaza?: number;
  tollPlazaAmount?: [
    {
      name: string;
      amount: number;
    }
  ];
  totalTollPlazaAmount?: number;
  otherExpenses?: number;
  grandTotal?: number;
};
