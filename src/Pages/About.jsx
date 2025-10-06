import React from 'react'
import TestimonialsSection from '../Components/AboutTestimonial'
import AboutContact from '../Components/AboutContact'
import SuccessSection from '../Components/AboutSuccess'
import TopCourses from '../Components/HomeTopCourse'
import AlumniPlaced from '../Components/AboutAlumni'
import AboutMission from '../Components/AboutMission'
import AboutHero from '../Components/AboutHero'

const About = () => {
  return (
    <div>
        <AboutHero/>
        <AboutMission/>
        <AlumniPlaced/>
        <TopCourses/>
        <SuccessSection/>
        <AboutContact/>
        <TestimonialsSection/>
    </div>
  )
}

export default About
