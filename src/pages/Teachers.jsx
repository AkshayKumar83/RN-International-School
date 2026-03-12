function Teachers() {

  const teachers = [
    {
      name: "Ravi Sharma",
      subject: "Mathematics",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Priya Singh",
      subject: "English",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Amit Kumar",
      subject: "Science",
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    }
  ];

  return (

    <section style={{padding:"80px"}}>

      <h2 style={{textAlign:"center"}}>Our Teachers</h2>

      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(3,1fr)",
          gap:"30px",
          marginTop:"40px"
        }}
      >

        {teachers.map((teacher,index)=>(
          <div
            key={index}
            style={{
              background:"white",
              padding:"30px",
              textAlign:"center",
              borderRadius:"10px",
              boxShadow:"0 2px 10px rgba(0,0,0,0.1)"
            }}
          >

            <img
              src={teacher.image}
              style={{
                width:"120px",
                height:"120px",
                borderRadius:"50%",
                objectFit:"cover"
              }}
            />

            <h3 style={{marginTop:"15px"}}>{teacher.name}</h3>

            <p>{teacher.subject}</p>

          </div>
        ))}

      </div>

    </section>

  )

}

export default Teachers