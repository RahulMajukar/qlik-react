import React from 'react';

const QlikIframe = () => {
  return (
    // <iframe
    //   src="https://nl79r320hz7o1pi.sg.qlikcloud.com/single/?appid=0fddbfcd-fb95-43f3-98b6-5c1288319f38&sheet=3337e68d-c051-4f25-95e7-f4830baea0e4&theme=breeze&opt=ctxmenu,currsel"
    //   style={{ border: 'none', width: '100%', height: '100%' }}
    //   title="Qlik Dashboard"
    // />
    <iframe
      src="https://nl79r320hz7o1pi.sg.qlikcloud.com/sense/app/0fddbfcd-fb95-43f3-98b6-5c1288319f38/sheet/3337e68d-c051-4f25-95e7-f4830baea0e4/state/analysis/hubUrl/%2Fanalytics%2Fhome"
      style={{ border: 'none', width: '100%', height: '600px' }}
      title="Qlik Dashboard"
    />
  );
};

export default QlikIframe;
