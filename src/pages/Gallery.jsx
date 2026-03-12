function Gallery() {

  const images = [
    "https://images.unsplash.com/photo-1588072432836-e10032774350",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b"
  ];

  return (

    <section style={{padding:"80px",background:"#f5f5f5"}}>

      <h2 style={{textAlign:"center"}}>School Gallery</h2>

      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(3,1fr)",
          gap:"20px",
          marginTop:"40px"
        }}
      >

        {images.map((img,index)=>(
          <img
            key={index}
            src={img}
            style={{
              width:"100%",
              height:"200px",
              objectFit:"cover",
              borderRadius:"10px"
            }}
          />
        ))}

      </div>

    </section>

  )

}

export default Gallery