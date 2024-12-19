import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 50px 0;
  background-color: #e6f1f5;
  text-align: center;
`;

const About = () => {
  return (
    <AboutSection>
      <h2>About Us</h2>
      <p>We have been committed to sustainability and quality for over 50 years.</p>
      <div>
        <h3>Our Values</h3>
        <p>Clean water, sustainability, and community.</p>
        <h3>Client Testimonials</h3>
        <p>"The water treatment services we received were excellent!" – Customer A</p>
      </div>
    </AboutSection>
  );
};

export default About;
