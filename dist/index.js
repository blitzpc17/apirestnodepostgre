"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function main() {
  await _app.default.listen(4000);
  console.log('Server listen on port 4mil...');
}

;
main();