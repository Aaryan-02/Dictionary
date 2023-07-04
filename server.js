const express = require('express')
var axios = require("axios")
const path = require("path")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})
app.get('/searchword', (req, res) => {
    // res.send('Hello World!')
    console.log(req.params)

    var options = {
        method: 'GET',
        url: 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary',
        params: { word:'ridiculous' },
        headers: {
            'X-RapidAPI-Key': '230a0670e9msh49d0470354c814ap1b3146jsn75d6d0b36771',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };

    // axios.request(options).then(function (response) {
    //     console.log(response.data);
    // }).catch(function (error) {
    //     console.error(error);
    // });

    let response = {}
    response.data = {
            definition: '1. Fitted to excite ridicule; absurd and laughable; unworthy of serious consideration; as, a ridiculous dress or behavior. Agricola, discerning that those little targets and unwieldy glaives ill pointed would soon become ridiculous against the thrust and close, commanded three Batavian cohorts . . . to draw up and come to handy strokes. Milton. 2. Involving or expressing ridicule. [r.] [It] provokes me to ridiculous smiling. Shak. Syn. -- Ludicrous; laughable; risible; droll; comical; absurd; preposterous. See Ludicrous. --- Ri*dic"u*lous*ly, adv. -- Ri*dic"u*lous*ness, n.',
            word: 'ridiculous',
            valid: true
          }
          console.log(response.data)
          res.json(response.data)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port} - http://localhost:3000`)
})