"use client";

import React from 'react';

export default function EarlClydePortfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-black leading-none tracking-tighter">
            WORLD OF
          </h1>
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-black leading-none tracking-tighter -mt-4">
            EARL CLYDE
          </h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
        <div className="text-center relative z-10">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-8">
            introduction
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black leading-none tracking-tight transform rotate-12 text-white">
            CLYDE
          </h3>
        </div>
      </section>

      {/* Personal Skills Section */}
      <section className="h-screen flex items-center justify-start bg-gray-200 pl-8 md:pl-16 lg:pl-24">
        <div>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-black leading-none tracking-tight transform -rotate-90 origin-left">
            PERSONAL SKILLS
          </h2>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight">
            work experience
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