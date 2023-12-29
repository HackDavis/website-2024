class NoContentError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'NoContentError';
    this.status = 204;
  }
}

export default NoContentError;
