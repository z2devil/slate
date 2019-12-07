/** @jsx jsx */

import { jsx } from '../../..'

export const run = editor => {
  editor.exec({ type: 'insert_text', text: 'four' })
}

export const input = (
  <editor>
    <block>
      one
      <inline>
        two
        <cursor />
      </inline>
      three
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>
      one
      <inline>two</inline>
      fourthree
      <cursor />
    </block>
  </editor>
)
