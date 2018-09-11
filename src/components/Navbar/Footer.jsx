import React from 'react';

import IconLink from 'components/reusable/icons/IconLink';

import { FOOTER_LINKS } from './constants';

const Footer = () => {
  return (
    <div
      className="flex flex-row flex-wrap items-center justify-center inline-block absolute"
      style={{ bottom: '20px' }}
    >
      {FOOTER_LINKS.map(l => <IconLink key={l.iid} {...l} maxHeight={16} />)}
    </div>
  );
};

export default Footer;
