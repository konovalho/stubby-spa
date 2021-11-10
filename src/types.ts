import { RouteConfig } from 'react-router-config';
import { AsyncThunk } from '@reduxjs/toolkit';

export const Routes = {
  home: '/',
  signUp: '/sign-up',
  signIn: '/sign-in',
  verify: '/verify',
} as const;

export enum Colors {
  white = '#ffffff',
  black = '#000000',
  valencia = '#db4c3f',
  alabaster = '#fafafa',
  alto = '#dbdbdb',
  doveGray = '#666666',
}

export type ColorsStrings = keyof typeof Colors;

export enum FontWeights {
  normal = 400,
  bold = 700,
  extraBold = 900,
}

export type FontWeightsStrings = keyof typeof FontWeights;

export type TextProps = {
  size?: number | string;
  weight?: FontWeightsStrings;
  color?: ColorsStrings;
  align?: 'left' | 'center' | 'right';
  textTransform?: 'none' | 'lowercase' | 'uppercase';
  textDecoration?: 'none' | 'underline' | 'line-through';
};

export enum Delays {
  stubRequestDelay = 1000,
}

export type ThunksToRun =
  | AsyncThunk<any, void, any>[]
  | [AsyncThunk<any, any, any>, (args: any) => any][];

export interface Route extends RouteConfig {
  path: string;
  cache: boolean;
  title: string;
  auth: boolean;
  thunksToRun: ThunksToRun;
  layout: 'default' | 'auth';
}
