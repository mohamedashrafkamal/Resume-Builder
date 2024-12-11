import { InputWithLabel } from "./ui/inputWithLabel";
import { Button } from "./ui/button";
import { ChevronDown, Trash2, Plus } from "lucide-react";

export const EducationSection = ({
  educations,
  addEducation,
  setEducations,
  updateEducation,
  deleteEducation,
}: any) => {
  // Toggle the expanded state of an education entry
  const toggleEducationExpanded = (id: any) => {
    setEducations(
      educations.map((education: any) =>
        education.id === id
          ? { ...education, expanded: !education.expanded }
          : education
      )
    );
  };

  return (
    <div className="flex flex-col space-y-3">
      <p className="text-sm font-semibold text-gray-500">
        A diverse educational background on your resume underscores the unique
        value and perspective you bring to a position.
      </p>
      {educations.map((education: any) => (
        <div key={education.id} className="p-2 rounded-md">
          {/* Display Education Info */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">
                {education.fieldOfStudy || "Field of Study"}
              </p>
              <p className="text-sm text-gray-600">
                {education.university || "University"}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              {/* Toggle Edit Fields */}
              <button
                onClick={() => toggleEducationExpanded(education.id)}
                className="transform transition-transform duration-200"
                aria-label="Toggle Edit"
              >
                <ChevronDown
                  className={`h-5 w-5 ${
                    education.expanded ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {/* Delete Education */}
              <button
                onClick={() => deleteEducation(education.id)}
                aria-label="Delete Education"
              >
                <Trash2 className="h-5 w-5 text-gray-500 hover:text-gray-700" />
              </button>
            </div>
          </div>

          {/* Edit Fields */}
          {education.expanded && (
            <div className="mt-4 space-y-3">
              <div className="flex space-x-4">
                {/* Field of Study */}
                <InputWithLabel
                  id={`field-of-study-${education.id}`}
                  type="text"
                  value={education.fieldOfStudy}
                  onChange={(e) =>
                    updateEducation(
                      education.id,
                      "fieldOfStudy",
                      e.target.value
                    )
                  }
                  aria-label="Field of Study"
                  placeholder="Field of Study"
                  className="w-full"
                />

                {/* University */}
                <InputWithLabel
                  id={`university-${education.id}`}
                  type="text"
                  value={education.university}
                  onChange={(e) =>
                    updateEducation(education.id, "university", e.target.value)
                  }
                  aria-label="University"
                  placeholder="University"
                  className="w-full"
                />
              </div>

              {/* Start and End Date */}
              <div className="flex space-x-4">
                <InputWithLabel
                  id={`start-date-${education.id}`}
                  type="date"
                  value={education.startDate}
                  onChange={(e) =>
                    updateEducation(education.id, "startDate", e.target.value)
                  }
                  aria-label="Start Date"
                  className="w-full"
                />
                <InputWithLabel
                  id={`end-date-${education.id}`}
                  type="date"
                  value={education.endDate}
                  onChange={(e) =>
                    updateEducation(education.id, "endDate", e.target.value)
                  }
                  aria-label="End Date"
                  className="w-full"
                  disabled={education.currentlyStudying}
                />
              </div>

              {/* Currently Studying Checkbox */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`currently-studying-${education.id}`}
                  checked={education.currentlyStudying}
                  onChange={(e) =>
                    updateEducation(
                      education.id,
                      "currentlyStudying",
                      e.target.checked
                    )
                  }
                  aria-label="Currently Studying Here"
                />
                <label
                  htmlFor={`currently-studying-${education.id}`}
                  className="text-sm"
                >
                  Currently Studying Here
                </label>
              </div>

              {/* Description */}
              <textarea
                id={`description-${education.id}`}
                value={education.description}
                onChange={(e) =>
                  updateEducation(education.id, "description", e.target.value)
                }
                aria-label="Education Description"
                placeholder="Education Description"
                className="w-full p-2 border rounded-md"
              ></textarea>
            </div>
          )}
        </div>
      ))}

      {/* Add New Education Button */}
      <Button onClick={addEducation} className="mt-4 w-fit shadow-none">
        <Plus />
        Add New Education
      </Button>
    </div>
  );
};
