import React from 'react';
import { initializeWidget, useActiveViewId, useRecords } from '@apitable/widget-sdk';
import { Setting } from './setting';

export const HelloWorld: React.FC = () => {
  const viewId = useActiveViewId();
  const records = useRecords(viewId);
  console.log('records length', records.length);
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ flexGrow: 1, overflow: 'auto', padding: '0 8px'}}>
        hello，world {records.length}
      </div>
      <Setting />
    </div>
  );
};

initializeWidget(HelloWorld, process.env.WIDGET_PACKAGE_ID);
