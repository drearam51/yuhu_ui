import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function GroupAccordion({ group }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg bg-white shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold bg-gray-50 hover:bg-gray-100"
      >
        <span>{group.name}</span>
        <ChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="p-4 space-y-3">
          {group.sections &&
            Object.entries(group.sections).map(([key, items]) => (
              <div key={key} className="border rounded-lg p-2">
                <h4 className="font-medium text-sm capitalize mb-1">
                  {key.replace("_", " ")}
                </h4>
                <ul className="text-xs text-gray-700 space-y-1">
                  {items.map((it, i) => (
                    <li key={i}>• {it}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
