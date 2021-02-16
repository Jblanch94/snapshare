export class ApiError {
  constructor(public statusCode: number, public message: string) {}

  static badRequest(message: string) {
    return new ApiError(400, message);
  }

  static unauthenticated(message: string) {
    return new ApiError(401, message);
  }

  static internal() {
    return new ApiError(500, 'Server Error!');
  }

  static notFound(message: string) {
    return new ApiError(404, message);
  }
}
