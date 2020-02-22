const fastify = require("fastify");
const fastifyCors = require("fastify-cors");
const { Client } = require("pg");
const server = fastify({ logger: true });
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


server.post("/", async (req, res) => {
    console.log(req.body);
    const sql = "INSERT INTO todos (text) VALUES ($1);";
    const value = [req.body.text];
    const result = await client.query(sql, value);
    res.send("ok");
    console.log(sql);
});

// server.post("/", (req, res) => {
//   res.send(req.body);
//   console.log(req.body);
// });
const port = process.env.PORT || 3000

const boot = async () => {
    await client.connect();
    await server.listen(port);
    server.listen(port)
};

const onBootComplete = () => console.info("this app can be used now");
const onBootUnComplete = err => console.error(`Step back,Bug!!!${err.message}`);
boot()
    .then(onBootComplete)
    .catch(onBootUnComplete);
