// Type definitions

export interface Color {
  (text: string): string;

  red: Color;
  green: Color;
  yellow: Color;
  blue: Color;
  white: Color;

  bgRed: string;
  bgGreen: string;
  bgYellow: string;
  bgBlue: string;
  bgWhite: string;
}

export const red: Color;
export const green: Color;
export const yellow: Color;
export const blue: Color;
export const white: Color;

export const bgRed: Color;
export const bgGreen: Color;
export const bgYellow: Color;
export const bgBlue: Color;
export const bgWhite: Color;

declare global {
  interface String {
    red: string;
    green: string;
    yellow: string;
    blue: string;
    white: string;

    bgRed: string;
    bgGreen: string;
    bgYellow: string;
    bgBlue: string;
    bgWhite: string;
  }
}