import { InputWithLabel } from "./ui/inputWithLabel";
import { Button } from "./ui/button";
import { ChevronDown, Trash2, Plus } from "lucide-react";

export const CertificatesSection = ({
  certificates,
  setCertificates,
  addCertificate,
  updateCertificate,
  deleteCertificate,
}: any) => {
  // Toggle the expanded state of a certificate
  const toggleCertificateExpanded = (id: any) => {
    setCertificates(
      certificates.map((certificate: any) =>
        certificate.id === id
          ? { ...certificate, expanded: !certificate.expanded }
          : certificate
      )
    );
  };

  return (
    <div className="flex flex-col space-y-3">
      <p className="text-sm font-semibold text-gray-500">
        List any certificates you have earned that are relevant to the job you
        are applying for.
      </p>
      {certificates.map((certificate: any) => (
        <div key={certificate.id} className="p-2 rounded-md">
          {/* Display Certificate Info */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">
                {certificate.name || "Certificate Name"}
              </p>
              <p className="text-sm text-gray-600">
                {certificate.date || "Completion Date"}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              {/* Toggle Edit Fields */}
              <button
                onClick={() => toggleCertificateExpanded(certificate.id)}
                className="transform transition-transform duration-200"
                aria-label="Toggle Edit"
              >
                <ChevronDown
                  className={`h-5 w-5 ${
                    certificate.expanded ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {/* Delete Certificate */}
              <button
                onClick={() => deleteCertificate(certificate.id)}
                aria-label="Delete Certificate"
              >
                <Trash2 className="h-5 w-5 text-gray-500 hover:text-gray-700" />
              </button>
            </div>
          </div>

          {/* Edit Fields */}
          {certificate.expanded && (
            <div className="mt-4 space-y-3">
              <div className="flex space-x-4">
                {/* Certificate Name */}
                <InputWithLabel
                  id={`certificate-name-${certificate.id}`}
                  type="text"
                  value={certificate.name}
                  onChange={(e) =>
                    updateCertificate(certificate.id, "name", e.target.value)
                  }
                  aria-label="Certificate Name"
                  placeholder="Certificate Name"
                  className="w-full"
                />

                {/* Completion Date */}
                <InputWithLabel
                  id={`certificate-date-${certificate.id}`}
                  type="date"
                  value={certificate.date}
                  onChange={(e) =>
                    updateCertificate(certificate.id, "date", e.target.value)
                  }
                  aria-label="Completion Date"
                  className="w-full"
                />
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Add New Certificate Button */}
      <Button onClick={addCertificate} className="mt-4 w-fit shadow-none">
        <Plus />
        Add New Certificate
      </Button>
    </div>
  );
};
