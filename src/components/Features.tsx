import { FaStar } from "react-icons/fa6";
export default function FeaturesSections(){
    const dummyData=[{
        Title:'Optimized LinkedIn Profile',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nam? Aspernatur, nam?',
        col:'#DD6031'
    },
{
        Title:'Job Hunting Strategies',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nam? Aspernatur, nam?',
        col:'#437C90'
    },
{
        Title:'Networking Tips',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nam? Aspernatur, nam?',
        col:'#C3423F'
    }]
    return (
    <div className="size-[90%] mx-auto max-w-[1280px] min-h-screen flex gap-3 flex-wrap items-center justify-evenly my-10">
        <div className="w-full max-w-[400px] h-fit text-black">
        <h2 className="text-center text-4xl font-semibold uppercase mb-6 font-Archivo">Manfaat <span className="text-indigo-700">Kelas</span></h2>
        <p className="text-neutral-800 text-justify tracking-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aperiam temporibus laborum. Aliquid tempora ipsam blanditiis necessitatibus sapiente nemo explicabo dolorem, veritatis minus, reiciendis itaque officia quidem incidunt eligendi unde, accusamus quis fuga quod. Voluptate dignissimos quaerat sint corporis. Magni dolores ipsum velit asperiores officiis tempora soluta iste in enim?</p>
        </div>
        <div style={{boxShadow:'6px 6px 0px 0px #f6e05e,6px 6px 0px 4px #000'}} className="w-full max-w-[400px] p-4 min-h-96 bg-[#ECE4B7] rounded-xl border-4 border-black flex flex-col">
            <div className="bg-amber-500 w-full py-1 px-3 flex justify-center items-center gap-3 rounded-full text-black font-bold">
                <FaStar/>
                <h3>Description</h3>
                <FaStar/>
            </div>
            <div className="flex flex-col gap-3 mt-3">
                {dummyData.map((val,_i)=>{
                    return (
                        <div key={val.Title} className="">
                            <div className="flex items-center gap-3">
                                <h4 style={{backgroundColor:val.col}} className="size-10 rounded-full flex items-center justify-center font-bold text-black border-2 border-black">{_i+1}</h4>
                                <p className="text-black font-semibold">{val.Title}</p>
                            </div>
                            <p className="text-neutral-700 text-justify tracking-tight">{val.desc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
    )
}