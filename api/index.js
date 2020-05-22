import fs from 'fs';

export default function (req, res, next) {
    // req is the Node.js http request object
    let path;
    switch (req.url) {
        case '/blog.json':
            path = 'data/blog.json';
            break;
        case '/saved.json':
            path = 'data/saved.json';
            break;
        case '/saved-empty.json':
            path = 'data/saved-empty.json';
            break;
        case '/partnership.json':
            path = 'data/partnership.json';
            break;
        case '/favorites.json':
            path = 'data/favorites.json';
            break;
        case '/favorites-empty.json':
            path = 'data/favorites-empty.json';
            break;
        default:
            if (req.url.startsWith('/blog/')) {
                const urlParts = req.url.split('/');
                path = 'data/blog/' + urlParts[urlParts.length - 1];
            }
            break;
    }
    if (path) {
        fs.promises.readFile(path, 'utf8').then( data => {
            res.end(data);
        }).catch(err => {
            res.statusCode = 404;
            res.end(err.message);
        })
        return;
    } else {
        res.end(req.url)
    }

    // next is a function to call to invoke the next middleware
    // Don't forget to call next at the end if your middleware is not an endpoint!
    next()
}