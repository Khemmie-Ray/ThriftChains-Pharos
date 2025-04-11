import React, { useState } from "react";
import { DashNav, Button } from "../../components/shared/Reuse";

const CreateModule = () => {
  const [inputData, setInputData] = useState({
    savingsTitle: "",
    savingFrequency: "",
    savingsAmount: "",
    duration: "",
    currency: "",
  });

  const inputFields = [
    {
      name: "savingsTitle",
      label:
        "Savings title OR Add asset saved from the marketplace cart or wishlist",
      placeholder: "This should contain your financial goals",
      type: "text",
    },
    {
      name: "savingFrequency",
      label: "Saving frequency",
      placeholder: "Click on the arrow to select an option",
      type: "dropdown",
      options: ["Daily", "Weekly", "Monthly", "Yearly"],
    },
    {
      name: "savingsAmount",
      label: "Savings amount / target amount",
      placeholder: "Add your target amount",
      type: "text",
    },
    {
      name: "duration",
      label: "Duration",
      placeholder: "Enter Duration",
      type: "text",
    },
    { name: "currency", label: "Currency", placeholder: "#", type: "text" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <DashNav>Create Individual Module</DashNav>
      <div className="bg-white my-6 mx-8 p-6">
        <h3 className="font-[600] mb-4 text-[20px] lg:text-[24px] md:text-[24px] mt-6 text-center leading-0">
          Create Individual Module
        </h3>
        <p className="text-[14px] font-[500] text-lightgray text-center">
          Fill out the form bellow to start saving
        </p>
        <div className="w-[100%] lg:w-[50%] md:w-[60%] mx-auto my-8">
          {inputFields.map(({ name, label, placeholder, type, options }) => (
            <div key={name} className="my-4">
              <label className="text-[14px] font-[500]">{label}</label>
              {type === "dropdown" ? (
                <select
                  name={name}
                  value={inputData[name]}
                  onChange={handleChange}
                  style={{ display: "block", marginTop: "5px", padding: "5px" }}
                >
                  <option value="" disabled>
                    {placeholder}
                  </option>
                  {options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={type}
                  name={name}
                  value={inputData[name]}
                  placeholder={placeholder}
                  onChange={handleChange}
                  className="p-3 border border-lightgray block w-[100%] text-xs rounded-lg"
                />
              )}
            </div>
          ))}

          <Button type="submit">Create</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateModule;
