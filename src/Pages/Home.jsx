import React from 'react'
import LogoCarousel from '../Components/HomeLogo'
import CourseSection from '../Components/HomeCourses'
import Testimonials from '../Components/HomeTestimonial'
import TopCourses from '../Components/HomeTopCourse'
import ContactSection from '../Components/HomeContact'
import TopPrograms from '../Components/HomePrograms'
import FeaturesSection from '../Components/HomeFeature'
import HomeHero from '../Components/HomeHero'
import CoachingSection from '../Components/HomeCta'


const Home = () => {
  return (
    <div>
        <HomeHero/>
        <FeaturesSection/>
        <TopPrograms/>
        <ContactSection/>
        <TopCourses/>
        <Testimonials/>
        <CourseSection/>
        <LogoCarousel/>
        <CoachingSection/>
    </div>
  )
}

export default Home
