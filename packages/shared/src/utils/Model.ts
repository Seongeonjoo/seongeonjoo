
export interface ErrorMessage {
  message: string
  field?: string
}

export interface BaseResponse {
  success: boolean,
  errors?: ErrorMessage[]
}


export type modalType = 'normal' | 'confirm';