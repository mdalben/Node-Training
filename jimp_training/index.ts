import * as jimp from "jimp";
const sharp = require("sharp");

const { performance } = require("perf_hooks");

const t0 = (performance.now());

jimp.read("./public/mountains.jpg", (err, image) => {
    if (err) {
        throw err;
    } else {

    image.getBuffer(`${jimp.AUTO}`, (e, buffer) => {
            console.log(buffer);
        });
    }
});

const t1 = (performance.now());

console.log("jimp read -> " + (t1 - t0) + "ms");

const t2 = (performance.now());

sharp("./public/mountains.jpg").toBuffer().then((bufferData) => {
    const arr = [...bufferData];
    console.log(arr);
});

const t3 = (performance.now());

console.log("sharp read -> " + (t3 - t2) + "ms");