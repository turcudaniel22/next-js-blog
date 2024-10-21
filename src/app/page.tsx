import Link from "next/link";
import Image from "next/image";
import { Head } from "next/document";
import ImageSlider from "./ui/components/image-slider";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 relative">
        <div className="bg-white border-2 border-purple-100 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Section: Text and Button */}
          <div className="flex flex-col justify-center md:pr-8">
            <h1 className="text-4xl text-purple-700 font-bold mb-4">
              Velkommen
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Jeg er Daniel, en lidenskapelig og erfaren programmerer med 8 års
              erfaring innen programvareutvikling. Jeg brenner for teknologi og
              streber etter å skape innovative løsninger som driver vekst og
              forbedring. Jeg er kjent for min evne til å jobbe både selvstendig
              og i team, og jeg bringer alltid en positiv og løsningsorientert
              holdning til arbeidsplassen.
            </p>
            <Link
              href="/blog/posts"
              className="inline-block outline outline-1 outline-offset-2 border-purple-700 text-purple-700 hover:text-white py-2 px-4 rounded hover:bg-purple-800 md:w-auto"
            >
              Gå til blogg
            </Link>
            <div className=" mt-5 pt-4  flex justify-center">
              <ImageSlider />
            </div>
          </div>
          {/* Right Section: Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/pix.png"
              alt="Example Image"
              width={500}
              height={500}
              className="rounded-lg shadow-md z-10"
            />
          </div>
        </div>
      </div>
      {/* Background Section */}
      <div className="bg-purple-800 hidden md:block absolute top-0 right-0 bottom-0 left-2/3 z-0"></div>
    </main>
  );
}
