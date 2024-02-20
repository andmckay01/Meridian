import { FC } from 'react';
import CompanyCard from './CompanyCard'; // Import the CompanyCard component

const gridStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: 'clamp(10px, 5vw, 50px)',
  margin: '0 clamp(5vw, 13vw, 25vw)',
  maxWidth: '1200px'
};

// This array should eventually come from a database or API call
const companyData = [
    {
      logoSrc: '/companyLogos/CastAI.svg',
      about: 'about',
      websiteUrl: 'https://cast.ai',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
      padding: '10px'
    },
    {
      logoSrc: '/companyLogos/Hona.svg',
      about: 'about',
      websiteUrl: 'https://www.hona.com',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
      padding: '7px'
    },
    {
      logoSrc: '/companyLogos/Bowtie.svg',
      about: 'about',
      websiteUrl: 'https://www.bowtie.works',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
    },
    {
      logoSrc: '/companyLogos/Packsmith.svg',
      about: 'about',
      websiteUrl: 'https://packsmith.io',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
    },
    {
      logoSrc: '/companyLogos/Deasie.svg',
      about: 'about',
      websiteUrl: 'https://www.deasie.com',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
      padding: '5px',
      paddingBottom: '10px'
    },
    {
      logoSrc: '/companyLogos/Vigil.png',
      about: 'about',
      websiteUrl: 'https://www.vigil.fi',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
      paddingTop: '10px',
    },
    {
      logoSrc: '/companyLogos/Rebuy.svg',
      about: 'about',
      websiteUrl: 'https://getparallel.com',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
      padding: '5px'
    },
    {
      logoSrc: '/companyLogos/Trestle.png',
      about: 'about',
      websiteUrl: 'https://www.gotrestle.com',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
    },
    {
      logoSrc: '/companyLogos/Transend.png',
      about: 'about',
      websiteUrl: 'https://www.transendfinancial.com',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
      paddingBottom: '10px',
    },
    {
      logoSrc: '/companyLogos/Reset.svg',
      about: 'about',
      websiteUrl: 'https://www.getreset.co',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
      padding: '15px'
    },
    {
      logoSrc: '/companyLogos/OneImaging.png',
      about: 'about',
      websiteUrl: 'https://oneimaging.com',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
    },
    {
      logoSrc: '/companyLogos/Pave.png',
      about: 'about',
      websiteUrl: 'https://pave.dev',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
    },
    {
        logoSrc: '/companyLogos/Abode.svg',
        about: 'Company1 is a leading innovator in the tech industry, known for its cutting-edge solutions.',
        websiteUrl: 'https://www.ownabode.com',
        foundedDate: 'January 1, 2010',
        founders: ['Founder One', 'Founder Two'],
        stageInvested: 'Series A',
        sector: 'Technology',
        coInvestors: ['Investor A', 'Investor B'],
        padding: '10px'
    },
    {
      logoSrc: '/companyLogos/Sante.png',
      about: 'about',
      websiteUrl: 'https://www.santehq.com',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
      padding: '15px'
    },
    {
      logoSrc: '/companyLogos/Flitch.png',
      about: 'about',
      websiteUrl: 'https://www.getflitch.com/',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
    },
    {
      logoSrc: '/companyLogos/Carmatic.svg',
      about: 'about',
      websiteUrl: 'https://www.carmatic.com',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
    },
    {
      logoSrc: '/companyLogos/CTRLTower.png',
      about: 'about',
      websiteUrl: 'https://ctrltower.ai',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
    },
    {
      logoSrc: '/companyLogos/Leaseup.svg',
      about: 'about',
      websiteUrl: 'https://www.leaseup.co',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
    },
    {
      logoSrc: '/companyLogos/Olive.png',
      about: 'about',
      websiteUrl: 'https://www.olive.travel',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
      padding: '12px',
      paddingBottom: '17px'
    },
    {
      logoSrc: '/companyLogos/Pier.png',
      about: 'about',
      websiteUrl: 'https://www.pier-finance.com',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
    },
    {
      logoSrc: '/companyLogos/SnapRefund.png',
      about: 'about',
      websiteUrl: 'https://snaprefund.io',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
    },
    {
      logoSrc: '/companyLogos/Bump.png',
      about: 'about',
      websiteUrl: 'https://www.usebump.com',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
      padding: '10px'
    },
    {
      logoSrc: '/companyLogos/ClarityValue.svg',
      about: 'about',
      websiteUrl: 'https://www.clarityvalue.co',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
    },
    {
      logoSrc: '/companyLogos/Palm.png',
      about: 'about',
      websiteUrl: 'https://getpalm.com',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
    },
    {
      logoSrc: '/companyLogos/Furo.png',
      about: 'about',
      websiteUrl: 'https://furopay.co',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
      padding: '12px',
      paddingBottom: '17px'
    },
    {
      logoSrc: '/companyLogos/Mortar.png',
      about: 'about',
      websiteUrl: 'https://mortar.us',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
    },
    {
      logoSrc: '/companyLogos/Scanbase.png',
      about: 'about',
      websiteUrl: 'https://www.scanbase.com',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
    },
    {
      logoSrc: '/companyLogos/Eqtble.png',
      about: 'about',
      websiteUrl: 'https://www.eqtble.com',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
    },
    {
      logoSrc: '/companyLogos/Acctual.png',
      about: 'about',
      websiteUrl: 'https://acctual.com',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
    },
    {
      logoSrc: '/companyLogos/Transcrypts.png',
      about: 'about',
      websiteUrl: 'https://www.transcrypts.com',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
    },
    {
      logoSrc: '/companyLogos/Parallel.svg',
      about: 'about',
      websiteUrl: 'https://getparallel.com',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
    },
    {
      logoSrc: '/companyLogos/Archer.png',
      about: 'about',
      websiteUrl: 'https://www.tryarcher.io',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
    },
    {
      logoSrc: '/companyLogos/Homeflow.svg',
      about: 'about',
      websiteUrl: 'https://www.homeflow.me',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
      padding: '5px',
      paddingBottom: '15px'
    },
    {
      logoSrc: '/companyLogos/BananaDev.svg',
      about: 'about',
      websiteUrl: 'https://www.banana.dev',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
      padding: '5px'
    },
    {
      logoSrc: '/companyLogos/OttoAI.png',
      about: 'about',
      websiteUrl: 'https://www.sellwithotto.ai',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
      padding: '5px'
    },
    {
      logoSrc: "/companyLogos/Trigo.svg",
      about: 'about',
      websiteUrl: 'https://trigodata.com',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
      padding: '10px'
    },
];

const CompanyGrid: FC = () => {
  return (
    <div style={gridStyle} className="company-grid-margin">
      {companyData.map((company, index) => (
        <CompanyCard
          key={index}
          logoSrc={company.logoSrc}
          about={company.about}
          websiteUrl={company.websiteUrl}
          foundedDate={company.foundedDate}
          founders={company.founders}
          stageInvested={company.stageInvested}
          sector={company.sector}
          coInvestors={company.coInvestors}
          padding={company.padding}
          paddingBottom={company.paddingBottom}
          paddingTop={company.paddingTop}
          paddingLeft={company.paddingLeft}
          paddingRight={company.paddingRight}
        />
      ))}
    </div>
  );
};

export default CompanyGrid;
