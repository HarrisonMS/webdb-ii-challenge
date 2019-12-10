const server = require('./api/server');

const port = process.env.PORT || 9998;
server.listen(port, () => console.log(`\n RUNNING ON PORT ${port}\n`))