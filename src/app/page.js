import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-6xl text-center">
      <h1 style={{ fontFamily: "fantasy" }}>Selamat Datang di Website</h1>
      <h2 className="text-4xl mt-4 mb-4" style={{ fontFamily: "fantasy" }}>
        Computer Science B29
      </h2>
      <img src="images/home.jpg" alt="photo" className="w-240 border-4 border-gray-500 rounded-lg"></img>
      
    </div>
  );
}
