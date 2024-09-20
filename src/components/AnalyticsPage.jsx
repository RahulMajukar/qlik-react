import React, { useEffect, useRef } from 'react';
import { connectToQlikApp } from '../services/QlikService';
import { renderQlikChart } from '../services/NebulaService';

const AnalyticsPage = () => {
  const qlikChartRef = useRef(null);

  useEffect(() => {
    const initializeQlik = async () => {
      const app = await connectToQlikApp();
      if (qlikChartRef.current) {
        renderQlikChart(qlikChartRef.current, app);
      }
    };

    initializeQlik();
  }, []);

  return (
    <div>
      <h1>Qlik Analytics Page</h1>
      <div ref={qlikChartRef} style={{ height: '500px', width: '100%' }}></div>
    </div>
  );
};

export default AnalyticsPage;
