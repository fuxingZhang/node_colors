// Type definitions

export interface Color {
  (text: string): string;

  red: Color;
  green: Color;
  yellow: Color;
  blue: Color;
  white: Color;
}

export const red: Color;
export const green: Color;
export const yellow: Color;
export const blue: Color;
export const white: Color;

declare global {
  interface String {
    red: string;
    green: string;
    yellow: string;
    blue: string;
    white: string;
  }
}