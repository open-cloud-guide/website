import React from 'react';
import { HomepageBanner, FeatureCard, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';
import BannerImage from '../../images/banner.jpg';

const FirstLeftText = () => <h2>About this guide
  <a className={calloutLink}
      href="/about">
      See the about page
      <svg fill="#0062FF" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M18 6L16.6 7.4 24.1 15 3 15 3 17 24.1 17 16.6 24.6 18 26 28 16z"></path>
        <title>Arrow right</title>
      </svg>
  </a>
</h2>;

const FirstRightText = () => (
  <p> This guide will provide comprehensive learning for hybrid cloud and multicloud developers.
  As well as an agnostic view of how various clouds are using open source in their offerings.</p>
);

const SecondLeftText = () => (
  <>
  <h3>Survey says ...</h3><br></br>
  <p>According to our <strong>O'Reilly Survey</strong>, Developers who want to develop cloud applications should work on honing their OSS skills (which underly every major cloud platform) instead of only focusing on building skills for a proprietary cloud.</p>
  <a className={calloutLink}
      href="https://developer.ibm.com/blogs/oreilly-open-source-skill-survey-blog">
      Read the full survey
      <svg fill="#FFFFFF" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M18 6L16.6 7.4 24.1 15 3 15 3 17 24.1 17 16.6 24.6 18 26 28 16z"></path>
        <title>Arrow right</title>
      </svg>
  </a>
  </>
);

const SecondRightText = () => (
  <>
  <div class="stats"><p class="percentage">94%</p><p class="desc"> of respondents rate open source software equal to or better than proprietary software.</p></div>
  <div class="stats"><p class="percentage">70%</p><p class="desc">of respondents prefer choosing a cloud provider that is based on open source.</p></div>
  <div class="stats"><p class="percentage">65%</p><p class="desc">of respondents agree completely that contributions to open source projects impress potential employers and result in better professional opportunities.</p></div>
  </>
);

const BannerText = () => <h1>Open Source Cloud Guide</h1>;

const customProps = {
  Banner: (
    <>
      <FeatureCard
        color="dark"
        href="/about"
        title="Start the guide"
        subTitle="Ready to roll?"
        actionIcon="arrowRight"
        className="homepage-feature"
      >
        <HomepageBanner renderText={BannerText} image={BannerImage} />
      </FeatureCard>
    </>
  ),
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
