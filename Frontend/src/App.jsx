import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import * as EditorModule from "react-simple-code-editor"
import prism from "prismjs"
import * as ReactMarkdownModule from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './App.css'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

function App() {
  const Editor =
    EditorModule?.default?.default ??
    EditorModule?.default ??
    EditorModule

  const Markdown =
    ReactMarkdownModule?.default?.default ??
    ReactMarkdownModule?.default ??
    ReactMarkdownModule
  const [ code, setCode ] = useState(` function sum() {
  return 1 + 1
}`)

  const [ review, setReview ] = useState(``)

  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewCode() {
    const response = await axios.post(`${API_BASE_URL}/api/review`, { code })
    setReview(
      typeof response?.data?.review === "string"
        ? response.data.review
        : JSON.stringify(response?.data ?? "", null, 2)
    )
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                color: "#e6edf3",
                backgroundColor: "#0c0c0c",
                caretColor: "#e6edf3",
                outline: "none",
                border: "1px solid #2f2f2f",
                borderRadius: "0.7rem",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <div
            onClick={reviewCode}
            className="review">Review</div>
        </div>
        <div className="right">
          <Markdown

            rehypePlugins={[ rehypeHighlight ]}

          >{review}</Markdown>
        </div>
      </main>
    </>
  )
}



export default App