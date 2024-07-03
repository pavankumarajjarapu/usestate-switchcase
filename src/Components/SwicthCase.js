import React, { useRef } from "react";
import NavBar from "./NavBar";

function SwicthCase() {
  let stateRef = useRef();
  let parRef = useRef();
  
  
  return (
    <div>
        <NavBar></NavBar>
        <h1>***SWICTH- CASE***</h1>
    <div className="bottomContainer1">
        
      <form>
        <div>
          <label htmlFor="states">Select a State/UT:</label>
          <select
            id="states"
            name="states"
            ref={stateRef}
            onChange={() => {
              let state = stateRef.current.value;
              let capital;
              
              switch (state) {
                case "Andhra Pradesh":
                  capital = "Amaravati";
                  console.log(
                    "Selected state: Andhra Pradesh, Capital: Amaravati"
                  );
                  break;
                case "Arunachal Pradesh":
                  capital = "Itanagar";
                  console.log(
                    "Selected state: Arunachal Pradesh, Capital: Itanagar"
                  );
                  break;
                case "Assam":
                  capital = "Dispur";
                  console.log("Selected state: Assam, Capital: Dispur");
                  break;
                case "Bihar":
                  capital = "Patna";
                  console.log("Selected state: Bihar, Capital: Patna");
                  break;
                case "Chhattisgarh":
                  capital = "Raipur";
                  console.log("Selected state: Chhattisgarh, Capital: Raipur");
                  break;
                case "Goa":
                  capital = "Panaji";
                  console.log("Selected state: Goa, Capital: Panaji");
                  break;
                case "Gujarat":
                  capital = "Gandhinagar";
                  console.log("Selected state: Gujarat, Capital: Gandhinagar");
                  break;
                case "Haryana":
                  capital = "Chandigarh";
                  console.log("Selected state: Haryana, Capital: Chandigarh");
                  break;
                case "Himachal Pradesh":
                  capital = "Shimla";
                  console.log(
                    "Selected state: Himachal Pradesh, Capital: Shimla"
                  );
                  break;
                case "Jharkhand":
                  capital = "Ranchi";
                  console.log("Selected state: Jharkhand, Capital: Ranchi");
                  break;
                case "Karnataka":
                  capital = "Bengaluru";
                  console.log("Selected state: Karnataka, Capital: Bengaluru");
                  break;
                case "Kerala":
                  capital = "Thiruvananthapuram";
                  console.log(
                    "Selected state: Kerala, Capital: Thiruvananthapuram"
                  );
                  break;
                case "Madhya Pradesh":
                  capital = "Bhopal";
                  console.log(
                    "Selected state: Madhya Pradesh, Capital: Bhopal"
                  );
                  break;
                case "Maharashtra":
                  capital = "Mumbai";
                  console.log("Selected state: Maharashtra, Capital: Mumbai");
                  break;
                case "Manipur":
                  capital = "Imphal";
                  console.log("Selected state: Manipur, Capital: Imphal");
                  break;
                case "Meghalaya":
                  capital = "Shillong";
                  console.log("Selected state: Meghalaya, Capital: Shillong");
                  break;
                case "Mizoram":
                  capital = "Aizawl";
                  console.log("Selected state: Mizoram, Capital: Aizawl");
                  break;
                case "Nagaland":
                  capital = "Kohima";
                  console.log("Selected state: Nagaland, Capital: Kohima");
                  break;
                case "Odisha":
                  capital = "Bhubaneswar";
                  console.log("Selected state: Odisha, Capital: Bhubaneswar");
                  break;
                case "Punjab":
                  capital = "Chandigarh";
                  console.log("Selected state: Punjab, Capital: Chandigarh");
                  break;
                case "Rajasthan":
                  capital = "Jaipur";
                  console.log("Selected state: Rajasthan, Capital: Jaipur");
                  break;
                case "Sikkim":
                  capital = "Gangtok";
                  console.log("Selected state: Sikkim, Capital: Gangtok");
                  break;
                case "Tamil Nadu":
                  capital = "Chennai";
                  console.log("Selected state: Tamil Nadu, Capital: Chennai");
                  break;
                case "Telangana":
                  capital = "Hyderabad";
                  console.log("Selected state: Telangana, Capital: Hyderabad");
                  break;
                case "Tripura":
                  capital = "Agartala";
                  console.log("Selected state: Tripura, Capital: Agartala");
                  break;
                case "Uttar Pradesh":
                  capital = "Lucknow";
                  console.log(
                    "Selected state: Uttar Pradesh, Capital: Lucknow"
                  );
                  break;
                case "Uttarakhand":
                  capital = "Dehradun";
                  console.log("Selected state: Uttarakhand, Capital: Dehradun");
                  break;
                case "West Bengal":
                  capital = "Kolkata";
                  console.log("Selected state: West Bengal, Capital: Kolkata");
                  break;
                case "Andaman and Nicobar Islands":
                  capital = "Port Blair";
                  console.log(
                    "Selected state: Andaman and Nicobar Islands, Capital: Port Blair"
                  );
                  break;
                case "Chandigarh (UT)":
                  capital = "Chandigarh";
                  console.log(
                    "Selected state: Chandigarh (UT), Capital: Chandigarh"
                  );
                  break;
                case "Dadra and Nagar Haveli and Daman and Diu":
                  capital = "Daman";
                  console.log(
                    "Selected state: Dadra and Nagar Haveli and Daman and Diu, Capital: Daman"
                  );
                  break;
                case "Lakshadweep":
                  capital = "Kavaratti";
                  console.log(
                    "Selected state: Lakshadweep, Capital: Kavaratti"
                  );
                  break;
                case "Delhi":
                  capital = "New Delhi";
                  console.log("Selected state: Delhi, Capital: New Delhi");
                  break;
                case "Puducherry":
                  capital = "Puducherry";
                  console.log(
                    "Selected state: Puducherry, Capital: Puducherry"
                  );
                  break;
                case "Ladakh":
                  capital = "Leh";
                  console.log("Selected state: Ladakh, Capital: Leh");
                  break;
                case "Jammu and Kashmir":
                  capital = "Srinagar (summer), Jammu (winter)";
                  console.log(
                    "Selected state: Jammu and Kashmir, Capital: Srinagar (summer), Jammu (winter)"
                  );
                  break;
                default:
                  capital = "";
                  console.log("No state selected");
              }
              if (parRef.current) {
                parRef.current.innerHTML = `The capital of ${stateRef.current.value} is ${capital}.`;
              }
            }}
          >
            <option value="">Select</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Chandigarh (UT)">Chandigarh (UT)</option>
            <option value="Dadra and Nagar Haveli and Daman and Diu">
              Dadra and Nagar Haveli and Daman and Diu
            </option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Delhi">Delhi</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
          </select>
        </div>
        <p ref={parRef}></p>
      </form>
    </div>
    </div>
  );
}

export default SwicthCase;
