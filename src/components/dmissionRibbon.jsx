function AdmissionRibbon() {
  return (
    <a
      href="/admissions"
      className="fixed top-0 right-0 z-50"
    >
      <div
        className="bg-yellow-400 text-blue-900 font-bold 
        py-2 px-10 shadow-lg 
        transform rotate-45 
        translate-x-10 translate-y-7"
      >
        Admissions Open
      </div>
    </a>
  );
}


export default AdmissionRibbon;