"use client";

import React from 'react';

export default function EarlClydePortfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="h-screen flex items-start justify-start bg-white pt-8 pb-8 pr-8 md:pt-16 md:pb-16 md:pr-16 lg:pt-24 lg:pb-24 lg:pr-24">
        <div className="w-full pt-8 md:pt-16 lg:pt-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-none tracking-tighter mb-8 relative" style={{ top: "70px" }}>
            WORLD OF
          </h1>
          <div className="flex justify-between items-start">
            <h1 className="text-9xl md:text-[10rem] lg:text-[14rem] xl:text-[16rem] font-black text-black leading-none tracking-tighter relative" 
            style={{ left: "-18px",
              transform: "scaleY(1.7)",
              transformOrigin: "top"
            }}>
              EARL
            </h1>
            <h1 className="text-9xl md:text-[10rem] lg:text-[14rem] xl:text-[16rem] font-black text-black leading-none tracking-tighter relative" style={{ left: "-18px",
              transform: "scaleY(1.7)",
              transformOrigin: "top"
            }}>
              CLYDE
            </h1>
          </div>
        </div>
      </section>


      {/* Introduction Section */}
      <section className="h-screen flex items-start justify-start bg-white pt-8 pb-8 pr-8 md:pt-16 md:pb-16 md:pr-16 lg:pt-24 lg:pb-24 lg:pr-24">
        <div className="w-full text-6xl md:text-[11rem] lg:text-[15rem] pt-8 md:pt-16 lg:pt-24">
          <h2 className="font-black text-black leading-none tracking-tight relative" style={{ 
            top: "350px",
            transform: "scaleY(1.7)",
            transformOrigin: "bottom"
          }}>
            introduc
          </h2>
        </div>
        <div className="w-full text-6xl md:text-[11rem] lg:text-[15rem] pt-8 md:pt-16 lg:pt-24">
          <h2 className="font-black text-black leading-none tracking-tight relative" style={{ 
            top: "435px",
            transform: "scaleY(1.7)",
            transformOrigin: "bottom"
          }}>
            tion
          </h2>
        </div>
      </section>

      {/* Education Section */}
      <section className="h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
        <div className="w-full text-6xl md:text-[11rem] lg:text-[15rem] pt-8 md:pt-16 lg:pt-24">
          <h2 className="font-black text-white leading-none tracking-tight relative" style={{ 
            left: "1050px",
            bottom: "400px",
            transform: "scaleY(1.7)",
            transformOrigin: "bottom"
          }}>
            tion
          </h2>
        </div>
        <div className="text-center bg-black text-white absolute" style={{
          left: "450px",
          bottom: "350px",
        }}>
          <h3 className="text-6xl md:text-[11rem] lg:text-[15rem] font-black leading-none tracking-tight text-white" style={{ 
            transform: "rotate(-30deg) scaleY(1.7)",
            transformOrigin: "bottom",
          }}>
              educa
          </h3>
        </div>
      </section>
      

        
      

      {/* Personal Skills Section */}
      <section className="h-screen flex items-center justify-start bg-[#D9D9D9] pl-8 md:pl-16 lg:pl-24">
        <div>
          <h2 className="text-6xl md:text-7xl lg:text-8xl text-black font-black text-white leading-none tracking-tight transform -rotate-90 origin-left relative" 
            style={{
            left: "-290px",
            bottom: "45px",
            transform: "scaleY(1.9)",
            transformOrigin: "bottom"
          }}> 
            personal skills
          </h2>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="h-screen flex items-center justify-center bg-[#232323] text-white">
        <div className="text-center">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight relative" style={{
            right: "-480px",
            bottom: "250px",
            transform: "scaleY(1.9)",
            transformOrigin: "bottom"
          }}> 
            experience
          </h2>
        </div>
      </section>

      {/* Works Through Life Section */}
      <section className="h-screen flex items-center justify-start bg-white pl-8 md:pl-16 lg:pl-24">
        <div>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-black leading-none tracking-tight">
            works
          </h2>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-black leading-none tracking-tight">
            through
          </h2>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-black leading-none tracking-tight">
            life
          </h2>
        </div>
      </section>

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-4">
          {[0, 1, 2, 3, 4].map((index) => (
            <button
              key={index}
              className="w-3 h-3 rounded-full bg-gray-400 hover:bg-gray-600 transition-colors duration-200"
              onClick={() => {
                const sections = document.querySelectorAll('section');
                sections[index]?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}