import React from 'react';
import { MarginProps } from 'styled-system';
import Select, { OptionsOrGroups, GroupBase } from 'react-select';

import { FontWeights, Colors } from '@types';

import Text from 'components/Text';

import * as S from './ParamsSelect.styled';

import 'brace/mode/json';

type Props<O> = {
  label: string;
  options: OptionsOrGroups<O, GroupBase<O>>;
} & MarginProps;

const ParamsSelect = <O,>({ label, options, ...rest }: Props<O>) => {
  return (
    <S.Root {...rest}>
      <Text
        fontWeight={FontWeights.extraBold}
        as="label"
        mb={10}
        display="block"
      >
        {label}
      </Text>
      <Select
        options={options}
        styles={{
          option: (styles, { isSelected }) => ({
            ...styles,
            background: isSelected ? Colors.valencia : 'none',
            color: isSelected ? Colors.white : Colors.black,
            ':hover': {
              color: Colors.white,
              background: Colors.valencia,
            },
          }),
          control: (styles, { menuIsOpen }) => ({
            ...styles,
            borderColor: menuIsOpen ? Colors.valencia : Colors.alto,
            boxShadow: 'none',
            ':hover': {
              borderColor: menuIsOpen ? Colors.valencia : Colors.alto,
            },
          }),
        }}
      />
    </S.Root>
  );
};

export default ParamsSelect;
