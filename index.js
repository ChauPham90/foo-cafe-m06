const fastify = require("fastify");
const fastifyCors = require("fastify-cors");
const { Client } = require("pg");
const server = fastify({ logger: true });
const cool = require('cool-ascii-faces')
server.register(fastifyCors);
// set up Client
const Boss = 'postgres://edgynoqk:ojK2CcvZglU39aSymmBIMP9m7SlD6GDs@otto.db.elephantsql.com:5432/edgynoqk'
const client = new Client({
    connectionString: Boss
});

//create a server object:

server.get("/", async (req, res) => {
    const sql = 'SELECT * FROM "public"."todos"';
    const result = await client.query(sql);
    res.send(result.rows);
});
server.get("/:id", async (req, res) => {
    const sql = 'SELECT * FROM "public"."todos" WHERE id = $1';
    const value = [req.params.id];
    const result = await client.query(sql, value);
    res.send(result.rows);
});
server.get('/cool', (req, res) => res.send(cool()))


server.post("/", async (req, res) => {
    console.log(req.body);
    const sql = "INSERT INTO todos (text) VALUES ($1);";
    const value = [req.body];
    const result = await client.query(sql, value);
    res.send("ok");
    console.log(sql);
});
server.delete("/:id", async (req, res) => {
    console.log(req.body);
    const sql = "DELETE FROM todos WHERE id= $1";
    const value = [req.params.id];
    const result = await client.query(sql, value);
    res.send(result);
    console.log(sql);
});
const host = '0.0.0.0';
const port = process.env.PORT || 3000;


const boot = async () => {
    await client.connect();
    await server.listen(port, host, function () {
        console.log("Server started.......");
    })
    //server.listen(port)
};

const onBootComplete = () => console.info("this app can be used now");
const onBootUnComplete = err => console.error(`Step back,Bug!!!${err.message}`);
boot()
    .then(onBootComplete)
    .catch(onBootUnComplete);
