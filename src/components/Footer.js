import styled from 'styled-components';

const FooterSection = styled.footer`
  background-color: #0077b6;
  color: white;
  text-align: center;
  padding: 20px;
`;

const Footer = () => {
  return (
    <FooterSection>
      <p>&copy; 2024 Water Plant. All rights reserved.</p>
    </FooterSection>
  );
};

export default Footer;
