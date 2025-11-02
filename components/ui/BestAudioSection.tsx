import Image from "next/image";

export default function BestAudioSection() {
  return (
    <section className="grid md:grid-cols-2 items-center gap-12">
      {/* Text */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
          BRINGING YOU THE <span className="text-orange-500">BEST</span> AUDIO
          GEAR
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products.
        </p>
      </div>

      {/* Image */}
      <div className="relative w-full h-96">
        <Image
          src="/images/listener.svg"
          alt="Guy listening to music"
          fill
          className="object-cover rounded-lg grayscale"
          priority
        />
      </div>
    </section>
  );
}
