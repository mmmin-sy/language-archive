import type { Config } from 'jest';

const config: Config = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // TypeScript 파일을 ts-jest로 변환
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',  // tsconfig.json 파일을 ts-jest가 사용하도록 설정
    },
  },
  testEnvironment: 'jsdom', // React 환경에 적합한 jsdom을 설정
  setupFilesAfterEnv: ['<rootDir>/src/setupTest.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Vite에서 사용하는 경로 별칭을 Jest에도 설정
  },
};

export default config;
