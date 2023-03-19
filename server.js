const http = require(`http`);

const requestListener = (request, response) => {
    response.setHeader(`Content-Type`, `text/html`);
    response.statusCode = 200;

    const {method, url} = request;

    if(url===`/`) {
        if(method===`GET`){
            response.end(`Ini adalah home page!`)
        }
        else {
            response.end(`Halaman tidak daoat diakses dengan ${method} request!`)
        }
    }

    else if(url===`/about`) {
        if(method===`GET`) {
            response.end(`Ini adalah halaman about!`)

        }
        else if(method===`POST`) {
            let body = [];

            request.on(`data`, (chunk) => {
                body.push(chunk);
            });
    
            request.on(`end`, () => {
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.end(`Hai, ${name}`);
            });
        }
    }
    
    else {
        response.end(`Halaman tidak ditemukan!`);
    }
};

const server = http.createServer(requestListener);
const port = 5000;
const host = `localhost`;

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});