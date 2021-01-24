import React from 'react';
import styles from './index.less';
import Try from "@/pages/try"

export default (props) => {
  return (
    <div>
      <h1 className={styles.title}>123{
        props.children
      }</h1>
      JSX
      <Try/>
    </div>
  );
}
