import React from 'react';

import './style.scss';
import SingleButton from 'components/UI/Buttons/SingleButton';

const HomeFeatures = () => (
   <section className="home-features">
      <div className="home-image">
         <img src="https://media.jfrog.com/wp-content/uploads/2017/12/20133032/Jfrog-Logo.svg" className="img-responsive" alt="React-bank home" />
      </div>

      <section className="home-text">
         <p>As the world's first universal repository, JFrog Artifactory is the mission-critical heart of the JFrog Platform functioning as the single source of truth for all packages, container images and Helm charts, as they move across the entire DevOps pipeline</p>
   

         <div className="home-cta">
            <SingleButton text="Click here to log in" href="/login" size="lg" />
         </div>
      </section>
   </section>
);

export default HomeFeatures;
