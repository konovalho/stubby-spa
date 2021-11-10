import React, { useEffect, useRef } from 'react';
import { MarginProps, WidthProps, HeightProps } from 'styled-system';
import * as S from './CodeEditor.styled';

import * as ace from 'brace';
import 'brace/mode/json';

type Props = MarginProps & WidthProps & HeightProps;

const initialValue = `{
  "someparam": "somevalue",
}
`;

const CodeEditor = ({ width, height, ...rest }: Props) => {
  const editor = useRef<ace.Editor>();

  useEffect(() => {
    editor.current = ace.edit('editor');
    editor.current.getSession().setMode('ace/mode/json');
    editor.current.getSession().setValue(initialValue);

    editor.current.setOptions({
      showLineNumbers: false,
      showGutter: false,
      highlightActiveLine: false,
    });
  });

  return (
    <S.Root width={width} height={height} {...rest}>
      <S.Editor id="editor" width={width} height={height} />
    </S.Root>
  );
};

export default CodeEditor;
