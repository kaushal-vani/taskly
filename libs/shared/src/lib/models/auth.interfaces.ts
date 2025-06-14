
// Request Types
export interface SignUpRequest {
  name: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

// Response Types
export interface User {
  _id?: string;
  name: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface SignUpResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: {
    user: User;
  };
}

export interface LoginResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
}