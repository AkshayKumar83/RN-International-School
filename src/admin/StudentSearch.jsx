import { useState } from "react";
import { User } from "lucide-react";

const studentsData = [
  { _id: "1", name: "Rahul", fatherName: "Amit", class: "10" },
  { _id: "2", name: "Rahul", fatherName: "Suresh", class: "8" },
  { _id: "3", name: "Aman", fatherName: "Rakesh", class: "7" }
];

function StudentSearch({ form, setForm }) {
  const [search, setSearch] = useState("");
  const [showList, setShowList] = useState(false);

  const filtered = studentsData.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const selectStudent = (s) => {
    setForm({
      ...form,
      studentId: s._id,
      studentName: s.name,
      fatherName: s.fatherName,
      class: s.class
    });

    setSearch(`${s.name} (${s.fatherName})`);
    setShowList(false);
  };

  return (
    <div className="relative md:col-span-2">
      <label className="text-sm font-medium mb-1 block">
        Student Search
      </label>

      <div className="relative">
        <User className="absolute left-3 top-3 text-gray-400" />

        <input
          value={search}
          placeholder="Search student..."
          className="w-full border pl-10 p-3 rounded-lg"
          onChange={(e) => {
            setSearch(e.target.value);
            setShowList(true);
          }}
        />
      </div>

      {showList && search && (
        <div className="absolute w-full bg-white border mt-1 rounded-lg shadow max-h-40 overflow-y-auto z-50">
          {filtered.length > 0 ? (
            filtered.map((s) => (
              <div
                key={s._id}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => selectStudent(s)}
              >
                {s.name} ({s.fatherName}) - Class {s.class}
              </div>
            ))
          ) : (
            <p className="p-2 text-gray-500">No student found</p>
          )}
        </div>
      )}
    </div>
  );
}

export default StudentSearch;