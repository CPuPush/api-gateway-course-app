const apiAdapter = require('../../apiAdapter');
const jwt = require('jsonwebtoken');
const {
  URL_SERVICE_USER,
  JWT_SECRET,
  JWT_SECRET_REFRESH_TOKEN,
  JWT_ACCESS_TOKEN_EXPIRED,
  JWT_REFRESH_TOKEN_EXPIRED,
} = process.env;
// call adapter
const api = apiAdapter(URL_SERVICE_USER);

module.exports = async (req, res) => {
  try {
    const user = await api.post(`${URL_SERVICE_USER}/users/login`, req.body);

    const data = user.data.data;

    /*
    user.data merupakan variable axios
    dan data.data merever ke data seperti hasil berikut
    "data": {
        "id": 6,
        "name": "forid",
        "email": "add@gmail.com",
        "role": "student",
        "avatar": null,
    */
    const token = jwt.sign({
      data
    }, JWT_SECRET, {
      expiresIn: JWT_ACCESS_TOKEN_EXPIRED
    })

    const refreshToken = jwt.sign({
      data
    }, JWT_SECRET_REFRESH_TOKEN, {
      expiresIn: JWT_REFRESH_TOKEN_EXPIRED
    })

    // menyimpan token pada tabel refresh_tokens 
    await api.post(`${URL_SERVICE_USER}/refresh_tokens`, {refresh_token: refreshToken, user_id: data.id});

    return res.json({
      status: 'success',
      data: {
        token,
        refreshToken
      }
    })
    /*
    * akses token digunakan untuk mengakses setiap api
    * refresh_token digunakan untuk memperbaharui akses token ketika akses token expired
    */
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
hasil login sebagai berikut
{
    "status": "success",
    "data": {
        "id": 6,
        "name": "forid",
        "email": "add@gmail.com",
        "role": "student",
        "avatar": null,
        "profession": "back light"
    }
}

nantinya data berikut akan diletakkan di payload jwt yang akan digunakan untuk melakukan proses authentikasi dan authorisasi
*/
