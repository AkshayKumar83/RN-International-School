// function Gallery() {

//   const images = [
//     "https://images.unsplash.com/photo-1588072432836-e10032774350",
//     "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
//     "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
//     "https://images.unsplash.com/photo-1509062522246-3755977927d7",
//     "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
//     "https://images.unsplash.com/photo-1580582932707-520aed937b7b"
//   ];

//   return (

//     <section style={{padding:"80px",background:"#f5f5f5"}}>

//       <h2 style={{textAlign:"center"}}>School Gallery</h2>

//       <div
//         style={{
//           display:"grid",
//           gridTemplateColumns:"repeat(3,1fr)",
//           gap:"20px",
//           marginTop:"40px"
//         }}
//       >

//         {images.map((img,index)=>(
//           <img
//             key={index}
//             src={img}
//             style={{
//               width:"100%",
//               height:"200px",
//               objectFit:"cover",
//               borderRadius:"10px"
//             }}
//           />
//         ))}

//       </div>

//     </section>

//   )

// }

// export default Gallery

import React, { useState } from "react";

const images = [
  {
    src: "https://images.pexels.com/photos/8618019/pexels-photo-8618019.jpeg",
    category: "Campus"
  },
  {
    src: "https://images.pexels.com/photos/5212687/pexels-photo-5212687.jpeg",
    category: "Activities"
  },
  {
    src: "https://images.pexels.com/photos/8422136/pexels-photo-8422136.jpeg",
    category: "Events"
  },
  {
    src: "https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg",
    category: "Campus"
  },
  {
    src: "https://images.pexels.com/photos/8471980/pexels-photo-8471980.jpeg",
    category: "Activities"
  },
  {
    src: "https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg",
    category: "Events"
  }
];

const categories = ["All", "Campus", "Events", "Activities"];

const Gallery = () => {

  const [active, setActive] = useState("All");

  const filteredImages =
    active === "All"
      ? images
      : images.filter((img) => img.category === active);

  return (
    <div>

      {/* HEADER */}

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">

        <div className="container mx-auto px-4">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Photo Gallery
          </h1>

          <p className="text-xl text-gray-100">
            Capturing moments of learning, joy, and achievement
          </p>

        </div>

      </section>


      {/* FILTER BUTTONS */}

      <section className="py-10">

        <div className="container mx-auto px-4 text-center">

          <div className="flex flex-wrap justify-center gap-4">

            {categories.map((cat) => (

              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-lg font-semibold transition
                ${
                  active === cat
                    ? "bg-blue-700 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white"
                }`}
              >
                {cat}
              </button>

            ))}

          </div>

        </div>

      </section>


      {/* IMAGE GRID */}

      <section className="pb-16">

        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {filteredImages.map((img, i) => (

              <div
                key={i}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
              >

                <img
                  src={img.src}
                  alt="school gallery"
                  className="w-full h-64 object-cover hover:scale-110 transition duration-500"
                />

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
};

export default Gallery;