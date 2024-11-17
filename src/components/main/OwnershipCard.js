import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const OwnershipCard = () => {
  const features = [
    "AI scans transactions for risks, explaining suspicious activity for transparency",
    "Seamless 2FA Security with Auto-Reminders for Easy Transaction Approval",
    "Challenge friends to Thai-style paper-rock-scissors"
  ];

  return (
      <div className="pixelCard w-[320px] sm:w-[340px] md:w-[360px] lg:w-[380px] transform transition-transform hover:scale-[1.02]">
        <div className="space-y-4 pb-8 p-8">
          <h2 className="text-black font-londrina font-[1000] text-xl sm:text-xl md:text-[30px] leading-tight sm:leading-relaxed md:leading-[37.86px]">
            Transact with a peace of mind
          </h2>
          <p className="text-black font-londrinaLight text-[12px] sm:text-[16px] md:text-[20px] leading-tight sm:leading-relaxed md:leading-[18.93px]">
            AI That’s Smarter Than Your Last Bad Transaction
          </p>
          <div className="flex justify-center">
            <Image
              src="/Brain.png"
              alt="Brain"
              width={200}
              height={160}
            />
          </div>
        </div>

        <div className="bg-[#FFFDEA]">
          <div className="space-y-2 p-7">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0" />
                <span className="text-black font-londrinaLight font-[400] text-[12px] sm:text-[16px] md:text-[20px] leading-tight sm:leading-relaxed md:leading-[18.93px]">{feature}</span>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default OwnershipCard;