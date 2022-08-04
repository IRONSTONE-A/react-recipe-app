import { AboutContainer, InfoContainer, StyledImage } from './About.style';

import codingSvg from '../../assets/coding.svg';

const About = () => {
  return (
    <AboutContainer wrap="wrap">
      <StyledImage src={codingSvg} />
      <div>
        <h1>
          About Software Developer <span>Ironstone</span>
        </h1>
      </div>
      <InfoContainer>
        <h2>Hi, I'am Ironstone</h2>
        <h3>I’m currently learning Front-end Development Languages.</h3>
        <h4>
          I've already known JS, ReactJS, 
        </h4>
        <h2>
          <a href="thinkingman.6019@gmail.com">Send email</a> :
          thinkingman.6019@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
