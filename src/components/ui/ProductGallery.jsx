'use client';

import Image from 'next/image';

export default function ProductGallery() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-12 bg-white">
      
      {/* Left Side - 2x2 Grid */}
      <div className="w-full md:w-[60%] grid grid-cols-2 gap-6 p-4">
        <div className="bg-gray-100 p-6 flex flex-col items-center justify-center rounded-lg shadow-md">
          <Image src="/placeholder.jpg" alt="V-Groove Blades" width={150} height={150} className="rounded-md"/>
          <p className="mt-4 text-lg font-bold text-gray-800">V-Groove Blades</p>
        </div>
        <div className="bg-gray-100 p-6 flex flex-col items-center justify-center rounded-lg shadow-md">
          <Image src="/placeholder.jpg" alt="CNC Bits" width={150} height={150} className="rounded-md"/>
          <p className="mt-4 text-lg font-bold text-gray-800">CNC Bits</p>
        </div>
        <div className="bg-gray-100 p-6 flex flex-col items-center justify-center rounded-lg shadow-md">
          <Image src="/placeholder.jpg" alt="Power Tools" width={150} height={150} className="rounded-md"/>
          <p className="mt-4 text-lg font-bold text-gray-800">Power Tools</p>
        </div>
        <div className="bg-gray-100 p-6 flex flex-col items-center justify-center rounded-lg shadow-md">
          <Image src="/placeholder.jpg" alt="Wood Cutting Blades" width={150} height={150} className="rounded-md"/>
          <p className="mt-4 text-lg font-bold text-gray-800">Wood Cutting Blades</p>
        </div>
      </div>

      {/* Right Side - Large Image with Background */}
      <div className="w-full md:w-[40%] flex items-center justify-center p-4">
        <div className="w-full h-[500px] bg-cover bg-center rounded-lg shadow-lg"
          style={{ backgroundImage: "url('/background-placeholder.jpg')" }}>
          <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-40 rounded-lg">
            <p className="text-2xl md:text-3xl font-bold text-white">Router Bits</p>
          </div>
        </div>
      </div>

    </section>
  );
}
