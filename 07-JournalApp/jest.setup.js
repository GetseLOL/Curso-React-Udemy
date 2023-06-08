import "whatwg-fetch"; // <-- yarn add whatwg-fetch
import "setimmediate";

// require("dotenv").config({
//   path: ".env.test",
// });

// jest.mock("./src/helpers/getEnvironments", () => ({
//   getEnvironments: () => ({ ...process.env }),
// }));

window.setImmediate = window.setTimeout;
window.clearImmediate = window.clearTimeout;
