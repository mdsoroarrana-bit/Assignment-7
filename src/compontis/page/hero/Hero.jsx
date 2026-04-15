import React from 'react';

const Hero = () => {
    return (
         <div className="container mx-auto">
            <div className="text-center m-16 space-y-4 ">
                <h1 className="text-4xl font-bold text-[#1f2937]">Friends to keep close in your life</h1>
                <p className="text-[#64748B]">Your personal shelf of meaningful connections. Browse, tend, and nurture <br /> the
                    relationships that matter most.</p>
                    <button className="btn text-white  bg-emerald-800">+ Add a Friend</button>
            </div>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-4 w-[80%] mx-auto gap-6">
                <div className="w-40 h-30 bg-gray-100 text-center p-6">
                    <p className="font-bold text-2xl">10</p>
                    <p className="text-[#64748B]">Total Friend</p>
                </div>
                <div className=" w-40 h-30 bg-gray-100 text-center p-6">
                    <p className="font-bold text-2xl">3</p>
                    <p className="text-[#64748B]">On Track</p>
                </div>
                <div className="w-40 h-30 bg-gray-100 text-center p-6">
                    <p className="font-bold text-2xl">6</p>
                    <p className="text-[#64748B]">Need Attention</p>
                </div>
                <div className=" w-40 h-30 bg-gray-100 text-center p-6">
                    <p className="font-bold text-2xl">12</p>
                    <p className="text-[#64748B]">Interactions This Month</p>
                </div>
                
            </div>
        </div>
    );
};

export default Hero;