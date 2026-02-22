import React from 'react';
import Left_sider from './leftside/Left_sider';
import Right_sider from './rightside/Right_sider';

const Section1 = () => {
  return (
    <div className="flex  justify-between  md:-flex-row">
      <Left_sider />
      <Right_sider />
    </div>
  );
};

export default Section1;