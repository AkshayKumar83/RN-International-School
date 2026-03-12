function Classes() {

  const classes = [
    "Nursery",
    "LKG",
    "UKG",
    "Class 1",
    "Class 2",
    "Class 3",
    "Class 4",
    "Class 5"
  ];

  return (

    <section style={{padding:"80px",background:"#f5f5f5"}}>

      <h2 style={{textAlign:"center"}}>Our Classes</h2>

      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(4,1fr)",
          gap:"20px",
          marginTop:"40px"
        }}
      >

        {classes.map((item,index)=>(
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
            <h3>{item}</h3>
          </div>
        ))}

      </div>

    </section>

  )

}

export default Classes