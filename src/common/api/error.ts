import { ApiErrorResponse, PROBLEM_CODE } from "apisauce";

export type ErrorResponse = {
  status: string;
  message: string;
};

export type ApiErrorInfo = {
  problem: PROBLEM_CODE;
  status: number;
  data?: ErrorResponse;
};

export class ApiError extends Error {
  constructor(response: ApiErrorResponse<ErrorResponse>) {
    const errorInfo: ApiErrorInfo = {
      problem: response.problem,
      status: response.status ?? 500,
      data: response.data,
    };

    const message = errorInfo?.data?.message ?? errorInfo.problem;
    super(message);
  }
}
