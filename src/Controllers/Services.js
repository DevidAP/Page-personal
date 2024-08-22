import './Services.css'
import React from 'react'

function Services(){
    return(
        <section className="skills">
        <h2>Habilidades</h2>
        <div className="skills-container">
          <div className="skills-section">
            <h3>Frontend</h3>
            <div className="skills-grid">
              <div className="skill">
                <h4>JavaScript</h4>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '80%' }}></div>
                </div>
                <span>80%</span>
              </div>
              <div className="skill">
                <h4>React</h4>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '80%' }}></div>
                </div>
                <span>80%</span>
              </div>
              <div className="skill">
                <h4>HTML/CSS</h4>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '90%' }}></div>
                </div>
                <span>90%</span>
              </div>
              {/* Agrega más habilidades de frontend según sea necesario */}
            </div>
          </div>
  
          <div className="skills-section">
            <h3>Backend</h3>
            <div className="skills-grid">
              <div className="skill">
                <h4>SQL</h4>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '75%' }}></div>
                </div>
                <span>75%</span>
              </div>
              <div className="skill">
                <h4>Python</h4>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '60%' }}></div>
                </div>
                <span>60%</span>
              </div>
              <div className="skill">
                <h4>MONGODB</h4>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '70%' }}></div>
                </div>
                <span>70%</span>
              </div>
              <div className="skill">
                <h4>C#</h4>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '60%' }}></div>
                </div>
                <span>60%</span>
              </div>
                <div className="skill">
                <h4>PHP</h4>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '60%' }}></div>
                </div>
                <span>60%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }




export default Services;