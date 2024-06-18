import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsGithub />
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <FaTiktok />
    </div>
  </div>
);

export default SocialMedia;