import React, { useState } from "react";
import { DashNav, Button } from "../../components/shared/Reuse";
import FormInput from "../../components/shared/FormInput";

const CreateGroupModule = () => {
  const [inputData, setInputData] = useState({
    savingsTitle: "",
    savingFrequency: "",
    savingsType: "",
    commencementDate: "",
    groupTarget: "",
    duration: "",
    description: "",
    addmembers: "",
    chargingFee: ""
  });

  const inputFields = [
    {
      name: "savingsTitle",
      label:
        "Savings title",
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
      name: "savingType",
      label: "Saving type",
      placeholder: "Click on the arrow to select an option",
      type: "dropdown",
      options: ["Daily", "Weekly"],
    },
    {
      name: "commencementDate",
      label: "Commencement Date",
      placeholder: "Click on the arrow to select an option",
      type: "date",
    },
    {
      name: "groupTarget",
      label: "Group Target Amount",
      placeholder: "Enter the group target amount",
      type: "text",
    },
    {
      name: "duration",
      label: "Duration",
      placeholder: "Enter duration",
      type: "text",
    },
    {
      name: "description",
      label: "Description",
      placeholder: "Enter your message",
      type: "textarea",
    },
    {
      name: "addmembers",
      label: "Add members",
      placeholder: "Add members via email or phone number",
      type: "text",
    },
    {
      name: "chargingFee",
      label: "Charging fee",
      placeholder: "Enter Charging fee percentage or amount",
      type: "checkbox",
      options: ["Yes", "No"],
    },
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
          Create Group Module
        </h3>
        <p className="text-[14px] font-[500] text-lightgray text-center">
        Fill out the form bellow to start saving
        </p>
        <div className="w-full lg:w-[80%] md:w-[90%] mx-auto my-8 space-y-6">
  {[
    ["savingsTitle", "savingFrequency"],
    ["savingType", "commencementDate"],
    ["groupTarget", "duration"],
    ["description", "addmembers"],
    ["", "chargingFee"],
  ].map(([field1, field2], index) => (
    <div key={index} className="flex flex-col md:flex-row gap-4">
      {[field1, field2]
        .filter(Boolean) 
        .map((name) => {
          const field = inputFields.find((f) => f.name === name);
          return (
            <div key={name} className="w-full">
              <FormInput
                {...field}
                value={inputData[field.name]}
                onChange={handleChange}
              />
            </div>
          );
        })}
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default CreateGroupModule;
