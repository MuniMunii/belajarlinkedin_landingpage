export default function HeroSections(){
    return (
    <div style={{
    backgroundImage:
      "url('https://res.cloudinary.com/duyurqj38/image/upload/v1755600405/charlesdeluvio-Lks7vei-eAg-unsplash_yqzthg.jpg')",
  }} className="size-full min-h-screen relative overflow-hidden flex justify-center items-center bg-cover bg-center px-4">
        <div className="absolute top-0 left-0 size-full min-h-screen bg-gradient-to-tr from-violet-950/70 to-blue-950/70"></div>
        <div className='relative z-10 text-center flex flex-col gap-4 items-center justify-center'>
        <h1 className='max-sm:text-4xl text-5xl uppercase font-semibold max-w-[600px] text-center text-white'>Unlock Your Career Potential with LinkedIn</h1>
        <h2 className='text-2xl text-neutral-300 italic'>Belajar personal branding & networking agar lebih cepat dapat kerja.</h2>
        <button type="button" className='bg-blue-500 rounded-full py-2 px-7 font-semibold text-xl cursor-pointer duration-200 hover:scale-110'>Join the Class</button>
        </div>
    </div>)
}