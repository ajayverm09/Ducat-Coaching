import React from 'react'

const AboutHero = () => {
  return (
    <div>
       <div className="relative text-white py-16 md:py-24">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://www.ducatindia.com/static/images/about.png')",
          }}
        >
          {/* Optional dark overlay if image is too bright */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl text-[#F7862F] font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl font-bold mx-auto">
            Our #1 Highest Priority is on Building Your Job Oriented Skills
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutHero
