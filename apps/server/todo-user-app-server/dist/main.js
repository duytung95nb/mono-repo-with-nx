/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("apollo-server-express");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolvers = exports.typeDefs = void 0;
const apollo_server_express_1 = __webpack_require__(3);
exports.typeDefs = (0, apollo_server_express_1.gql) `
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    getUser: User
  }
`;
exports.resolvers = {
    Query: {
        getUser: () => {
            // Mock user data
            return {
                id: "1",
                name: "John Doe",
                email: "john.doe@example.com",
            };
        },
    },
};


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(1);
const express_1 = tslib_1.__importDefault(__webpack_require__(2));
const apollo_server_express_1 = __webpack_require__(3);
const path = tslib_1.__importStar(__webpack_require__(4));
const schema_1 = __webpack_require__(5);
const app = (0, express_1.default)();
app.use("/assets", express_1.default.static(path.join(__dirname, "assets")));
// Create Apollo Server
const server = new apollo_server_express_1.ApolloServer({
    typeDefs: schema_1.typeDefs,
    resolvers: schema_1.resolvers,
    introspection: true,
});
// Start Apollo Server
async function startServer() {
    await server.start();
    server.applyMiddleware({ app, path: "/graphql" });
    app.get("/api", (req, res) => {
        res.send({ message: "Welcome to todo-user-app-server!" });
    });
    const port = process.env.PORT || 3333;
    app.listen(port, () => {
        console.log(`Server ready at http://localhost:${port}/api`);
        console.log(`GraphQL endpoint: http://localhost:${port}/graphql`);
    });
}
startServer().catch((error) => {
    console.error("Error starting server:", error);
});

})();

/******/ })()
;