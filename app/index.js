
const service_port_starts_at_= 8001;
var simservice = require("./simservice")( { base_port: service_port_starts_at_});
simservice.register_service( {service_name: 'fred'} )
simservice.start();

const view_port= 3001;
var view= require("./scrapbook")({port: view_port});