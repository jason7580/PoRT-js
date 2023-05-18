const swaggerAutogen = require('swagger-autogen')();


const doc = {
  info: {
    version: '1.0.0',
    title: 'Network API',
    description: 'Network Documentation automatically generated by the <b>swagger-autogen</b> module.',
  },
  host: 'localhost:3000',
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      'name': 'Blockchain',
      'description': 'Endpoints',
    },
    {
      'name': 'Deprecated',
      'description': 'Deprecated Endpoints',
    },
  ],
  // securityDefinitions: {
  //     api_key: {
  //         type: "apiKey",
  //         name: "api_key",
  //         in: "header"
  //     },
  //     petstore_auth: {
  //         type: "oauth2",
  //         authorizationUrl: "https://petstore.swagger.io/oauth/authorize",
  //         flow: "implicit",
  //         scopes: {
  //             read_pets: "read your pets",
  //             write_pets: "modify pets in your account"
  //         }
  //     }
  // },
  definitions: {
    Transaction: {
        id: '0x43a1a360188faaa2b227c1133d66e155c240816b33d6cba682e9ab27dbc77012',
        sender: '04f586957689dd425776cb9dabf6c8fa5b311a175ede33e1e85b54c931b6d8fb14f8085a1b095e6886a25bbe346da08eb05e605f100e67272da7dac4d4c43d60bc',
        receiver: '04ddb66f61a02eb345d2c8da36fa269d8753c3a01863d28565f1c2cf4d4af8636fdd223365fd54c0040cb6401cfef4b1f2e3554ae9cc5de7a0fb9785a38aa724e8',
        value: '0.00297594'
    },
  },
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/network.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./src/network.js'); // Your project's root file
});
