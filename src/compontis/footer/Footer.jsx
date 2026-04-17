import React from 'react';

const Footer = () => {
    return (
        <div className="container mx-auto mt-16 ">
            <div className="bg-[#244D3F] text-center m-10  pt-8 h-85 space-y-2">
                <img src="https://i.ibb.co.com/v6bX7ZXk/logo-xl.png" alt="footer logo" className="mx-auto pl-2 pr-2" />
                <p className="text-white p-4">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <div className="w-50 mx-auto">
                    <p className=" font-bold text-white m-2">Social Links</p>
                    <div className="flex gap-4 p-4 ">
                        <img src="https://i.ibb.co.com/N6X2S1rk/facebook.png" alt="" />
                        <img src="https://i.ibb.co.com/5WJc4cBZ/instagram.png" alt="" />
                        <img src="https://i.ibb.co.com/k6kmKn1C/twitter.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;