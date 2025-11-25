export enum GenerationStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface GenerateRequest {
  prompt: string;
}

export interface GeneratedResponse {
  markdown: string;
}
