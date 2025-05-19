//TODO: Configure JEST
import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx', 'json', 'node']
};

export default config;