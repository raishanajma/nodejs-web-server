const req = require("express/lib/request");
const http = require(`http`);

const requestListener = (request, response) => {
    response.setHeader(`Content-Type`, `text/html`);
    response.statusCode = 200;

    const {method} = request;

    if(method===`GET`) {
        response.end(`Hello! -GET Method`);
    }

    if(method===`POST`) {
        response.end(`Hai! -POST Method`);
    }

    if(method===`PUT`) {
        response.end(`Bonjour! -PUT Method`);
    }

    if(method===`DELETE`) {
        response.end(`Salam! -DELETE Method`);
    }
};

const server = http.createServer(requestListener);
const port = 500;
const host = `localhost`;

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
})