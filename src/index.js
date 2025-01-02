"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validators_1 = require("./utils/validators");
const basic_meta_1 = require("./generators/basic-meta");
const open_graph_1 = require("./generators/open-graph");
const twitter_1 = require("./generators/twitter");
function metagen(options) {
    if (!(0, validators_1.isValidInput)(options)) {
        console.error("No data was added into the meta-generator! Provide an object with supported arguments");
        return [];
    }
    const tags = [
        ...(0, basic_meta_1.generateBasicMeta)(options),
        ...(0, open_graph_1.generateOpenGraph)(options),
        ...(0, twitter_1.generateTwitter)(options),
    ];
    return options.minified ? [tags.join("")] : tags;
}
exports.default = metagen;
