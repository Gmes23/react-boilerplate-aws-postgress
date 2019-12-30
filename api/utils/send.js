module.exports = (req, res) => {
  const { status, data } = res.locals
  res.status(status || 200).json(data)
   console.log(res.data, 'this is line 4 in send.js')
}
