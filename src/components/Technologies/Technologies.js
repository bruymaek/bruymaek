import React from 'react';
import { DiFirebase, DiReact, DiWindows } from 'react-icons/di';
import { GiPokerHand } from "react-icons/gi";
import { VscAccount } from "react-icons/vsc";
//import { CgCardSpades } from "react-icons/cg";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>   
    <SectionTitle main>Technologiën en kennis</SectionTitle>
    <SectionText>
      Bart heeft een brede basis van zowel technische als functionele skills wat mij eerder een IT all-rouden maakt.  
      Een enthousiast en energiek consultant die gretig is om bij te leren en die kennis in praktijk om te zetten.
    </SectionText>
    <SectionText>
      Iemand die 'ownership' mbt zijn toegewezen activiteiten en klantgericht werkt.
    </SectionText>
    <SectionText>
      Bart is gewoon om te werken samen met collega's in teamverband...maar funtioneert ook perfect zelfstandig aan projecten.
    </SectionText>
    <SectionText>
      Hij wil zich verder blijven ontwikkelen en up-to-date blijven en wil groeien zowel professioneel vlak als op persoonlijk vlak. 
    </SectionText>
    <SectionTitle>Kennis</SectionTitle>
    <List>
      <ListItem>
        <DiWindows size="3rem"/><br/>
        <ListContainer>
          <ListTitle>Development & technologies</ListTitle><br/>
          <ListParagraph>
            C# | Visual Basic<br/>
            (Unix) ObjectStar | (Telcordia) IN<br/>
            Excel | Word | MS Access | ...
        </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/><br/>
        <ListContainer>
          <ListTitle>Databases</ListTitle><br/>
          <ListParagraph>
            Oracle DB | SQL Server<br/>
            Platform specific DB's
        </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem"/><br/>
        <ListContainer>
          <ListTitle>Interesses</ListTitle><br/>
          <ListParagraph>
            ASP.NET MVC Core<br/>
            Angular<br/>
            React
        </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <VscAccount size="3rem"/><br/>
        <ListContainer>
          <ListTitle>Talen</ListTitle><br/>
          <ListParagraph>
            Nederlands - moedertaal<br/>
            Engels - vloeiend spreken en schrijven<br/>
            Frans - basiskennis<br/>
            Duits - basiskennis
        </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <GiPokerHand size="3rem"/><br/>
        <ListContainer>
          <ListTitle>Troeven</ListTitle><br/>
          <ListParagraph>
            Bart is leergierig en wil graag nieuwe dingen leren<br/>
            Hij werkt nauwkeurig en efficiënt<br/>
            Presteert uitstekend in stresvolle situaties            
        </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
