import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { DraggableSection } from "./components/DraggableSection";
import { Preview } from "./components/Preview";
import { PersonalInformation } from "./components/PersonalInformation";
import { SkillsSection } from "./components/SkillsSection";
import { EmploymentSection } from "./components/EmploymentSection";
import { EducationSection } from "./components/EducationSection";
import { CertificatesSection } from "./components/CertificatesSection";
import { LanguagesSection } from "./components/LanguagesSection";
import DragHandle from "./components/DragHandle";

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    jobTitle: "",
    address: "",
    postalCode: "",
    drivingLicense: "",
    nationality: "",
    placeOfBirth: "",
    dateOfBirth: "",
  });

  const [skills, setSkills] = useState([{ id: 1, name: "", level: "" }]);

  const handleInputChange = (field: string, value: string) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }));
  };

  const addSkill = () => {
    setSkills((prev) => [
      ...prev,
      { id: prev.length + 1, name: "", level: "" },
    ]);
  };

  const updateSkill = (id: number, key: string, value: string) => {
    setSkills((prev) =>
      prev.map((skill) =>
        skill.id === id ? { ...skill, [key]: value } : skill
      )
    );
  };

  const deleteSkill = (id: number) => {
    setSkills((prev) => prev.filter((skill) => skill.id !== id));
  };

  const [employments, setEmployments] = useState([
    {
      id: 1,
      jobTitle: "",
      company: "",
      startDate: "",
      endDate: "",
      currentlyWorking: false,
      description: "",
    },
  ]);

  const addEmployment = () => {
    setEmployments((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        jobTitle: "",
        company: "",
        startDate: "",
        endDate: "",
        currentlyWorking: false,
        description: "",
      },
    ]);
  };

  const updateEmployment = (id: number, key: string, value: any) => {
    setEmployments((prev) =>
      prev.map((employment) =>
        employment.id === id ? { ...employment, [key]: value } : employment
      )
    );
  };

  const deleteEmployment = (id: number) => {
    setEmployments((prev) => prev.filter((employment) => employment.id !== id));
  };

  const [certificates, setCertificates] = useState([
    { id: 1, name: "", date: "" },
  ]);

  const addCertificate = () => {
    setCertificates((prev) => [
      ...prev,
      { id: prev.length + 1, name: "", date: "" },
    ]);
  };

  const updateCertificate = (id: number, key: string, value: string) => {
    setCertificates((prev) =>
      prev.map((certificate) =>
        certificate.id === id ? { ...certificate, [key]: value } : certificate
      )
    );
  };

  const deleteCertificate = (id: number) => {
    setCertificates((prev) =>
      prev.filter((certificate) => certificate.id !== id)
    );
  };

  const [educations, setEducations] = useState([
    {
      id: 1,
      fieldOfStudy: "",
      university: "",
      startDate: "",
      endDate: "",
      currentlyStudying: false,
      description: "",
    },
  ]);

  const addEducation = () => {
    setEducations((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        fieldOfStudy: "",
        university: "",
        startDate: "",
        endDate: "",
        currentlyStudying: false,
        description: "",
      },
    ]);
  };

  const updateEducation = (id: number, key: string, value: any) => {
    setEducations((prev) =>
      prev.map((education) =>
        education.id === id ? { ...education, [key]: value } : education
      )
    );
  };

  const deleteEducation = (id: number) => {
    setEducations((prev) => prev.filter((education) => education.id !== id));
  };

  const [languages, setLanguages] = useState([
    { id: 1, name: "", proficiency: "" },
  ]);

  const addLanguage = () => {
    setLanguages((prev) => [
      ...prev,
      { id: prev.length + 1, name: "", proficiency: "" },
    ]);
  };

  const updateLanguage = (id: number, key: string, value: string) => {
    setLanguages((prev) =>
      prev.map((language) =>
        language.id === id ? { ...language, [key]: value } : language
      )
    );
  };

  const deleteLanguage = (id: number) => {
    setLanguages((prev) => prev.filter((language) => language.id !== id));
  };

  const [sectionsOrder, setSectionsOrder] = useState([
    "personalInfo",
    "skills",
    "employments",
    "certificates",
    "educations",
    "languages",
  ]);

  const sections = [
    {
      id: "personalInfo",
      title: "Personal Details",
      content: (
        <PersonalInformation
          personalInfo={personalInfo}
          handleInputChange={handleInputChange}
        />
      ),
      state: personalInfo,
      isDraggable: false,
    },
    {
      id: "skills",
      title: "Technical Skills",
      content: (
        <SkillsSection
          skills={skills}
          setSkills={setSkills}
          addSkill={addSkill}
          updateSkill={updateSkill}
          deleteSkill={deleteSkill}
        />
      ),
      state: skills,
      isDraggable: true,
    },
    {
      id: "employments",
      title: "Employments",
      content: (
        <EmploymentSection
          employments={employments}
          setEmployments={setEmployments}
          addEmployment={addEmployment}
          updateEmployment={updateEmployment}
          deleteEmployment={deleteEmployment}
        />
      ),
      state: employments,
      isDraggable: true,
    },
    {
      id: "certificates",
      title: "Certificates",
      content: (
        <CertificatesSection
          certificates={certificates}
          setCertificates={setCertificates}
          addCertificate={addCertificate}
          updateCertificate={updateCertificate}
          deleteCertificate={deleteCertificate}
        />
      ),
      state: certificates,
      isDraggable: true,
    },
    {
      id: "educations",
      title: "Educations",
      content: (
        <EducationSection
          educations={educations}
          setEducations={setEducations}
          addEducation={addEducation}
          updateEducation={updateEducation}
          deleteEducation={deleteEducation}
        />
      ),
      state: educations,
      isDraggable: true,
    },
    {
      id: "languages",
      title: "Languages",
      content: (
        <LanguagesSection
          languages={languages}
          setLanguages={setLanguages}
          addLanguage={addLanguage}
          updateLanguage={updateLanguage}
          deleteLanguage={deleteLanguage}
        />
      ),
      state: languages,
      isDraggable: true,
    },
  ];

  const orderedSections = sectionsOrder.map((id) =>
    sections.find((section) => section.id === id)
  );

  const moveSection = (dragIndex: number, hoverIndex: number) => {
    const updatedOrder = [...sectionsOrder];
    const [movedSection] = updatedOrder.splice(dragIndex, 1);
    updatedOrder.splice(hoverIndex, 0, movedSection);
    setSectionsOrder(updatedOrder);
  };

  return (
    <div className="grid grid-cols-[auto_1fr] h-screen">
      <Navbar />

      <div className="grid grid-cols-2 gap-4 overflow-auto">
        {/* Draggable Sections */}
        <div className="col-span-1 space-y-4 overflow-auto">
          {orderedSections.map((section, index) => (
            <div key={section?.id} className="border-t p-8">
              <DraggableSection
                id={section?.id ?? ""}
                index={index}
                moveSection={moveSection}
                isDraggable={section?.isDraggable ?? false}
              >
                <div className="flex items-center mb-4">
                  {section?.isDraggable && <DragHandle />}
                  <h2 className="font-bold">{section?.title}</h2>
                </div>

                <div className="ml-5">{section?.content}</div>
              </DraggableSection>
            </div>
          ))}
        </div>

        {/* A4 Preview */}
        <div className="col-span-1 flex flex-col justify-center overflow-auto bg-gray-100 px-4">
          <Preview sections={orderedSections} />
        </div>
      </div>
    </div>
  );
};

export default App;
