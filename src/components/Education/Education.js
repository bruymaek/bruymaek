import React from 'react';

import { Section, SectionText, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';

import { GiGraduateCap, GiOpenBook } from "react-icons/gi";
import { FaMicrosoft, FaNetworkWired, FaProjectDiagram, FaHandsHelping} from "react-icons/fa";

import { Box, Boxes, BoxNum, BoxText, BigBox, IconContainer } from '../Acomplishments/AcomplishmentsStyles';

import { Studies, Bijkomendestudies } from '../../constants/constants';

const Education = () => (    
   <Section>
   <SectionDivider/><br/>
   <SectionTitle>Studies</SectionTitle>
   <Boxes>
       {Studies.map((study, index)=>(  
           <BigBox key={index}>
             <div style={{display: "flex", justifyContent: "center"}}>{study.icon}</div>
             <br/>
             <BoxNum style={{display: "flex", justifyContent: "center"}}>{study.name}</BoxNum>
             <br/>
             <BoxText>{study.education}</BoxText><br/>
            <boxtext>{study.year}</boxtext>
           </BigBox>
         ))}
     </Boxes>  
     <SectionTitle>Gevolgde cursussen</SectionTitle>
     <Boxes>
     {Bijkomendestudies.map((bijkomend, index)=>(  
           <BigBox key={index}>
             <div style={{display: "flex", justifyContent: "center"}}>{bijkomend.icon}</div>
             <br/>
             <BoxNum style={{display: "flex", justifyContent: "center"}}>{bijkomend.name}</BoxNum>
             <br/>
             <BoxText>{bijkomend.education}</BoxText><br/>
            <boxtext>{bijkomend.year}</boxtext>
           </BigBox>
         ))}

     </Boxes>
   </Section>
);
 export default Education;