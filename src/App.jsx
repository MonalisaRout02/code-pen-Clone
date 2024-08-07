import {React, useEffect, useState} from 'react'
import Editor from './Editor'
import './App.css'
import './index.css'

function App() {

const [html,setHtml]=useState('');
const [css,setCss]=useState('');
const [js,setJs]=useState('');
const [srcDoc, setSrcDoc ] =useState('');

useEffect(()=>{
  const timeOut = setTimeout(()=>{
    setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>`
      
      
    )
  },300)
  return ()=> clearTimeout(timeOut)
},[html,css,js])
  return (
    <>
    <div className='main-Container'>
    <div className='top-Container'>
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
       <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
     </div>
     <div className='bottom-Container'>
     <iframe 
     srcDoc={srcDoc}
      title="output"
      sandbox="allow-scripts"
      width="100%"
      height="100%"
      frameBorder="0"
      />
     </div>

    </div>
     
    </>
  )
}

export default App
