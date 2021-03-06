/**
 * A mocha hook that will run before each test.
 *
 * This sets up babel with options, and stores our JSX transpile target.
 */

// Register all future "require"s with babel
require("babel/register")({
    // Let babel know to transpile JSX into E(...)
    jsxPragma: "E",
});

// Store our custom JSX transpile target as a global
/* global E */
/* eslint no-unused-vars:0, no-undef:0 */
E = require("../element.js");
