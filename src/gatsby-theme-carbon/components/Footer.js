import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
    <p>
      Apache Licensed, 2021
    </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://github.com/open-cloud-guide/website', linkText: 'GitHub' },
    { href: 'https://netlify.com/', linkText: 'Hosted with Netlify' }]
};

// remove the IBM logo
const CustomFooter = () => <Footer links={links} Content={Content} Logo="None"/>;

export default CustomFooter;
