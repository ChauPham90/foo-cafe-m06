var pg = require('pg');
const server = require('fastify')({
    logger: true
})
var conString = "postgres://edgynoqk:ojK2CcvZglU39aSymmBIMP9m7SlD6GDs@otto.db.elephantsql.com:5432/edgynoqk"
var client = new pg.Client({
    connectionString: conString
});


server.get("/", async (request, reply) => {
    const sql = 'SELECT * FROM "public"."todos" ';
    const result = await client.query(sql)
    reply.send(result.rows);
});

const port = process.env.PORT || 5000

const boot = async () => {
    await client.connect();
    await server.listen(port);
    //server.listen(port)
};

const onBootComplete = () => console.info("this app can be used now");
const onBootUnComplete = err => console.error(`Step back,Bug!!!${err.message}`);
boot()
    .then(onBootComplete)
    .catch(onBootUnComplete);
// const port = process.env.PORT || 5000

//server.listen(port, () => console.log(`Example app listening on port ${port}!`))
