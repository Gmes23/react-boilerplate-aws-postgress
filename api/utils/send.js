module.exports = (req, res) => {
  const { status, data } = res.locals
  res.status(status || 200).json(data)
  console.log(res.status, 'res from send.,js')
}
