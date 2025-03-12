import React from "react";
import img1 from "../assets/WAITING-AREA-1.jpg";
import teamImg from "../assets/team2.jpg"; // Placeholder for team photo
import studioImg from "../assets/studio1.jpg"; // Placeholder for studio photo

const About = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* About the Company Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              className="w-full h-auto max-h-[400px] rounded-lg shadow-lg"
              src={img1}
              alt="Waiting Area"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">About Us</h1>
            <p className="text-xl font-semibold tracking-wide text-gray-600 leading-relaxed">
              Welcome to Younique Beauty, where artistry meets elegance. Our
              team of expert makeup artists, hairstylists, and photographers is
              dedicated to transforming your beauty dreams into reality. Whether
              you're preparing for a wedding, a professional shoot, or a special
              event, we ensure every detail is flawless.
            </p>
            <p className="text-xl font-semibold tracking-wide text-gray-600 mt-4">
              Our passion lies in enhancing natural beauty, creating timeless
              looks, and capturing unforgettable moments. Experience luxury,
              expertise, and unmatched attention to detail—all under one roof.
            </p>
          </div>
        </div>

        {/* Meet the Team Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-semibold text-gray-800">The Team</h2>
            <p className="text-xl font-semibold tracking-wide text-gray-600 mt-4 leading-relaxed">
              Our skilled professionals bring years of expertise in makeup
              artistry, hairstyling, and photography, ensuring every client
              leaves with confidence.
            </p>
          </div>
          <div>
            <img
              className="w-full h-auto max-h-[400px] rounded-lg shadow-lg"
              src={teamImg}
              alt="Our Team"
            />
          </div>
        </div>

        {/* Our Studio Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-semibold text-gray-800">Our Studio</h2>
            <p className="text-xl font-semibold tracking-wide text-gray-600 mt-4 leading-relaxed">
              Step into our state-of-the-art studio located in Bishopsgate,
              designed to offer a relaxing, luxurious experience. From the
              moment you walk in, you’ll be welcomed into an atmosphere of
              elegance, creativity, and professionalism.
            </p>
            <p className="text-xl font-semibold tracking-wide text-gray-600 mt-4">
              Whether you’re here for a makeover, hairstyling, or a professional
              photoshoot, our studio provides the perfect setting to enhance
              your beauty and capture stunning moments.
            </p>
          </div>
          <div>
            <img
              className="w-full h-auto max-h-[400px] rounded-lg shadow-lg"
              src={studioImg}
              alt="Our Studio"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
