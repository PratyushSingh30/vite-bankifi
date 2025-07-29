import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { config } from './config'

function App() {
  const [count, setCount] = useState(0)
  const [showConfig, setShowConfig] = useState(false)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{config.PRODUCT_NAME}</h1>
      <div className="card">
        <p>Environment: <strong>{config.APP_ENV}</strong></p>
        <p>API: <strong>{config.API.ROOT_URL}</strong></p>
        <p>Version: <strong>{config.VERSION}</strong></p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setShowConfig(!showConfig)}>
          {showConfig ? 'Hide' : 'Show'} Config
        </button>
        {showConfig && (
          <pre style={{ 
            textAlign: 'left', 
            background: '#f5f5f5', 
            padding: '1rem', 
            borderRadius: '4px',
            overflow: 'auto',
            maxHeight: '300px',
            fontSize: '0.8rem'
          }}>
            {JSON.stringify(config, null, 2)}
          </pre>
        )}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
