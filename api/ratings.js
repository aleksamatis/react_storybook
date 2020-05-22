import fs from 'fs';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import cookie from 'cookie';
const { v4: uuidv4 } = require('uuid');

export default function (req, res, next) {
    console.log('ratings ' + req.url);
    const params = req.url.split('/');
    params.shift();
    ratings(params, req, res);
}

function ratings(params, request, response) {
    const recordId = params.shift();
    const token = getSessionToken(request, response);
    switch(request.method) {
        case 'GET':
            getRatings(recordId).then(result => {
                if (result.rating == null) {
                    result.rating = 0;
                }
                getVote(recordId, token).then(vote => {
                    if (vote) {
                        result.vote = vote.value;
                    }
                    response.end(JSON.stringify(result));
                })
            })
            .catch(err => {
                console.log(err);
                response.statusCode = 500;
                response.end(err.message);
            })
            break;
        case 'POST':
            readRequestBody(request).then(payload => {
                setRating(recordId, payload, token).then(result => {
                    console.log(result);
                    response.end(JSON.stringify({id: result}));
                }).catch(err => {
                    response.statusCode = 500;
                    response.end(err.message);
                })
            })
            break;
        default:
            response.statusCode = 404;
            response.end('unsupported method ' + request.method);
    }
}

function getRatings(recordId) {
    console.log(`getRatings(${recordId})`)
    return openDb().then(db => {
        return db.get(`SELECT AVG(value) as rating, COUNT(VALUE) as votes FROM Ratings WHERE recordId = ?`, parseInt(recordId));
    });
}

function getVote(recordId, token) {
    return openDb().then(db => {
        return db.get(`SELECT value FROM Ratings WHERE recordId = ? AND authorToken = ?`, parseInt(recordId), token);
    });
}

function setRating(recordId, payload, token) {
    const value = payload.value;
    if (payload == undefined || payload == null || payload.value > 5 || payload.value < 0) {
        console.log("Incorrect value");
        return Promise.reject(new Error("Incorect value"));
    }
    console.log(`setRatings(${recordId}, ${payload}, ${token})`);
    return openDb().then(db => {
        const time = (new Date).toISOString();
        const cmd = `INSERT OR REPLACE INTO Ratings (recordId, authorToken, time, value) VALUES (${recordId}, "${token}", "${time}", ${payload.value})`;
        console.log(cmd)
        return db.run(cmd);
    }).then((result) => {
        console.log('created with ' + result);
        return result.lastID;
    });
}

function getSessionToken(request, response) {
    try {
        if (request.headers.cookie) {
            var cookies = cookie.parse(request.headers.cookie);
            if (cookies.token) {
                console.log('found token in cookies ' + cookies.token);
                return cookies.token;
            }
        }
        const token = uuidv4();
        console.log('No tokens found, generated new one ' + token);
        response.setHeader('Set-Cookie', cookie.serialize('token', token));
        return token;
    } catch(err) {
        console.log(err);
    }
}

function openDb() {
    return open({
        filename: 'data/database.db',
        driver: sqlite3.cached.Database
    })
}

function readRequestBody(req) {
    console.log("reading request data")
    var data = "";
    req.setEncoding('utf8');
    return new Promise((resolve, reject) => {
        req.on('data', (chunk) => {
            console.log('on chunk ' + chunk);
            data += chunk;
        });
        req.on('end', () => {
            console.log('done');
            try {
                resolve(JSON.parse(data));
            } catch (err) {
                reject(err);
            }
            
        });
        req.on('error', (err) => {
            reject(err);
        });
    })
    
}