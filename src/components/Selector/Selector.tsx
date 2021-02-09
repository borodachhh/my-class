import React from 'react';
import Select, {Props} from 'react-select';
import styles from './Selector.module.scss';



const Selector: React.FC<Props> = (props) => {
  return (
    <>
      <Select {...props} />
    </>
  )
};

export default Selector;