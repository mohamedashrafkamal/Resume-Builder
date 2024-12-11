import { InputWithLabel } from "./ui/inputWithLabel";
import { Button } from "./ui/button";
import { ChevronDown, Trash2, Plus } from "lucide-react";

export const EmploymentSection = ({
  employments,
  setEmployments,
  addEmployment,
  updateEmployment,
  deleteEmployment,
}: any) => {
  // Toggle the expanded state of an employment entry
  const toggleEmploymentExpanded = (id: any) => {
    setEmployments(
      employments.map((employment: any) =>
        employment.id === id
          ? { ...employment, expanded: !employment.expanded }
          : employment
      )
    );
  };

  return (
    <div className="flex flex-col space-y-3">
      <p className="text-sm font-semibold text-gray-500">
        A void work history on your resume highlights the distinct expertise and
        insights you offer to a rate
      </p>
      {employments.map((employment: any) => (
        <div key={employment.id} className="p-2 rounded-md">
          {/* Display Employment Info */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">
                {employment.jobTitle || "Job Title"}
              </p>
              <p className="text-sm text-gray-600">
                {employment.company || "Company"}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              {/* Toggle Edit Fields */}
              <button
                onClick={() => toggleEmploymentExpanded(employment.id)}
                className="transform transition-transform duration-200"
                aria-label="Toggle Edit"
              >
                <ChevronDown
                  className={`h-5 w-5 ${
                    employment.expanded ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {/* Delete Employment */}
              <button
                onClick={() => deleteEmployment(employment.id)}
                aria-label="Delete Employment"
              >
                <Trash2 className="h-5 w-5 text-gray-500 hover:text-gray-700" />
              </button>
            </div>
          </div>

          {/* Edit Fields */}
          {employment.expanded && (
            <div className="mt-4 space-y-3">
              {/* Job Title */}
              <div className="flex space-x-4">
                <InputWithLabel
                  id={`job-title-${employment.id}`}
                  type="text"
                  value={employment.jobTitle}
                  onChange={(e) =>
                    updateEmployment(employment.id, "jobTitle", e.target.value)
                  }
                  aria-label="Job Title"
                  placeholder="Job Title"
                  className="w-full"
                />

                {/* Company */}
                <InputWithLabel
                  id={`company-${employment.id}`}
                  type="text"
                  value={employment.company}
                  onChange={(e) =>
                    updateEmployment(employment.id, "company", e.target.value)
                  }
                  aria-label="Company"
                  placeholder="Company"
                  className="w-full"
                />
              </div>

              {/* Start and End Date */}
              <div className="flex space-x-4">
                <InputWithLabel
                  id={`start-date-${employment.id}`}
                  type="date"
                  value={employment.startDate}
                  onChange={(e) =>
                    updateEmployment(employment.id, "startDate", e.target.value)
                  }
                  aria-label="Start Date"
                  className="w-full"
                />
                <InputWithLabel
                  id={`end-date-${employment.id}`}
                  type="date"
                  value={employment.endDate}
                  onChange={(e) =>
                    updateEmployment(employment.id, "endDate", e.target.value)
                  }
                  aria-label="End Date"
                  className="w-full"
                  disabled={employment.currentlyWorking}
                />
              </div>

              {/* Currently Working Checkbox */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`currently-working-${employment.id}`}
                  checked={employment.currentlyWorking}
                  onChange={(e) =>
                    updateEmployment(
                      employment.id,
                      "currentlyWorking",
                      e.target.checked
                    )
                  }
                  aria-label="Currently Working Here"
                />
                <label
                  htmlFor={`currently-working-${employment.id}`}
                  className="text-sm"
                >
                  Currently Working Here
                </label>
              </div>

              {/* Description */}
              <textarea
                id={`description-${employment.id}`}
                value={employment.description}
                onChange={(e) =>
                  updateEmployment(employment.id, "description", e.target.value)
                }
                aria-label="Job Description"
                placeholder="Job Description"
                className="w-full p-2 border rounded-md"
              ></textarea>
            </div>
          )}
        </div>
      ))}

      {/* Add New Employment Button */}
      <Button onClick={addEmployment} className="mt-4 w-fit shadow-none">
        <Plus />
        Add New Employment
      </Button>
    </div>
  );
};
