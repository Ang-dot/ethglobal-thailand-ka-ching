import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const WelcomeIntro = () => {
  const features = [
    "AI scans transactions for risks, explaining suspicious activity for transparency",
    "Seamless 2FA Security with Auto-Reminders for Easy Transaction Approval",
    "Challenge friends to Thai-style paper-rock-scissors"
  ];

  return (
    <div className="pixel-card hover:scale-[1.02] h-full">
      <div className="space-y-4 p-4 lg:p-8 flex flex-col items-center">
        <h2
          className="text-black font-londrina font-[1000] text-xl sm:text-xl md:text-[30px] leading-tight sm:leading-relaxed md:leading-[37.86px] text-center">
          Transact with a peace of mind
        </h2>
        <p
          className="text-black font-londrina-light text-[12px] sm:text-[16px] md:text-[20px] leading-tight sm:leading-relaxed md:leading-[18.93px] text-center">
          AI That’s Smarter Than Your Last Bad Transaction
        </p>
        <div className="flex justify-center items-center h-full">
          <Image
            src="/images/common/brain.png"
            alt="brain"
            width={200}
            height={160}
            className="w-[120px] h-[96px] lg:w-[200px] lg:h-[160px]"
          />
        </div>
      </div>

      <div className="pt-2 lg:pt-4 bg-[#FFFDEA]">
        <div className="space-y-2 p-7">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0" />
              <span
                className="text-black font-londrina-light font-[400] text-[12px] sm:text-[16px] md:text-[20px] leading-tight sm:leading-relaxed md:leading-[18.93px]">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomeIntro;
