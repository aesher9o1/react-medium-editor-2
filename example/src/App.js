import React, { useState } from 'react'

import Editor from 'react-medium-editor-2'


export default function App() {
  const [article, setArticle] = useState("Delete the text to write your own")
  const cacheArticle = () => {
    (text) => {
      setArticle(text)
    }
  }
  const CONFIG = {
    "autoLink": true,
    "toolbar": {
      "buttons": [
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "anchor",
        "image",
        "quote",
        "orderedlist",
        "h1",
        "h6"
      ],
      "diffLeft": 25,
      "diffTop": 10
    }
  }

  return (
    <div>
      <Editor
        className="userEditor"
        text={article}
        onChange={cacheArticle}
        options={CONFIG} />
    </div>
  )
}


