import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText, SectionSubText } from '../../styles/GlobalComponents';
import { projects, workexperience } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/><br/>
    <SectionTitle>Projecten</SectionTitle>
      <SectionText>Sectoren met enkele jaren ervaring</SectionText>        
        <SectionSubText>- Telecom sector: KPNG - Base (7 jaar)</SectionSubText>
        <SectionSubText>- Pharmaceutische sector: Janssen Pharmaceutica (5 jaar)</SectionSubText>
        <SectionSubText>- Sociale dienstverlening: Acerta (6 jaar)</SectionSubText>
        <br/><br/>
      <SectionText>Activiteiten</SectionText>
        <SectionSubText>- Testing van software binnen projecten</SectionSubText>
        <SectionSubText>- Analyse activiteiten - zowel functionele als technische</SectionSubText>
        <SectionSubText>- Ontwikkeling en development van software applicaties speciek op maat van de klant</SectionSubText>
        <SectionSubText>- Support en ondersteuning van applicaties</SectionSubText>
        <SectionSubText>- Management en coördinatie van een ontwikkelingsteam</SectionSubText>
        <br/><br/><br/>
    <SectionDivider/>
    <SectionTitle main>Werkervaring</SectionTitle>
    <GridContainer>
{/*      {projectsDemo.map((project)=> (
        <div>
          {project.title}
          <br/>
          {project.description}
        </div>
      ))}*/}
{/*       {workexperience.map((project)=> (*/}
    {workexperience.map(({title,client,location,period,description,image,tags,source,visit,id}) =>(
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <br/>
            <div period>{period}</div>
            <Hr/>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
          <br/>
{/*             <TitleContent>Stack</TitleContent>*/}
            <Hr/>
            <TagList>
              {tags.map((tag, i) =>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>    
          <UtilityList>
            <ExternalLinks href={visit}>Code</ExternalLinks>
            <ExternalLinks href={source}>Source</ExternalLinks>

          </UtilityList>      
        </BlogCard>
    ))}

{/*         <div>
        {project.client} | {project.period} <br/>
          {project.title}
          <br/><br/>
          {project.description}
        </div>
      ))}*/}
    </GridContainer>
  </Section>
);

export default Projects;