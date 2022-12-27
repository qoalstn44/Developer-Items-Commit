import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDesktop,
  faComputer,
  faComputerMouse,
  faKeyboard,
  faHeadphones,
  faMicrophone,
} from '@fortawesome/free-solid-svg-icons';

const Example = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faComputer} />
      <FontAwesomeIcon icon={faDesktop} />
      <FontAwesomeIcon icon={faComputerMouse} />
      <FontAwesomeIcon icon={faKeyboard} />
      <FontAwesomeIcon icon={faHeadphones} />
      <FontAwesomeIcon icon={faMicrophone} />
    </div>
  );
};

export default Example;
