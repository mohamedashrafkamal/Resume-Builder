import { useState } from "react";
import { InputWithLabel } from "./ui/inputWithLabel";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "./ui/button";

export const PersonalInformation = ({
  personalInfo,
  handleInputChange,
}: {
  personalInfo: any;
  handleInputChange: (field: string, value: string) => void;
}) => {
  debugger;
  const [showAdditional, setShowAdditional] = useState(false);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <InputWithLabel
          id="first-name"
          type="text"
          placeholder="First Name"
          aria-label="First Name"
          value={personalInfo.firstName}
          onChange={(e) => handleInputChange("firstName", e.target.value)}
          className="form-input"
        />
        <InputWithLabel
          id="last-name"
          type="text"
          placeholder="Last Name"
          aria-label="Last Name"
          value={personalInfo.lastName}
          onChange={(e) => handleInputChange("lastName", e.target.value)}
          className="form-input"
        />
        <InputWithLabel
          id="email"
          type="email"
          placeholder="Email"
          aria-label="Email"
          value={personalInfo.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className="form-input"
        />
        <InputWithLabel
          id="phone"
          type="tel"
          placeholder="Phone"
          aria-label="Phone"
          value={personalInfo.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          className="form-input"
        />
        <InputWithLabel
          id="country"
          type="text"
          placeholder="Country"
          aria-label="Country"
          value={personalInfo.country}
          onChange={(e) => handleInputChange("country", e.target.value)}
          className="form-input"
        />
        <InputWithLabel
          id="city"
          type="text"
          placeholder="City"
          aria-label="City"
          value={personalInfo.city}
          onChange={(e) => handleInputChange("city", e.target.value)}
          className="form-input"
        />
        <InputWithLabel
          id="job-title"
          type="text"
          placeholder="Job Title"
          aria-label="Job Title"
          value={personalInfo.jobTitle}
          onChange={(e) => handleInputChange("jobTitle", e.target.value)}
          className="form-input"
        />
      </div>
      <Button
        onClick={() => setShowAdditional(!showAdditional)}
        className="text-blue-500 font-semibold shadow-none"
      >
        Edit Additional Details
        <ChevronsUpDown className="h-5 w-5 text-blue-500" />
      </Button>
      {showAdditional && (
        <div className="grid grid-cols-2 gap-4">
          <InputWithLabel
            id="address"
            type="text"
            placeholder="Address"
            aria-label="Address"
            value={personalInfo.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
            className="form-input"
          />
          <InputWithLabel
            id="postal-code"
            type="text"
            placeholder="Postal Code"
            aria-label="Postal Code"
            value={personalInfo.postalCode}
            onChange={(e) => handleInputChange("postalCode", e.target.value)}
            className="form-input"
          />
          <InputWithLabel
            id="driving-license"
            type="text"
            placeholder="Driving License"
            aria-label="Driving License"
            value={personalInfo.drivingLicense}
            onChange={(e) =>
              handleInputChange("drivingLicense", e.target.value)
            }
            className="form-input"
          />
          <InputWithLabel
            id="nationality"
            type="text"
            placeholder="Nationality"
            aria-label="Nationality"
            value={personalInfo.nationality}
            onChange={(e) => handleInputChange("nationality", e.target.value)}
            className="form-input"
          />
          <InputWithLabel
            id="place-of-birth"
            type="text"
            placeholder="Place of Birth"
            aria-label="Place of Birth"
            value={personalInfo.placeOfBirth}
            onChange={(e) => handleInputChange("placeOfBirth", e.target.value)}
            className="form-input"
          />
          <InputWithLabel
            id="date-of-birth"
            type="date"
            placeholder="Date of Birth"
            aria-label="Date of Birth"
            value={personalInfo.dateOfBirth}
            onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
            className="form-input"
          />
        </div>
      )}
    </div>
  );
};
