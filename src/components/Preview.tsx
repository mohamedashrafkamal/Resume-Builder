import React from "react";

export const Preview: React.FC<{ sections: any[] }> = ({ sections }) => {
  debugger;
  return (
    <div className="flex flex-col items-center bg-gray-100 shadow-lg p-4 w-[210mm] h-[297mm] overflow-auto relative">
      {/* Last Saved Text */}
      <div className="absolute top-2 left-4 text-sm text-gray-500">
        Last saved less than a minute ago
      </div>

      {/* Preview Content */}
      <div className="bg-white p-6 shadow-md rounded-md w-full max-h-[85%] overflow-auto mt-4">
        {sections.map((section) => (
          <div key={section.id} className="mb-6">
            <h3 className="text-xl font-bold mb-2">{section.title}</h3>
            <div className="text-gray-700">
              {section.id === "personalInfo" && (
                <div>
                  <p>
                    <strong>First Name:</strong>{" "}
                    {section.state.firstName || "N/A"}
                  </p>
                  <p>
                    <strong>Last Name:</strong>{" "}
                    {section.state.lastName || "N/A"}
                  </p>
                  <p>
                    <strong>Email:</strong> {section.state.email || "N/A"}
                  </p>
                  <p>
                    <strong>Phone:</strong> {section.state.phone || "N/A"}
                  </p>
                  <p>
                    <strong>Country:</strong> {section.state.country || "N/A"}
                  </p>
                  <p>
                    <strong>City:</strong> {section.state.city || "N/A"}
                  </p>
                  <p>
                    <strong>Job Title:</strong>{" "}
                    {section.state.jobTitle || "N/A"}
                  </p>
                  <p>
                    <strong>Address:</strong> {section.state.address || "N/A"}
                  </p>
                  <p>
                    <strong>Postal Code:</strong>{" "}
                    {section.state.postalCode || "N/A"}
                  </p>
                  <p>
                    <strong>Driving License:</strong>{" "}
                    {section.state.drivingLicense || "N/A"}
                  </p>
                  <p>
                    <strong>Nationality:</strong>{" "}
                    {section.state.nationality || "N/A"}
                  </p>
                  <p>
                    <strong>Place of Birth:</strong>{" "}
                    {section.state.placeOfBirth || "N/A"}
                  </p>
                  <p>
                    <strong>Date of Birth:</strong>{" "}
                    {section.state.dateOfBirth || "N/A"}
                  </p>
                </div>
              )}
              {section.id === "skills" && (
                <div>
                  {section.state.map((skill: any, index: number) => (
                    <p key={index}>
                      {skill.name || "Skill Name"} -{" "}
                      {skill.level || "Skill Level"}
                    </p>
                  ))}
                </div>
              )}
              {section.id === "employments" && (
                <div>
                  {section.state.map((employment: any, index: number) => (
                    <div key={index} className="mb-4">
                      <p>
                        <strong>Job Title:</strong>{" "}
                        {employment.jobTitle || "N/A"}
                      </p>
                      <p>
                        <strong>Company:</strong> {employment.company || "N/A"}
                      </p>
                      <p>
                        <strong>Start Date:</strong>{" "}
                        {employment.startDate || "N/A"}
                      </p>
                      <p>
                        <strong>End Date:</strong> {employment.endDate || "N/A"}
                      </p>
                      <p>
                        <strong>Currently Working:</strong>{" "}
                        {employment.currentlyWorking ? "Yes" : "No"}
                      </p>
                      <p>
                        <strong>Description:</strong>{" "}
                        {employment.description || "N/A"}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {section.id === "certificates" && (
                <div>
                  {section.state.map((certificate: any, index: number) => (
                    <div key={index} className="mb-4">
                      <p>
                        <strong>Certificate Name:</strong>{" "}
                        {certificate.name || "N/A"}
                      </p>
                      <p>
                        <strong>Completion Date:</strong>{" "}
                        {certificate.date || "N/A"}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {section.id === "educations" && (
                <div>
                  {section.state.map((education: any, index: number) => (
                    <div key={index} className="mb-4">
                      <p>
                        <strong>Field of Study:</strong>{" "}
                        {education.fieldOfStudy || "N/A"}
                      </p>
                      <p>
                        <strong>University:</strong>{" "}
                        {education.university || "N/A"}
                      </p>
                      <p>
                        <strong>Start Date:</strong>{" "}
                        {education.startDate || "N/A"}
                      </p>
                      <p>
                        <strong>End Date:</strong> {education.endDate || "N/A"}
                      </p>
                      <p>
                        <strong>Currently Studying:</strong>{" "}
                        {education.currentlyStudying ? "Yes" : "No"}
                      </p>
                      <p>
                        <strong>Description:</strong>{" "}
                        {education.description || "N/A"}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {section.id === "languages" && (
                <div>
                  {section.state.map((language: any, index: number) => (
                    <div key={index} className="mb-4">
                      <p>
                        <strong>Language:</strong> {language.name || "N/A"}
                      </p>
                      <p>
                        <strong>Proficiency:</strong>{" "}
                        {language.proficiency || "N/A"}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Pagination and Download Button */}
      <div className="flex items-center justify-between mt-4 w-full px-6">
        {/* Pagination Controls */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900">
            <span className="text-lg">&lt;</span>
          </button>
          <span className="text-gray-700">1</span>
          <button className="text-gray-600 hover:text-gray-900">
            <span className="text-lg">&gt;</span>
          </button>
        </div>

        {/* Download Button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Download PDF
        </button>
      </div>
    </div>
  );
};
