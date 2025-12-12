import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <section id="hero" className="flex flex-row">
      <div>
        <h1>Discover Timeless Elegance with Geez Watch</h1>
        <p>
          Experience the perfect blend of tradition and innovation with our
          handcrafted timepieces.
        </p>
        {/* <button>Explore</button> */}
      </div>
      <video
        ref={videoRef}
        className="mt-20 "
        src="/videos/hero.mp4"
        autoPlay
        muted
        playsInline
      />
    </section>
  );
};

export default Hero;
