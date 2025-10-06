import React from 'react';

const AboutMission = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      {/* OUR MISSION */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-2">
          OUR MISSION
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
        <p className="text-lg leading-relaxed text-justify">
          Back in 2000, keeping in mind to train and educate youngsters, we started our journey.
          When we started DUCAT The IT Training School, our passion was and is to train youngsters
          in job-oriented subdomains in the IT industry to secure a career by offering you the best
          IT Training. We are here to guide you to reach the pinnacle of your career. We are aware
          of the fact that getting a job is the prime motive of students after course completion,
          here at DUCAT we provide 100% Job assistance. Our IT Institute has 10 branches at Delhi NCR,
          with more than 180 courses and skill sets. Our Institute is helping youngsters to be trained
          in job-oriented courses and improve their career.
        </p>
      </section>

      {/* OUR VISION */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-2">
          OUR VISION
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>
            We are thriving to establish ourselves as an education provider that focuses on giving learners
            job-oriented skills.
          </li>
          <li>
            We understand what the monthly paycheck will make you and your family feel.
          </li>
        </ul>
      </section>

      {/* WHAT DUCAT DO */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-2">
          WHAT DUCAT DO
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>
            DUCAT is a Registered IT Training Institute. We train students from both local and PAN India in a
            variety of nationally recognised professional IT courses.
          </li>
          <li>
            With our streamlined and adaptable course delivery model, we ensure that you thoroughly grasp the
            information and develop useful skills in your selected course.
          </li>
          <li>
            When you enrol with us, you will be joining hundreds of other job searchers and IT professionals
            who got employment or promotion after completion of training from us.
          </li>
          <li>
            We offer a customised approach in training to elevate and build your IT skills which makes you stand
            out from the crowd.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AboutMission;
