import enigma from 'enigma.js';
import schema from 'enigma.js/schemas/12.170.2.json';

// Define the Qlik Cloud WebSocket URL and App ID
const qlikServerUrl = 'wss://nl79r320hz7o1pi.sg.qlikcloud.com';
const appID = '0fddbfcd-fb95-43f3-98b6-5c1288319f38';

// Function to create a connection to the Qlik app
export const connectToQlikApp = async () => {
  const session = enigma.create({
    schema,
    url: `${qlikServerUrl}/app/${appID}`,
    createSocket: (url) => new WebSocket(url),
  });

  try {
    const qlikApp = await session.open();
    console.log('Connected to Qlik app');
    return qlikApp;
  } catch (error) {
    console.error('WebSocket connection failed:', error);
    throw error;
  }
};

// Optional usage example
connectToQlikApp().then((qlikApp) => {
  // You can now use `qlikApp` for further operations
}).catch((error) => {
  // Handle the connection error if needed
});
