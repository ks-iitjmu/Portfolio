import './about.css';

const About = () => {
  return (
    <>
      <div className="about">
        <section className='passage'>
          <h1 className="atitle">About Me!</h1>
          <p className="atext">
            Hey there! This is Kunal Sharma from Ludhiana, Punjab. <br />
            A Mathematics and Computing sophomore at IIT Jammu. <br />
            With an avid passion for coding and problem solving,
            I have spent the past two years mastering C++, Python, and JavaScript. <br />
            I possess a keen interest in DSA and web development. <br />
            Further, I love staying on top of the latest technologies to improve my craft. <br />
            Outside of coding, I'm a big fan of music and enthralling bike rides.
          </p>
        </section>
        <section className="skills">
          <h1 className="atitle">Skills</h1>
          <div className="con">
            <div className="skill_row1">
              <img src="/html.png" alt="HTML" className="icon1" />
              <img src="/text.png" alt="CSS" className="icon1" />
              <img src="/js.png" alt="Javascript" className="icon1" />
            </div>
            <div className="skill_row1">
            <img src="/typescript.png" alt="Typescript" className="icon1" />
            <img src="/physics.png" alt="React" className="icon1" />
            <img src="/programing.png" alt="Node.js" className="icon1" />
            </div>
            <div className="skill_row1">
            <img src="/c-.png" alt="C++" className="icon1" />
              <img src="/social.png" alt="Git" className="icon1" />
              <img src="/github-sign.png" alt="Github" className="icon1 github1" />
            </div>
            <div className="skill_row1">
              <img src="/python.png" alt="Python" className="icon1" />
              <img src="/NumPy-Logo.png" alt="Numpy" className="icon1" />
              <img src="/pandas1.png" alt="Pandas" className="icon1" />
            </div>
            
          </div>
        </section>
      </div>
    </>
  );
};

export default About;