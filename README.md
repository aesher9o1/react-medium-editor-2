# react-medium-editor-2

> React wrapper to medium editor js library

[![NPM](https://img.shields.io/npm/v/react-medium-editor-2.svg)](https://www.npmjs.com/package/react-medium-editor-2) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-medium-editor-2
```
Then install the mandatory editor scripts
 ```html
 <script src="//cdn.jsdelivr.net/npm/medium-editor@latest/dist/js/medium-editor.min.js"></script>
 <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/medium-editor@latest/dist/css/medium-editor.min.css" type="text/css" media="screen" charset="utf-8">
 ```

## Usage

```jsx
import React, { Component } from 'react'

import Editor from 'react-medium-editor-2'

function Component {
    return (
      <Editor className="unique_and_mandatory_class_name"/>
    )
}
```

## License

MIT © [aesher9o1](https://github.com/aesher9o1)
