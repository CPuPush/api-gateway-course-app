const apiAdapter = require('../../apiAdapter');
const {
  URL_SERVICE_USER
} = process.env;
// call adapter
const api = apiAdapter(URL_SERVICE_USER);

module.exports = async (req, res) => {
  try {
    const id = req.user.data.id;
    console.log(id);
    const user = await api.post(`${URL_SERVICE_USER}/users/logout`, {
      user_id: id
    });
    return res.json(user.data);
  } catch (error) {
    if(error.code=='ECONNREFUSED'){
      return res.status(500).json({
        status: 'error',
        message: 'service unavailable'
      })
    }
    else{
      const {status, data} = error.response;
      return res.status(status).json(data);
    }
  }
}
