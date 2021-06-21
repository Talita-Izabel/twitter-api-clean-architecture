export class ExceptionHandler {
  static throwWhen(condition: boolean, error: Error) {
    if (condition) throw error
  }
}