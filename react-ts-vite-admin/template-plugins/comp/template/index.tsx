import React from 'react';
import styles from './style.module.less';

export interface <%= changeCase(name, 'upper-camel-case') %>Props {}

const <%= changeCase(name, 'upper-camel-case') %>: React.FC<<%= changeCase(name, 'upper-camel-case') %>Props> = () => {
  return (
    <div className='<%= changeCase(name, 'kebab') %>'>
      <%= changeCase(name, 'upper-camel-case') %>
    </div>
  );
};

export default <%= changeCase(name, 'upper-camel-case') %>;
