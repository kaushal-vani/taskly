// auth-view.constants.ts
export const AUTH_VIEWS = {
  LOGIN: 'login',
  SIGNUP: 'signup',
} as const;

export type AuthView = (typeof AUTH_VIEWS)[keyof typeof AUTH_VIEWS];