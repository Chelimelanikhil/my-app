import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 50px 0;
  background-color: #f9f9f9;
  text-align: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px;
  width: 300px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Contact = () => {
  return (
    <ContactSection>
      <h2>Contact Us</h2>
      <ContactForm>
        <Input type="text" placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message" rows="5" style={{ width: '300px' }}></textarea>
        <button type="submit">Send Message</button>
      </ContactForm>
      <p>Address: 123 Water Plant Rd, City, Country</p>
      <p>Phone: (123) 456-7890</p>
      <p>Email: info@waterplant.com</p>
    </ContactSection>
  );
};

export default Contact;
