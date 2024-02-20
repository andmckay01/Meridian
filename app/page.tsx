// This is the main entrypoint for our application
import './globals.css';
import '../components/Sections/sections.css';
import { FC } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Navbar from '@/components/UI/Navbar';
import Header from '@/components/Text/Header';
import Spacer from '@/components/Structural/Spacer';
import Section from '@/components/Structural/Section';
import PrinciplesCard from '@/components/UI/PrinciplesCard';
import Testimonial from '@/components/UI/Testimonial';
import FillSection from '@/components/Structural/FillSection';
import TeamCardContainer from '@/components/UI/Team/TeamCardContainer';
import LatestContentCard from '@/components/UI/LatestContentCard';
import Footer from '@/components/UI/Footer';
import '../components/UI/ui.css';
import FillVertical from '@/components/Structural/FillVertical';
import Section5Companies from '@/components/Sections/section5_investments';
import Main from '@/components/Structural/Main';
import '../components/Sections/sections.css';

const MainContentAnimation = dynamic(() => import('../components/Animation/MainContentAnimation'), { ssr: false });

// dynamically load the globe only when DOM is present
const Globe = dynamic(() => import('../components/Globe/Globe'), {
  ssr: false,
});

const LayoutGroup = dynamic(() => import('framer-motion').then((mod) => mod.LayoutGroup), {
  ssr: false,
});

const teamMembers = [
  {
      name: "Devon Gethers",
      role: "Managing Partner",
      imageSrc: "/headshotDevon.png",
      title: "Managing Partner",
      linkedin: "https://www.linkedin.com/in/devon-gethers/",
      email: "devon@meridianventures.co",
      medium: "https://medium.com/@devon_45585",
      focus: "Devon allocates his time to identifying startups with high growth potential, raising capital to fund the opportunities, and investing time in the portfolio and its founders.",
      education: "Devon holds a B.S. in Finance from the University of Utah, where he graduated Summa Cum Laude. He is currently a candidate at Harvard Business School, Class of 2025.",
      experienceP1: "Prior to co-founding Meridian, Devon founded EarlyAdmit, an EdTech startup dedicated to improving educational and professional outcomes for underserved minorities, which he sold to private equity in 2023.",
      experienceP2: "While scaling EarlyAdmit, Devon worked in a $2B AUM growth equity firm investing in Enterprise SaaS and Branded Consumer businesses. Devon's blend of operator success and investment expertise makes him a preferred strategic partner to founders."
  },
  {
      name: "Karlton Haney",
      role: "Managing Partner",
      imageSrc: "/headshotKarlton.png",
      title: "Managing Partner",
      linkedin: "https://www.linkedin.com/in/kevinkarltonhaney/",
      email: "karlton@meridianventures.co",
      focus: "Karlton focuses his time on sourcing startups, making new investments, and managing relationships with portfolio companies.",
      education: "B.S. in Industrial Engineering from the University of Arkansas. Member of the Harvard Business School Class of 2025.",
      experienceP1: "Prior to co-founding Meridian, Karlton was a private equity buyout and growth investor at The Stephens Group. In his role at Stephens Group, he reviewed new investment opportunities, supported the team’s investment efforts by conducting financial analysis, due diligence, and industry research, and worked closely with portfolio companies on strategic priorities. Before Stephens Group, he worked in various finance and strategy roles at Walmart Inc."
  },
  {
      name: "Dallin Anderson",
      role: "Advisor",
      imageSrc: "/headshotDallin.png",
      title: "Advisor",
      linkedin: "https://linkedin.com/in/dallinanderson",
      focus: "Fund strategy and new investment advisory.",
      education: "B.S. in Accounting from Brigham Young University. MBA from Harvard Business School.",
      experienceP1: "Mr. Anderson was the Founder, Chairman, and CEO of Montigen Pharmaceuticals (acquired by Supergen) and Co-Founder, Chairman, and President of Tolero Pharmaceuticals (acquired by Dainippon Sumitomo) in what was at the time (2017) the largest Utah-based biotechnology transaction to date.",
      experienceP2: "Dallin founded and currently manages Serial Capital, an investor in real estate and seed/growth stage companies across various sectors."
  },
  {
      name: "Heather Harmon",
      role: "Advisor",
      imageSrc: "/headshotHeather.png",
      title: "Advisor",
      linkedin: "https://www.linkedin.com/in/heatheraharmon/",
      focus: "New investment advisory and mentorship for portfolio founders.",
      education: "Heather completed a Pre-medicine degree from UC San Diego and University of Washington, attended the Universidad of Guadalajara, and UC Berkeley Haas School of Business for Artificial Intelligence.",
      experienceP1: "Ms. Harmon is a 4x founder and former venture-backed COO and public company executive. She is a passionate proptech and fintech leader who has built and managed highly engaged technical teams, led product management, and scaled operations from startup through M&A.",
      experienceP2: "She is currently is advising early stage companies on raising capital, defining product roadmaps, and scaling operations."
  },
  {
      name: "Zachary Smith",
      role: "Advisor",
      imageSrc: "/headshotZach.png",
      title: "Advisor",
      focus: "Fundraising and LP relations.",
      linkedin: "https://www.linkedin.com/in/zachary-smith-b835721/",
      education: "B.S. in Finance from the University of Utah.",
      experienceP1: "Mr. Smith is a Managing Director at Crescent Capital ($40B private equity fund) on the Investor Relations team. Prior to joining Crescent, Zachary spent 20 years at Wells Fargo Asset Management.",
      experienceP2: "He is an LP in Harlem Capital, Beta Boom, First Close Partners, and other minority-owned funds and has made over 50 angel investments. He is a founding board member of the University of Utah’s IMPACT Program, an internship program focused on post-grad education and employment, in partnership with HBCUs nationwide."
  }
];

const latestContents = [
  {
    author: "Utah Business",
    title: "45 Lessons from Utah Founders",
    imagePath: "/contentPhotos/45Lessons.png",
    date: new Date(new Date("2024-01-29").getTime() + (7 * 60 * 60 * 1000)).toISOString(),
    source: "Utah Business",
    link: "https://www.utahbusiness.com/45-lessons-from-utah-founders/"
  },
  {
    author: "Devon Gethers",
    title: "InsurTech: The Next Frontier of FinTech",
    imagePath: "/contentPhotos/Insurtech.png",
    date: new Date(new Date("2023-11-25").getTime() + (7 * 60 * 60 * 1000)).toISOString(),
    source: "Medium",
    link: "https://medium.com/@devon_45585/insurance-technology-the-next-frontier-of-fintech-854aba3a2f70"
  },
  {
    author: "Devon Gethers",
    title: "How We Started Meridian Ventures",
    imagePath: "/contentPhotos/MeridianLaunch.png",
    date: new Date(new Date("2023-08-03").getTime() + (7 * 60 * 60 * 1000)).toISOString(),
    source: "Utah Business",
    link: "https://www.utahbusiness.com/how-devon-gethers-cofounded-meridian-ventures/"
  },
  {
    author: "TechCrunch",
    title: "Cast AI Raises $35M Series B",
    imagePath: "/contentPhotos/Cast.png",
    date: new Date(new Date("2023-11-07").getTime() + (7 * 60 * 60 * 1000)).toISOString(),
    source: "TechCrunch",
    link: "https://techcrunch.com/2023/11/07/cast-ai-which-helps-companies-optimize-cloud-spend-lands-35m/"
  },
];

const landingStyle: React.CSSProperties = {
  justifyContent: 'space-between',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  top: 'auto',
  bottom: 0
}

const compassStyle: React.CSSProperties = {
  aspectRatio: 'auto',
  width: 'clamp(5.5rem, 8vw, 8rem)',
  marginRight: 'clamp(2vw, 7vw, 20vw)',
  marginTop: 'clamp(2vh, 5vh, 10vh)',
  marginLeft: 'auto',
};  

const legendStyle: React.CSSProperties = {
  aspectRatio: 'auto',
  width: 'clamp(288px, 60vw, 600px)',
  position: 'relative',
  paddingRight: 'clamp(5vw, 8vw, 20vw)',
  paddingBottom: 'clamp(5px, 10vh, 12vh)',
  marginLeft: 'auto',
  marginTop: 'auto',
  backgroundColor: 'transparent',
};

const principlesSectionStyle: React.CSSProperties = {
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const principleCardGap = 'principle-card-gap';

const principleCardContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'clamp(30px, 2vw, 2vw)',
  flexWrap: 'wrap',
  margin: '0 clamp(30px, 5vw, 25vw)'
}

const principlesHeader: React.CSSProperties = {
  width: '100%',
  maxWidth: '100%',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 'clamp(2vh, 3vh, 20vh)',
  alignItems: 'center'
}

const foundersSectionStyle: React.CSSProperties = {
  zIndex: 9, // to sit over top of all site content including the vertical bars
  justifyContent: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const latestSectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'center'
}

const latestCardContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '30px',
  padding: '20px',
  maxWidth: '1500px',
  margin: '0 auto',
}

const Home: FC = () => {
  return (
   <>
      <Navbar />
      <FillVertical side="right"/>
      <FillVertical side="left"/>
      <MainContentAnimation>
        <Main>
          <Section id="section1_landing" style={landingStyle}>
            <div>
                <Spacer />
                <Image 
                    src="/compass.svg" 
                    alt="Compass" 
                    width={100}
                    height={100}
                    style={compassStyle}
                    priority
                  />
                <Header type='H1' paddingLeft='clamp(3vw, 3vw, 20px)' paddingRight='clamp(3vw, 3vw, 20px)' marginTop='clamp(5px, 5vh, 10vh)' marginBottom='clamp(2vh, 5vh, 8vh)' maxWidth="950px"> 
                    Championing bold ideas and visionary founders to fuel world-changing innovation.
                </Header>
            </div>
            <div>
                  <Image 
                    src="/legend.svg" 
                    alt="Legend" 
                    width={500}
                    height={300}
                    style={legendStyle} 
                    className="legend"
                    priority
                  />
            </div>
          </Section>
          <Section id="section2_principles" style={principlesSectionStyle} isFullHeight={false}>
              <Spacer height={'10vh'}/>
              <div style={principlesHeader}>
                    <Header type='H1' isCentered={true} marginTop='clamp(2vh, 7vh, 10vh)' marginBottom='clamp(2vh, 4vh, 4vh)'> 
                        Guiding Principles 
                    </Header>
              </div>
              <div style={principleCardContainerStyle} className={principleCardGap}>
                  <PrinciplesCard 
                    title="Vision"
                    imagePath="/vision.svg"
                    numberDisplay="01"
                    content="We invest in bold leaders who exhibit a rare blend of imagination and execution. Leaders who see what others don’t and courageously venture into the unknown."
                  />
                  <PrinciplesCard 
                    title="Collaboration"
                    imagePath="/collaboration.svg"
                    numberDisplay="02"
                    content="Our investment goes beyond capital. We invest time in our founders – helping chart the course, acquire key talent, and make connections with partners along the journey."
                  />
                  <PrinciplesCard
                    title="Growth"
                    imagePath="/growth.svg"
                    numberDisplay="03"
                    content="As former operators, we understand how to build and scale startups. We work with our founders to safeguard against common missteps and position our companies best for growth-stage capital."
                  />
              </div>
              <Spacer height={'30vh'}/>
          </Section>
          <Section id="section3_founders" style={foundersSectionStyle} isFullHeight={false}>
              <Header type='H1' isCentered={true} marginTop='clamp(2vh, 7vh, 10vh)' marginBottom='clamp(2vh, 4vh, 7vh)'> 
                  What Founders Say 
              </Header>
              <div>
                  <Testimonial 
                    alignment="left"
                    statement="Meridian added value from day one. Devon and Karlton stand out among their peers as diligent and insightful. Their contributions have attracted top-tier investors, refined our financing, and improved our go-to-market and product strategy."
                    name="Cody Eddings"
                    company="SnapRefund"
                    imageSrc="/headshotCodyEddings.png"
                    left="57px"
                  />
                  <Testimonial 
                    alignment="right"
                    statement="Meridian immediately impressed us with their unwavering support. Devon and Karlton's passion for adding value is illustrated through their consistent and meaningful assistance, displaying a level of integrity unmatched in VC. Their involvement in key areas such as fundraising, customer growth, and partnerships has made them the most active contributors on our cap table."
                    name="Ben Wunderman"
                    company="Packsmith"
                    imageSrc="/headshotBenWunderman.png"
                    left="39px"
                  />
                  <Testimonial 
                    alignment="left"
                    statement="The team at Meridian consistently proves their worth. Their hustle and engagement with portfolio companies has been hugely beneficial for us, including introductions to investors, valuable new hires, and potential customers. I highly recommend working with these guys!"
                    name="Atikh Bana"
                    company="Acctual"
                    imageSrc="/headshotAtikh.png"
                    left="40px"
                  />
              </div>
              <Spacer height={'5vh'} />
              <FillSection/>
          </Section>
          <Section id="section4_team" isFullHeight={true}>
              <Spacer height={'5vh'} />
              <Header type="H1" paddingLeft='clamp(3vw, 3vw, 20px)' paddingRight='clamp(3vw, 3vw, 20px)' marginTop='clamp(2vh, 7vh, 10vh)' marginBottom='clamp(15px, 8vh, 100px)' maxWidth="950px"> 
                  Seasoned operators and investors, at your side as you chart your course. 
              </Header>
              <TeamCardContainer teamMembers={teamMembers}/>
              <Spacer height={'5vh'}/>
          </Section>
          <Section5Companies/>
          <Section id="section6_latest" isFullHeight={true} style={latestSectionStyle} className="our-latest">
              <Header type="H1" isCentered={true} marginBottom='clamp(2vh, 5vh, 8vh)' style={principlesHeader}>Our Latest</Header>
              <div style={latestCardContainerStyle}>
                  {latestContents.map((content, index) => (
                      <LatestContentCard
                          key={index}
                          author={content.author}
                          title={content.title}
                          imagePath={content.imagePath}
                          date={new Date(content.date)}
                          source={content.source}
                          link={content.link}
                      />
                  ))}
              </div>
          </Section>
          <Section id="section7_footer">
              <Footer />
          </Section>
        </Main> 
      </MainContentAnimation>      
      <Globe />   
    </>

  );
};

export default Home;