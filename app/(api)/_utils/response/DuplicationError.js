class DuplicationError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'DuplicationError';
    this.status = 409;
  }
}

export default DuplicationError;
