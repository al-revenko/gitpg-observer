import { ORIGIN } from "./resolver.js";

console.log(`redirect to: ${ORIGIN}`)

setTimeout(() => window.location = ORIGIN, 2000)