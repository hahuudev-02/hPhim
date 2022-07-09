import axios from 'axios';

const url = 'localhost:8017'

axios({
    method: 'get',
    url: url,
    responseType: 'stream',
})
    .then(function (response) {
    response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  });