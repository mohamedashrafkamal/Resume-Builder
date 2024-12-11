import { InputWithLabel } from "./ui/inputWithLabel";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { ChevronDown, Trash2, Plus } from "lucide-react";

export const SkillsSection = ({
  skills,
  setSkills,
  addSkill,
  updateSkill,
  deleteSkill,
}: any) => {
  // Function to toggle the expanded state of a skill
  const toggleSkillExpanded = (id: any) => {
    setSkills(
      skills.map((skill: any) =>
        skill.id === id ? { ...skill, expanded: !skill.expanded } : skill
      )
    );
  };

  return (
    <div className="flex flex-col space-y-3">
      <p className="text-sm font-semibold text-gray-500">
        Select 5 relevant skills that align with the job requirements. Ensure
        they resonate with the keys skills highlighted in the job post,
        especially for online applications.
      </p>
      {skills.map((skill: any) => (
        <div key={skill.id} className="p-2 rounded-md">
          {/* Display Skill Name and Level */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">{skill.name || "Skill Name"}</p>
              <p className="text-sm text-gray-600">
                {skill.level || "Skill Level"}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              {/* Toggle Edit Fields */}
              <button
                onClick={() => toggleSkillExpanded(skill.id)}
                className="transform transition-transform duration-200"
                aria-label="Toggle Edit"
              >
                <ChevronDown
                  className={`h-5 w-5 ${
                    skill.expanded ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {/* Delete Skill */}
              <button
                onClick={() => deleteSkill(skill.id)}
                aria-label="Delete Skill"
              >
                <Trash2 className="h-5 w-5 text-gray-500 hover:text-gray-700" />
              </button>
            </div>
          </div>

          {/* Edit Fields */}
          {skill.expanded && (
            <div className="mt-4">
              <div className="flex justify-stretch space-x-4">
                {/* Skill Name Input */}
                <InputWithLabel
                  id={`skill-name-${skill.id}`}
                  type="text"
                  value={skill.name}
                  onChange={(e) =>
                    updateSkill(skill.id, "name", e.target.value)
                  }
                  aria-label="Skill Name"
                  placeholder="Skill Name"
                  className="w-full"
                />

                {/* Skill Level Select */}
                <div className="w-full">
                  <Select
                    value={skill.level}
                    onValueChange={(value) =>
                      updateSkill(skill.id, "level", value)
                    }
                  >
                    <SelectTrigger
                      id={`skill-level-${skill.id}`}
                      aria-label="Skill Level"
                    >
                      <SelectValue placeholder="Select Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Skill Levels</SelectLabel>
                        <SelectItem value="Beginner">Beginner</SelectItem>
                        <SelectItem value="Intermediate">
                          Intermediate
                        </SelectItem>
                        <SelectItem value="Advanced">Advanced</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      {/* Add New Skill Button */}
      <Button onClick={addSkill} className="mt-4 w-fit shadow-none">
        <Plus />
        Add New Skill
      </Button>
    </div>
  );
};
