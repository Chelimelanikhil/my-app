import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// Additional Animations
const glowing = keyframes`
  0% {
    text-shadow: 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #00b4d8, 0 0 40px #00b4d8, 0 0 50px #00b4d8;
  }
  50% {
    text-shadow: 0 0 20px #ffffff, 0 0 40px #ffffff, 0 0 60px #00b4d8, 0 0 80px #00b4d8, 0 0 100px #00b4d8;
  }
  100% {
    text-shadow: 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #00b4d8, 0 0 40px #00b4d8, 0 0 50px #00b4d8;
  }
`;

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shake = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const wave = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #0077b6;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-bottom: 3px solid #00b4d8;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px 10px;
  }

  &.scrolled {
    background-color: #005f73;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    border-bottom: 3px solid #00b4d8;
  }
`;

const Logo = styled.h1`
  color: white;
  margin: 0;
  transition: all 0.3s ease;
  animation: ${glowing} 2s infinite alternate;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  cursor: pointer;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;
const NavLinks = styled.div`
  display: flex;
  gap: 15px;
  transition: all 0.3s ease;
  animation: ${fadeUp} 0.5s ease forwards;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #0077b6;
    padding: 15px 0;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    top: 60px; /* Adjust to your needs */
    left: 0;
    z-index: 10; /* Ensure it overlays the other content */
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 15px;
  position: relative;
  transition: all 0.3s ease;
  border-radius: 5px;
  text-transform: uppercase;
  display: inline-block;
  animation: ${shake} 0.6s ease-in-out forwards;

  &:nth-child(even) {
    animation-delay: 0.3s;
  }

  &:hover {
    color: #b0e0e6;
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(1.1) rotate(5deg);
    animation: ${wave} 0.3s ease-in-out forwards;
  }

  &:active {
    background-color: #00b4d8;
    box-shadow: 0 0 15px rgba(0, 180, 216, 0.5);
  }

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, transparent, #00b4d8, transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
    border-radius: 8px;
  }

  &:hover::before {
    opacity: 1;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: white;
    transition: all 0.3s ease;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
    text-align: center;
    width: 100%;
    font-size: 16px;
  }
`;

const MenuToggle = styled.div`
  display: none;
  cursor: pointer;
  color: white;
  font-size: 30px;
  transition: all 0.3s ease;
  animation: ${shake} 0.5s ease-in-out infinite alternate;

  &:hover {
    transform: scale(1.2) rotate(180deg);
  }

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar className={isScrolled ? 'scrolled' : ''}>
      <Logo>Water Plant</Logo>

      <MenuToggle onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </MenuToggle>

      <NavLinks isOpen={isMenuOpen}>
        <NavLink to="/" onClick={() => window.innerWidth <= 768 && toggleMenu()}>Home</NavLink>
        <NavLink to="/about" onClick={() => window.innerWidth <= 768 && toggleMenu()}>About</NavLink>
        <NavLink to="/services" onClick={() => window.innerWidth <= 768 && toggleMenu()}>Services</NavLink>
        <NavLink to="/products" onClick={() => window.innerWidth <= 768 && toggleMenu()}>Products</NavLink>
        <NavLink to="/contact" onClick={() => window.innerWidth <= 768 && toggleMenu()}>Contact</NavLink>
      </NavLinks>
    </Navbar>
  );
};

export default Header;
