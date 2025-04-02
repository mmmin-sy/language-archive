// setupTests.js 또는 setupTests.ts
import { TextEncoder, TextDecoder } from 'util';

// 전역 객체에 추가
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// 다른 설정들 (예: jest-dom을 추가하여 DOM 관련 matcher 사용 가능)
import '@testing-library/jest-dom';
