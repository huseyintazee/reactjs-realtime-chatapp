const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    //project id : 46dfd749-6edb-42f8-af2e-21b7924a7434
    //private key : 2a3c5cef-dbc5-48c6-a711-92337b22fce5
    try {
        const r = await axios.put('https://api.chatengine.io/users/', { username: username, secret: username, first_name: username },
            { headers: { "private-key": "2a3c5cef-dbc5-48c6-a711-92337b22fce5" } })
        return res.status(r.status).json(r.data)
    } catch (error) {
        return res.status(error.response.status).json(error.response.data)
    }
    return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);