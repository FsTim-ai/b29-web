"use client";
import { useState } from "react";

export default function Galery(){
    const [activeTab, setActiveTab] = useState("Event");

    const tabs = [ 
        {key: "Event", label:"Event"},
        {key: "Prestasi",  label:"Prestasi"},
        {key: "Kenangan", label: "Kenangan"},
        {key: "Kegiatan", label: "Foto Kegiatan Kelas"}
    ];

    const images = {
        Event: [
            {src: "images/home.jpg", title:"Hari ke-4 FYP"},
            {src: "images/event1.jpg", title:"Hari ke-3 FYP"},
            {src: "images/upacara.jpg", title:"Upacara kemerdekaan ke 80"},
        ],
        Prestasi: [

        ],
        Kenangan:[

        ],
        Kegiatan: [

        ]
    };
    return (
    <div className="min-h-screen px-6 py-12">
      <h1 className="text-6xl text-center mb-8" style={{fontFamily: "fantasy"}}>
        Gallery Angkatan B29
      </h1>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === tab.key
                ? "bg-blue-500 text-black"
                : "bg-gray-200 hover:bg-gray-300 text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {images[activeTab].map((img, idx) => (
          <div
            key={idx}
            className="rounded-xl overflow-hidden shadow-md bg-white"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-48 object-cover"
            />
            <p className="text-center py-3 font-medium text-black">{img.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}