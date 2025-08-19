export default function TestimonialSections() {
  const dummyData = [
    {
      nama: "Azusawa Kohane",
      occupation: "Mahasiswa UI",
      img: "https://res.cloudinary.com/duyurqj38/image/upload/v1747655460/munisekai/logo/icon/kohane.webp",
      testi:
        "Setelah ikut kelas ini, profil LinkedIn saya jadi lebih profesional ",
    },
    {
      nama: "Hanasato Minori",
      occupation: "Mahasiswa UGM",
      img: "https://res.cloudinary.com/duyurqj38/image/upload/v1747655460/munisekai/logo/icon/minori.webp",
      testi:
        "Setelah ikut kelas ini, saya menerima 50 lamaran kerja dalam sebulan",
    },
    {
      nama: "Shiraishi An",
      occupation: "Mahasiswa UI",
      img: "https://res.cloudinary.com/duyurqj38/image/upload/v1747655460/munisekai/logo/icon/an.webp",
      testi:
        "Setelah ikut kelas ini, saya mendapatkan pekerjaan di BUMN dengan koneksi",
    },
  ];
  return (
    <div className="size-[90%] max-w-[1280px] mx-auto my-10 flex flex-col justify-center items-start text-black">
        <div className="mx-auto mb-10 max-w-[500px]">
      <h2 className="uppercase text-4xl text-center text-cyan-700 font-semibold font-Archivo mb-2">
        Testimoni
      </h2>
      <p className="text-center  text-neutral-600 font-semibold">Lebih dari 100 peserta yang mengikuti kelas ini memberikan testimoni positif</p>
      </div>
      <div style={{boxShadow:'6px 6px 0px 0px #155dfc,6px 6px 0px 4px #000'}} className="w-full h-full rounded-xl border-4 border-black flex flex-row max-sm:flex-col">
        {dummyData.map((val, _i) => {
          return (
            <div
              key={val.nama}
              className="flex flex-col gap-5 w-full min-h-[200px] p-4 items-center justify-evenly border-r-2 border-r-gray-500 last:border-r-0 max-sm:border-b-2 max-sm:border-b-gray-500 max-sm:border-r-0 max-sm:last:border-b-0"
            >
                <div className="size-fit flex-col flex">
            <p className="text-6xl size-fit h-fit font-Roboto text-blue-600">"</p>
              <h3 className="text-center text-neutral-800">{val.testi}</h3>
              </div>
              <div className="flex gap-3 items-center justify-center">
                <img src={val.img} alt={val.img} className="size-14" />
                <div>
                  <p className="text-neutral-800 font-semibold">{val.nama}</p>
                  <p className="text-neutral-700">{val.occupation}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
