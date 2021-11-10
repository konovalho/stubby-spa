import React from 'react';

import { FontWeights } from '@types';

import CodeEditor from 'components/CodeEditor';
import ParamsSelect from './ParamsSelect';
import Text from 'components/Text';

import * as S from './Home.styled';

const options = {
  status: [
    {
      value: '200',
      label: '200 - Status OK',
    },
    {
      value: '201',
      label: '201 - Status Created',
    },
  ],
  content: [
    {
      value: 'application/json',
      label: 'application/json',
    },
    {
      value: 'multipart/form-data',
      label: 'multipart/form-data',
    },
  ],
  charset: [
    {
      value: 'utf-8',
      label: 'utf-8',
    },
    {
      value: 'utf-16',
      label: 'utf-16',
    },
    {
      value: 'iso-8859-1',
      label: 'iso-8859-1',
    },
  ],
};

const Home = () => {
  return (
    <S.Root>
      <div>
        <Text
          fontWeight={FontWeights.extraBold}
          as="label"
          mb={10}
          display="block"
        >
          Http Response Body
        </Text>
        <CodeEditor width={400} height={500} />
      </div>
      <S.RightSide>
        <ParamsSelect label="Http Status" options={options.status} mb={20} />
        <ParamsSelect
          label="Response Content Type"
          options={options.content}
          mb={20}
        />
        <ParamsSelect label="Charset" options={options.charset} />
      </S.RightSide>
    </S.Root>
  );
};

export default Home;
