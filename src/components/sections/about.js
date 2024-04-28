import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import {func} from "prop-types";

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }

  ul.skills-list-flex {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 2px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const SkillCategory = styled.div`
  margin-bottom: 20px;
  font-weight: bold;
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);



  const skillsObj = {
    'Programming Languages': ['JavaScript', 'TypeScript', 'Node.js', 'Java'],
    'Software Development': ['RESTful API', 'GIT', 'GitHub', 'CLI', 'Agile Methodology (Jira)', 'DevOps', 'Chrome Dev Tools'],
    'Database': ['MongoDB', 'MySQL', 'PostgresSQL'],
    'Frameworks': ['React', 'Next.js', 'Spring Boot 3'],
    'Data Visualization': ['Tableau', 'Apache Echarts'],
    'Libraries': ['Material-UI', 'TailwindCSS', 'Expressjs', 'Mongoose', 'Syncfusion', 'ant design'],
    'Professional': ['Remote Pair-Programming', 'Teamwork', 'Communication Skills'],
    'Deployment': ['Docker', 'Amazon-EC2', 'CI/CD Pipeline', 'GitHub Actions', 'Amazon S3'],
    'Familiar Languages': ['C++', 'Python', 'WordPress', 'Ruby on Rails'],
  };
  // const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'MySQL', 'TailwindCSS', 'Java', 'Spring boot 3'];
  // const familiar = ['C++', 'Python', 'Ruby', 'Ruby On Rails', 'WordPress'];
  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hi! I'm a full-stack developer with a bit of experience in creating and developing modern web apps.
              I graduated from Microverse, an online software development school where different developers across
              the globe work on various real-world projects in a remote environment. I am currently pursuing Software
              Engineering at Adventist University of Central Africa.
            </p>

            <p>
              Have a great passion for creative problem solving, creating, and developing complex systems, and am able to learn
              new languages and technologies faster to meet customers' needs. Open for exploring exciting full-stack development
              opportunities in startups as well as companies with scale.
            </p>


            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          {/*<ul className="skills-list">*/}
          {/*  {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}*/}
          {/*</ul>*/}

          {/*<p>Also familiar with:</p>*/}
          {/*<ul className="skills-list">*/}
          {/*  {familiar && familiar.map((skill, i) => <li key={i}>{skill}</li>)}*/}
          {/*</ul>*/}

          {Object.entries(skillsObj).map(([category, skills], index) => (
            <ul key={index} className="skills-list-flex">
              <li>{ category }: {skills.join(', ')}</li>
            </ul>
          ))}


        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.JPG"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
