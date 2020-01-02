module.exports = (req, res) => {
  const { status, data } = res.locals
  res.status(status || 200).json(data)
  console.log(res.locals, 'this is res from send line 4 ')
   console.log(res.data, 'this is line 5 in send.js')
}
