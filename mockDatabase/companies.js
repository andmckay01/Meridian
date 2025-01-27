const companies = [
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
      coInvestors: ['Investor C', 'Investor D']
    },
    {
      logoSrc: '/companyLogos/Eden.svg',
      about: 'about',
      websiteUrl: 'https://edenmed.com/',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
      padding: '16px',
      paddingBottom: '25px'
    },
    {
      logoSrc: "/companyLogos/DGI.png",
      about: 'about',
      websiteUrl: 'https://www.dgiapparel.com/',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
      padding: '0px',
      paddingBottom: '0px'
    },
    {
      logoSrc: '/companyLogos/Vigil.png',
      about: 'about',
      websiteUrl: 'https://getvigil.com/',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
      paddingTop: '3px',
    },
    {
      logoSrc: '/companyLogos/Rebuy.svg',
      about: 'about',
      websiteUrl: 'https://www.rebuyengine.com',
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
      padding: '10px',
      paddingLeft: '15px'
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
      paddingRight: '2px',
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
      logoSrc: '/companyLogos/HeyWalt.png',
      about: 'about',
      websiteUrl: 'https://www.heywalt.ai/',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
      padding: '14px'
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
    {
      logoSrc: "/companyLogos/Aipotheosis.png",
      about: 'about',
      websiteUrl: 'https://www.aipotheosis.xyz',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D'],
      padding: '18px'
    },
    {
      logoSrc: "/companyLogos/Pathwork.png", 
      about: 'about',
      websiteUrl: 'https://www.pathworklife.com',
      foundedDate: 'founded date',
      founders: ['founder one', 'founder two'],
      stageInvested: 'seed',
      sector: 'sector',
      coInvestors: ['Investor C', 'Investor D']
    }

];

export default companies;