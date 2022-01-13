import React from 'react';
//import { GiNewspaper, GiTennisRacket, GiSoccerKick } from 'react-icons/gi';
import { GiNewspaper, GiTennisRacket, GiSoccerKick } from 'react-icons/gi';
//import * as ReactIconsGI from 'react-icons/gi';

//import { Component } from 'react/cjs/react.production.min';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, BigBox, IconContainer } from './AcomplishmentsStyles';
import { Hobbys } from '../../constants/constants';

const myIcons = ["GiNewspaper", "GiTennisRacket", "GiSoccerKick"];



//const data = [
  //{ number: 20, text: 'Open Source Projects'},
  //{ number: 1000, text: 'Students', },
  //{ number: 1900, text: 'Github Followers', },
  //{ number: 5000, text: 'Github Stars', }
//];



const Acomplishments = () => (
  <Section>
    <SectionTitle>Hobby's</SectionTitle>
{/*     <Boxes>
      {data.map((card, index)=>(
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>*/}
    <Boxes>
      {Hobbys.map((hobby, index)=>(  
        <BigBox key={index}>
          <div style={{display: "flex", justifyContent: "center"}}>{hobby.icon}</div>
          <br/>
          <BoxNum style={{display: "flex", justifyContent: "center"}}>{hobby.name}</BoxNum>
          <br/>
          <BoxText>{hobby.text}</BoxText>

        </BigBox>
      ))}
    </Boxes>

  </Section>
);

export default Acomplishments;
