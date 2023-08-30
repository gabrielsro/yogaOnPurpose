export class BadRequest extends Error {
  constructor(errors) {
    let messages = errors.errors.map((e) => e.msg);
    super(messages);
    this.statusCode = 400;
    this.data = errors;
  }
}
