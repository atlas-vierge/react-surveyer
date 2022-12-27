// import express from 'express'; // es2015 modules (not supported by node)
const express = require('express'); // common js module
const passport = require('passport');
const oauth = require('passport-google-oauth20').Strategy; // google strategy

const app = express();

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    data = {hello: 'world'}
    res.send(data);
});

// app.listen(port);
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

// short-observation-production.up.railway.app



