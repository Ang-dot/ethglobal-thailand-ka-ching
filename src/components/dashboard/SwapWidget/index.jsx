'use client'

import React from 'react';
import SwapIcon from '@/public/images/common/swap.svg'
import { useRouter } from 'next/router'
import { AppRoutes } from '@/config/routes';
import Link from 'next/link'

const SwapWidget = () => {
  const router = useRouter()

  return (
    <div className="pixel-card hover:scale-[1.02] bg-white">
      <div className="relative w-full max-w-2xl p-8">
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-bl from-yellow-100/50 to-transparent" />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='80' height='80' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 80 0 L 80 80 M 0 0 L 0 80 M 40 0 L 40 80 M 0 80 L 80 80 M 0 0 L 80 0 M 0 40 L 80 40' fill='none' stroke='%23e2e4e9' opacity='0.6' stroke-width='1.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='80' height='80' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10">
          <h3 className="text-[#292F32] font-londrina text-[16px] sm:text-[18px] md:text-[20px] lg:text-[32px] mb-2">
            Introducing native swaps
          </h3>
          <p className="text-[#1F1D29] text-[12px] sm:text-[14px] md:text-[16px] mb-4">
            Experience our native swaps, powered by CoW Protocol! Trade seamlessly and efficiently with decoded
            transactions that are easy to understand
          </p>
          <div className="flex gap-4">
            <Link href={{ pathname: AppRoutes.swap, query: router.query }} passHref type="button">
              <button className="flex pixel-btn text-black justify-center items-center">
                <SwapIcon className="mr-1" />
                Try it now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SwapWidget;
