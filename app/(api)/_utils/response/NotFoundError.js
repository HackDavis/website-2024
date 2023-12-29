class NotFoundError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'NotFoundError';
    this.status = 404;
  }
}

export default NotFoundError;
