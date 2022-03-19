import React from 'react';
import { Table } from '../components';

type Props = {};

const DiaryViewerScreen: React.FC<Props> = () => {
  return (
    <div className="table-container">
      <Table />
    </div>
  );
};

export default DiaryViewerScreen;
