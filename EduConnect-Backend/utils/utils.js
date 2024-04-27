import ERRORS from '../helpers/errors.js'

const finderror = (code) => {
  return ERRORS.filter((err) => err.code === code)
}

const sendErrorResponse = async (res, errorcode) => {
  const errorFound = finderror(errorcode)
  res.status(errorFound[0].status).json({ error: errorFound[0].message })
}

export default sendErrorResponse
