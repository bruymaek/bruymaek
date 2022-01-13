import { GiNewspaper, GiTennisRacket, GiSoccerKick } from 'react-icons/gi';
import { GiGraduateCap, GiOpenBook } from "react-icons/gi";
import { FaMicrosoft, FaNetworkWired, FaProjectDiagram, FaHandsHelping} from "react-icons/fa";

export const workexperience = [
  {
    title: 'Analist Programeur',
    client: 'Janssen Pharmaceutica',
    location: 'Beerse',
    period: '2019-2021',
    description: "Als analist / programmeur verantwoordelijk voor de analyse en ontwikkeling van ''custom made'' software gebruikt door wetenschappers bij uitvoering van 'In Vitro' experimenten.",
      image: '/images/JNJ_Logo.png',
      tags: ['Visual Studio', 'C#', 'Excel VSTO Add-in'],
    source: 'https://www.google.com/search?client=avast&q=janssen+pharmaceutica',
    visit: 'https://www.janssen.com/belgium/nl',
    id: 0,
  },
  {
    title: 'Analist Programeur',
    client: 'RIVM (NL)',
    location: 'Bilthoven',
    period: '2019',
    description:"Als analist / coördinator verantwoordelijk voor de opstart van het 'Groot onderhoud' project. Een project waarbij voor een online applicatie nieuwe functies werden ingebouwd.",
    image: '/images/RIVM_Logo.png',
    tags: ['C#', 'ASP.NET', 'SQL server'],
    source: 'https://rivm.nl',
    visit: 'https://www.rivm.nl',
    id: 1,
  },
  {
    title: 'Analist Programeur / Project coördinator',
    client: 'Acerta',
    location: 'Leuven',
    period: '2013-2019',
    description: "In eerste instantie zowel onderhoud en support van de Acerta loonmonitor applicatie. Nadien anderzijds ook belast met analyse / coördinatie nieuwe implementaties en onderhoud van de “aangifte sociale risico” module.",
      image: '/images/Acerta_Logo.png',
      tags: ['(Unix) ObjectStar', 'Excel VBA', 'Coördinatie'],
    source: 'https://nl.wikipedia.org/wiki/ObjectStar',
    visit: 'https://www.acerta.be',
    id: 2,
  },
  {
    title: 'Analist Programeur / Project coördinator / Team Lead',
    client: 'Base',
    location: 'Zaventem',
    period: '2006-2013',
    description: "Gestart als service ontwikkelaar op het mobiele “prépaid” platform en heb ik mij in deze materie snel kunnen specialiseren. Dit gaf mij de mogelijkheid om door te groeien vervolgens tot analist, coördinator en even later tot teamlead nieuwe ontwikkeling van dat platform.",
    image: '/images/Base_logo.png',
    tags: ['(Telcordia) IN mobile specific'],
    source: 'https://en.wikipedia.org/wiki/Intelligent_Network',
    visit: 'https://www.base.be/',
    id: 3,
  },
  {
    title: 'Analist Programeur',
    client: 'Verschillende klanten',
    location: 'verschillende locaties',
    period: '1998-2006',
    description: "Programmeur, analist, testing, coördinatie + uitvoeren, sturen en opvolgen van projecten.",
    image: '/images/Atos_logo.png',
    tags: ['Development', 'Analyses', 'Testing', 'Project mgt'],
    source: 'https://www.google.be/search?q=atos+belgium',
    visit: 'https://atos.net/en-be/belgium',
    id: 4,
  },
];

export const TimeLineData = [
  { year: "1998", text: 'Hier start mijn professioneel verhaal...het bedrijf dat toen nog Origin was, is ondertussen AtoS geworden.', },
  { year: "1998-2006", text: 'Tewerkgesteld vooral als analist programmeur vooral werkende aan client-server applicaties.', },
  { year: "2006-2013", text: 'Team Base vervoegd om dan iets later op het platform "prepaid rating engine" toch wel een bepalende rol te spelen.  De laatste 3 jaar was ik vooral teamlead - hands on.', },
  { year: "2013-2019", text: 'Bij Acerta op de oude Unix loonmotor tewerkgesteld geworden.  In eerste instantie coördinative / functionele analyse functie mbt nieuwe implementaties...na verloop van tijd ook development activiteiten voor mijn rekening genomen.', },
  { year: "2019-2019", text: 'Analyse / coördinatie van onderhoud activiteit van de applicatie elektronisch Milieujaarverslag.', },
  { year: "2019-2021", text: 'Ontwikkeling van een op maat gemaakte applicatie voor experiment resultaten uitgevoerd door laboranten.', },
];

export const Hobbys = [
  { name: 'Voetbal', 
    text: 'Ik ben een gediplomeerd jeugdvoetbal coach. \nActief als trainer bij een jeugdploeg van Lommel SK. \nAls ook actief als coördinator middenbouw bij K. Verbroedering Balen.',
    icon: <GiSoccerKick size="3rem" />,
    index: 0,},
  { name: 'Padel', 
    text: 'Ik speel occasioneel padel.',
    icon: <GiTennisRacket size="3rem" />,
    index: 1,},
  { name: 'Algemeen', 
    text: 'Ik probeer op de hoogte te blijven van wat dagelijks in de wereld gebeurd.',
    icon: <GiNewspaper size="3rem" />,
    index: 2,}
];

export const Studies = [
  { name: 'Katholieke Hogeschool Kempen, Geel', 
    year: '1998',
    education: 'Graduaat (Bachelor) - Toegepaste Informatica',
    icon: <GiGraduateCap size="3rem" />,
    index: 0,},
  { name: 'Sint-Aloysiuscollege, Geel', 
    year: '1993',
    education: 'Bedrijfseconomische informatica',
    icon: <GiOpenBook size="3rem" />,
    index: 1,}
];

export const Bijkomendestudies = [
    { name: 'KHK, Geel', 
      year: '2016-2019',
      education: 'Visual Studio: C#, ASP.NET MVC Core, AngularJS',
      icon: <FaMicrosoft size="3rem" />,
      index: 0,},
    { name: 'Katholieke Hogeschool Kempen, Geel', 
      year: '2009-2010',
      education: 'Cisco: CCNA Expl. Traject, Win Server 2008(R2)',
      icon: <FaNetworkWired size="3rem" />,
      index: 1,},
    { name: 'Interne opleiding @Atos', 
      year: '2013',
      education: 'Project Mangement: Prince2Foundation',
      icon: <FaProjectDiagram size="3rem" />,
      index: 3,},
    { name: 'Interne opleiding @Atos', 
      year: '2009',
      education: 'ITIL - IT Service Mgt Foundation',
      icon: <FaHandsHelping size="3rem" />,
      index: 0,},
  ];