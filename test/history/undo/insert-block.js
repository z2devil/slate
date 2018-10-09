/** @jsx h */

import h from '../../helpers/h'

export default function(editor) {
  editor.change(change => {
    change.insertBlock('quote')
  })

  editor.change(change => {
    change.undo()
  })
}

export const input = (
  <value>
    <document>
      <paragraph>
        <cursor />one
      </paragraph>
    </document>
  </value>
)

export const output = input
