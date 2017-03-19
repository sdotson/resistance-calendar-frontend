import React from 'react';

import Logo from './ResistanceLogo';
import InlineElement from './InlineElement';
import AddEventsButton from './AddEventsButton';

const HeaderWrapper = (props) => {
  const style = {
    backgroundColor: '#f42966',
    padding: 15,
    paddingBottom: 10,
    border: 'solid 1px #6B6A73'
  };
  return (
    <div style={style}>
      { props.children }
    </div>
  );
};

const Header = () => {
  return (
    <HeaderWrapper>
      <InlineElement>
        <Logo width='70%' />
      </InlineElement>
      <InlineElement>
        <AddEventsButton />
      </InlineElement>
    </HeaderWrapper>
  );
};

Header.propTypes = {};

export default Header;
