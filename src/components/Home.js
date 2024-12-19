import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Global Styles
const PageContainer = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;

const Section = styled.section`
  padding: 60px 20px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: #0077b6;
`;

const Button = styled(Link)`
  background-color: #00b4d8;
  color: white;
  padding: 12px 30px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  display: inline-block;
  margin-top: 20px;

  &:hover {
    background-color: #0077b6;
  }
`;

// Hero Section
const HeroSection = styled(Section)`
  background-color: #0077b6;
  color: white;
`;

const HeroText = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const SubText = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

// About Section
const AboutSection = styled(Section)`
  background-color: #f0f8ff;
`;

const AboutText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

// Services Section
const ServiceSection = styled(Section)`
  background-color: #ffffff;
`;
const ServiceCardContainer = styled.div`
  width: 250px;
  height: 300px;
  margin: 20px;
  perspective: 1500px;
  cursor: pointer;
   border-radius: 10px;
  padding: 20px;
  text-align: center;
  margin:40px;
  
  
  /* Add hover state here instead of on the card */
  &:hover .card-inner {
    transform: rotateY(180deg);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    margin-right:60px;
   
  }
`;

const ServiceCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform-origin: center center;
  /* Add class name for targeting in hover */
  class-name: card-inner;
  

`;

const ServiceCardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Add prefix for better browser support */
  backface-visibility: hidden;
  background-color: #0077b6;
  color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* Ensure content stays within boundaries */
  overflow: hidden;
  /* Add transform-style for nested 3D elements */
  transform-style: preserve-3d;
`;

const ServiceCardBack = styled(ServiceCardFace)`
  background-color: #00b4d8;
  transform: rotateY(180deg);
`;
const ServiceTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 16px;
`;

// Products Section

const ProductSection = styled(Section)`
  background-color: #f0f8ff;
  
  position: relative; /* Added */
`;
const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 100px; /* Increased gap between cards */
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductCardWrapper = styled.div`
  width: 300px;
  position: relative;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    margin-right:40px;
  }
`;

const ProductCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 20px;
  text-align: center;
  cursor: pointer;

  transition: all 0.3s ease;
  will-change: transform;

  ${ProductCardWrapper}:hover & {
    transform: scale(1.15);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    z-index: 10;
  }

  @media (max-width: 768px) {
    ${ProductCardWrapper}:hover & {
      transform: scale(1.05);
    }
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const ProductTitle = styled.h4`
  font-size: 22px;
  margin: 15px 0;
  color: #0077b6;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
`;


// Contact Section
const ContactSection = styled(Section)`
  background-color: #ffffff;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #0077b6;
  border-radius: 5px;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #0077b6;
  border-radius: 5px;
  font-size: 16px;
  min-height: 150px;
`;

const SubmitButton = styled.button`
  background-color: #0077b6;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;

  &:hover {
    background-color: #00b4d8;
  }
`;

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroText data-aos="fade-up">Welcome to Water Plant</HeroText>
        <SubText data-aos="fade-up" data-aos-delay="200">
          Explore our amazing products and services that help you take care of your plants effortlessly.
        </SubText>
        <Button to="/products" data-aos="fade-up" data-aos-delay="400">
          Explore Now
        </Button>
      </HeroSection>

      {/* About Sections*/}
      <AboutSection>
        <SectionTitle data-aos="fade-right">About Us</SectionTitle>
        <AboutText data-aos="fade-left" data-aos-delay="200">
          We are passionate about helping you take care of your plants. Our products are designed with efficiency and sustainability in mind, offering a range of tools and services that cater to both beginners and seasoned plant enthusiasts.
        </AboutText>
      </AboutSection>

      {/* Services Section */}
      <ServiceSection>
        <SectionTitle>Our Services</SectionTitle>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <ServiceCardContainer data-aos="zoom-in" data-aos-delay="300">
            <ServiceCard className="card-inner">
              <ServiceCardFace>
                <ServiceTitle>Plant Care Kits</ServiceTitle>
                <ServiceDescription>Our kits contain all the essentials for plant care, from soil to fertilizers.</ServiceDescription>
              </ServiceCardFace>
              <ServiceCardBack>
                <ServiceTitle>More Info</ServiceTitle>
                <ServiceDescription>Premium quality tools and materials included. Perfect for beginners and experts alike.</ServiceDescription>
              </ServiceCardBack>
            </ServiceCard>
          </ServiceCardContainer>
          <ServiceCardContainer data-aos="zoom-in" data-aos-delay="500">
            <ServiceCard className="card-inner">
              <ServiceCardFace>
                <ServiceTitle>Plant Care Kits</ServiceTitle>
                <ServiceDescription>Our kits contain all the essentials for plant care, from soil to fertilizers.</ServiceDescription>
              </ServiceCardFace>
              <ServiceCardBack>
                <ServiceTitle>More Info</ServiceTitle>
                <ServiceDescription>Premium quality tools and materials included. Perfect for beginners and experts alike.</ServiceDescription>
              </ServiceCardBack>
            </ServiceCard>
          </ServiceCardContainer>
          <ServiceCardContainer data-aos="zoom-in" data-aos-delay="700">
            <ServiceCard className="card-inner">
              <ServiceCardFace>
                <ServiceTitle>Plant Care Kits</ServiceTitle>
                <ServiceDescription>Our kits contain all the essentials for plant care, from soil to fertilizers.</ServiceDescription>
              </ServiceCardFace>
              <ServiceCardBack>
                <ServiceTitle>More Info</ServiceTitle>
                <ServiceDescription>Premium quality tools and materials included. Perfect for beginners and experts alike.</ServiceDescription>
              </ServiceCardBack>
            </ServiceCard>
          </ServiceCardContainer>
          {/* Repeat for other service cards... */}
        </div>
      </ServiceSection>

      {/* Products Section */}
      <ProductSection>
  <SectionTitle data-aos="zoom-in-up">Our Products</SectionTitle>
  <ProductsContainer>
    <ProductCardWrapper data-aos="zoom-in" data-aos-delay="300">
      <ProductCard>
        <ProductImage src="/api/placeholder/300/200" alt="Plant Care Tool Kit" />
        <ProductTitle>Plant Care Tool Kit</ProductTitle>
        <ProductDescription>
          Everything you need to keep your plants healthy and thriving.
        </ProductDescription>
      </ProductCard>
    </ProductCardWrapper>

    <ProductCardWrapper data-aos="zoom-in" data-aos-delay="500">
      <ProductCard>
        <ProductImage src="/api/placeholder/300/200" alt="Premium Planters" />
        <ProductTitle>Premium Planters</ProductTitle>
        <ProductDescription>
          Stylish and durable planters for all your plant needs.
        </ProductDescription>
      </ProductCard>
    </ProductCardWrapper>
  </ProductsContainer>
</ProductSection>

      {/* Contact Section */}
      <ContactSection>
        <SectionTitle data-aos="flip-up">Contact Us</SectionTitle>
        <ContactForm>
          <Input type="text" placeholder="Your Name" required data-aos="fade-up" data-aos-delay="300" />
          <Input type="email" placeholder="Your Email" required data-aos="fade-up" data-aos-delay="500" />
          <Textarea placeholder="Your Message" required data-aos="fade-up" data-aos-delay="700" />
          <SubmitButton type="submit" data-aos="fade-up" data-aos-delay="900">
            Submit
          </SubmitButton>
        </ContactForm>
      </ContactSection>
    </PageContainer>
  );
};

export default HomePage;