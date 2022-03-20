import React from 'react';
import { Table } from '../../components';
import styles from './index.module.css';

type Props = {};

const DiaryViewerScreen: React.FC<Props> = () => {
  return (
    <div className={styles.tableContainer}>
      <Table />
    </div>
  );
};

export default DiaryViewerScreen;
