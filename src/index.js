import React, { useState, useEffect } from 'react'
import MediumEditor from 'medium-editor'

export default function Editor(prop) {
  const [text, setText] = useState(prop.text)

  useEffect(() => {
    const dom = document.getElementsByClassName(prop.className)[0]
    const medium = new MediumEditor(dom, prop.options)


    setText(prop.text)

    medium.subscribe('editableInput', () => {
      if (prop.onChange)
        prop.onChange(dom.innerHTML, medium)
    });

    return () => {
      medium.destroy()
    }
  }, [text])


  const editorProp = { ...prop, dangerouslySetInnerHTML: { __html: text } }

  return React.createElement("div", editorProp);

}
