import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SloganRed, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Telefoon</LinkTitle>
          <LinkItem href="tel: +32 485 xxx xyz">+32 / 485 xxx xyz</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:bruymaek@outlook.com">bruymaek@outlook.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Adres</LinkTitle>
          <LinkItem href="http://maps.google.com/?q=Balen, België">Balen</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Ik ben een flexibele, loyale persoon met een brede en ruime ervaring in de IT branche. </Slogan>
          <Slogan>Mijn karakter kenmerkt zich het best als dienend leiderschap: ik zet anderen in hun kracht om zo samen goed te presteren.</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/bruymaek">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/bart-ruymaekers-97ba9b3/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
