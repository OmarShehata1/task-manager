const notFound = (req, res) => {
  res.status(404).send('Route does Not Exist');
}

module.exports = notFound;