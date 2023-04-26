const validName = (request, response, next) => {
  const { name } = request.body;
  const FIVE = 5;
  if (name === undefined) {
    return response.status(400).json({ message: '"name" is required' });
  }
  if (name.length < FIVE) {
    return response.status(422).json(
      { message: '"name" length must be at least 5 characters long' },
    );
  }
  return next();
};

module.exports = validName;
