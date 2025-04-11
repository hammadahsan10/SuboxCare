import React from 'react';
import imagee from '../assets/images/pic4.png';

function Partners() {
    return (
        <div className="relative w-full">
            <div
                className="w-full min-h-[350px] bg-cover bg-center"
                style={{
                    backgroundImage: `url(${imagee})`
                }}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-8 bg-black/50">
                    <p className="text-center max-w-4xl mx-auto text-white mb-8">
                        We have partnered with Rx Outreach to offer affordable mail-order medications. Get your chronic illness medication delivered directly to your door, often within 24 hours. Experience affordable and reliable care now!
                    </p>

                    <button className="bg-emerald-400 text-white px-8 py-3 rounded-lg hover:bg-emerald-500 transition-colors">
                        Download The App → 
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Partners;
