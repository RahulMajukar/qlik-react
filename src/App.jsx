import React from 'react'
import AnalyticsPage from './components/AnalyticsPage'
import QlikIframe from './components/QlikIframe'

function App() {
  return (
    <div>
      <div className="App">
        <AnalyticsPage />

        <QlikIframe />
      </div>
    </div>
  )
}

export default App