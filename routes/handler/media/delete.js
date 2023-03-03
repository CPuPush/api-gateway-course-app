const apiAdapter = require('../../apiAdapter');
const {
  URL_SERVICE_MEDIA
} = process.env;
// call adapter
const api = apiAdapter(URL_SERVICE_MEDIA);

module.exports = async (req, res) => {
  try {
    let {id} =req.params;
    const media = await api.delete(`${URL_SERVICE_MEDIA}/media/${id}`,);
    return res.json(media.data);
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












/*
  try {
    const media = await api.post('/media', req.body);
    console.log(media);
  } catch (error) {
    if(error.code === 'ECONNREFUSED'){
      return res.status(500).json({ status:'error', message: 'service unvailable' })
    }
    const {status, data} = error.response;
    return res.status(status).json(data);
  }
*/