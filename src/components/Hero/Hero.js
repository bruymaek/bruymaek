import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = (props) => (
 <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welkom op mijn <br/>  
      persoonlijk portfolio
    </SectionTitle>
    <SectionText>
      Mijn naam is Bart Ruymaekers. <br/>
      Sinds 1998 professionele IT analist en specialist.<br/><br/>
      En heel belangrijk...op zoek naar een nieuwe uitdaging.
    </SectionText>
     <Button onClick={() => window.location = 'https://google.be'}>
      Learn more
    </Button>
  </LeftSection>
 </Section>
);

export default Hero;