import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonial from './components/Testimonials/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero/>
      <div className="container">
        <Title subTitle={"What we Offer"} title={"Our Programs"}></Title>
        <Programs></Programs>
        <About></About>
        <Title title={"Campus Photos"} subTitle={"Gallery"} ></Title>
        <Campus></Campus>
        <Title subTitle={"What Student Says"} title={"Testimonials"} />
        <Testimonial/>
        <Title subTitle={"Get In Touch " }  title={"Contact us"}></Title>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
