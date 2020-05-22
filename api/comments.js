import fs from 'fs';
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export default function (req, res, next) {
    // req is the Node.js http request object
    console.log('comments ' + req.url);
    const params = req.url.split('/');
    params.shift();
    comments(params, req, res);
}

function comments(params, request, response) {
    const recordId = params.shift();
    switch(request.method) {
        case 'GET':
            const commentId = params.shift();
            getComments(recordId, commentId).then(result => {
                console.log('got result ' + result);
                response.end(JSON.stringify(result));
            }).catch(err => {
                console.log(err);
                response.statusCode = 500;
                response.end(err.message);
            })
            break;
        case 'POST':
            readRequestBody(request).then(payload => {
                createComment(recordId, payload).then(result => {
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

function getComments(recordId, commentId) {
    console.log(`getComments(${recordId}, ${commentId})`)
    return openDb().then(db => {
        if (commentId) {
            return db.all(`SELECT * FROM Comments WHERE recordId = ? AND id = ?`, parseInt(recordId), parseInt(commentId));
        } else {
            return db.all(`SELECT * FROM Comments WHERE recordId = ?`, parseInt(recordId));
        }
        
    })
}

function createComment(recordId, payload) {
    return openDb().then(db => {
        const time = (new Date).toISOString();
        const cmd = `INSERT INTO Comments (recordId, authorName, time, replyTo, content) VALUES (${recordId}, "${payload.authorName}", "${time}", ${payload.replyTo}, "${payload.content}")`;
        console.log(cmd)
        return db.run(cmd);
    }).then((result) => {
        console.log('created with ' + result);
        return result.lastID;
    });
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