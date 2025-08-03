import { useEffect } from 'react'
import Head from 'next/head'

export default function AdminTest() {
  useEffect(() => {
    // Load Decap CMS
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/decap-cms@2.15.0/dist/decap-cms.js'
    script.onload = () => {
      console.log('Decap CMS loaded successfully')
    }
    script.onerror = (error) => {
      console.error('Failed to load Decap CMS:', error)
    }
    document.head.appendChild(script)

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <div>
      <Head>
        <title>CMS Test - YMA India</title>
      </Head>
      <div style={{ padding: '20px' }}>
        <h1>CMS Test Page</h1>
        <p>This page is testing the Decap CMS configuration.</p>
        <p>Check the browser console for any errors.</p>
        <div id="nc-root"></div>
      </div>
    </div>
  )
} 