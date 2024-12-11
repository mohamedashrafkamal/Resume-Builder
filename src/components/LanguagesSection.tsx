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

export const LanguagesSection = ({
  languages,
  setLanguages,
  addLanguage,
  updateLanguage,
  deleteLanguage,
}: any) => {
  // Toggle the expanded state of a language
  const toggleLanguageExpanded = (id: any) => {
    setLanguages(
      languages.map((language: any) =>
        language.id === id
          ? { ...language, expanded: !language.expanded }
          : language
      )
    );
  };

  return (
    <div className="flex flex-col space-y-3">
      <p className="text-sm font-semibold text-gray-500">
        List the languages you are proficient in, both spoken and written.
        Highlight any languages that are particularly relevant to the job you
        are applying for.
      </p>
      {languages.map((language: any) => (
        <div key={language.id} className="p-2 rounded-md">
          {/* Display Language Info */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">
                {language.name || "Language Name"}
              </p>
              <p className="text-sm text-gray-600">
                {language.proficiency || "Proficiency Level"}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              {/* Toggle Edit Fields */}
              <button
                onClick={() => toggleLanguageExpanded(language.id)}
                className="transform transition-transform duration-200"
                aria-label="Toggle Edit"
              >
                <ChevronDown
                  className={`h-5 w-5 ${
                    language.expanded ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {/* Delete Language */}
              <button
                onClick={() => deleteLanguage(language.id)}
                aria-label="Delete Language"
              >
                <Trash2 className="h-5 w-5 text-gray-500 hover:text-gray-700" />
              </button>
            </div>
          </div>

          {/* Edit Fields */}
          {language.expanded && (
            <div className="mt-4 space-y-3">
              <div className="flex space-x-4">
                {/* Language Name */}
                <InputWithLabel
                  id={`language-name-${language.id}`}
                  type="text"
                  value={language.name}
                  onChange={(e) =>
                    updateLanguage(language.id, "name", e.target.value)
                  }
                  aria-label="Language Name"
                  placeholder="Language Name"
                  className="w-full"
                />

                {/* Proficiency Level */}
                <div className="w-full">
                  <Select
                    value={language.proficiency}
                    onValueChange={(value) =>
                      updateLanguage(language.id, "proficiency", value)
                    }
                  >
                    <SelectTrigger
                      id={`language-proficiency-${language.id}`}
                      aria-label="Proficiency Level"
                    >
                      <SelectValue placeholder="Select Proficiency Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Proficiency Levels</SelectLabel>
                        <SelectItem value="Beginner">Beginner</SelectItem>
                        <SelectItem value="Intermediate">
                          Intermediate
                        </SelectItem>
                        <SelectItem value="Advanced">Advanced</SelectItem>
                        <SelectItem value="Fluent">Fluent</SelectItem>
                        <SelectItem value="Native">Native</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Add New Language Button */}
      <Button onClick={addLanguage} className="mt-4 w-fit shadow-none">
        <Plus />
        Add New Language
      </Button>
    </div>
  );
};
