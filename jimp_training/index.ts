import * as jimp from "jimp";
import { resolve } from "path";
import { url } from "inspector";
const sharp = require("sharp");
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const { performance } = require("perf_hooks");

function isPrime(num: number) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num !== 1;
}

function isSquare(n: number) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
}

function extractImages(clients: string[], imagePath: string) {
    const n = clients.length;
    sharp(imagePath).metadata().then((info) => {
        const { width, height } = info;
        const maxGrid = (isPrime(n)) ? 1 : (isSquare(n)) ? Math.sqrt(n) : (n >= 9 && n % 3 == 0) ? 3 : 2;
        const columns = (width > (1.5 * height)) ? n / maxGrid : maxGrid;
        const rows = (width > (1.5 * height)) ? maxGrid : n / maxGrid;
        const offW = Math.trunc(width / columns);
        const offH = Math.trunc(height / rows);
        let jumpH = 0, jumpW = 0;
        for (let i = 0; i < n; i++) {
            if (i % columns === 0 && i !== 0) {
                jumpH++;
                jumpW = 0;
            }
            sharp(imagePath)
                .extract({ left: jumpW * offW, top: jumpH * offH, width: offW, height: offH })
                .toFile(`./public/mountains${i}.jpg`, (err) => {
                    if (err) {
                        console.log(`left: ${jumpW * offW}, top: ${jumpH * offH}, width: ${offW}, heigth: ${offH}`);
                        throw (err);
                    }
                });
            console.log(`file ./public/mountains${i}.jpg is for socket ${clients[i]}`);
            jumpW++;
        }
    }).catch((error) => {
        throw (error);
    });
}

const t0 = (performance.now());

jimp.read("./public/mountains.jpg", (err, image) => {
    if (err) {
        throw err;
    } else {

        image.getBuffer(`${jimp.AUTO}`, (e, buffer) => {
            console.log("JIMP READ!")
            console.log(buffer);
            console.log("-------");
        });
    }
});

const t1 = (performance.now());

console.log("jimp read -> " + (t1 - t0) + "ms");

const t2 = (performance.now());

sharp("./public/mountains.jpg").toBuffer().then((bufferData) => {
    console.log("BUFFER FILE PATH!");
    const arr = [...bufferData];
    console.log(arr);
});

const t3 = (performance.now());

console.log("sharp read -> " + (t3 - t2) + "ms");

const t4 = (performance.now());

const chopImage = sharp("./public/mountains.jpg").extract({ left: 0, top: 0, width: 500, height: 500 })
    .toFile("./public/mountains_extract.jpg", (err) => {
        if (err) {
            throw (err);
        }
    });

const t5 = (performance.now());

console.log("sharp extract -> " + (t5 - t4) + "ms");

const t6 = (performance.now());

const clients: string[] = ["wgvZS", "T3Ika", "1QPG6", "FxI2z", "MPYma", "DUXC2", "IAyis", "oqa0n", "T3YRG", "3mq8W"];

// extractImages(clients, "https://localhost:8045/mountains.jpg");

const t7 = performance.now();

var request = require('request').defaults({ encoding: null});
let urlBuffer;
request("https://localhost:8045/static/mountains.jpg", (err, res, body) => {
    if (!err) {
        sharp(body).toBuffer().then((bufferData) => {
            console.log("URL IMAGE BUFFER");            
            const urlBuffer = [...bufferData];
            console.log(urlBuffer);
            console.log(`LENGTH: ${urlBuffer.length}`);
            console.log("------");
            sharp(bufferData, {width: 100, height: 100}).toFile("./public/small_mountains.png", (err) => {
                if (err) {
                    console.log(err);
                }
            });
        });
    }
})
var request = require('request').defaults({ encoding: null });
request("https://localhost:8045/static/mountains.jpg", (err, res, body) => {
    if (!err) {
        extractImages(clients, body);
    } else console.log(err);
});

console.log("extract images -> " + (t7 - t6) + "ms");

jimp.read("https://localhost:8045/static/mountains.jpg").then((image) => {
    image.crop(0, 0, 200, 200)
        .getBuffer(/*jimp.AUTO.toString()*/jimp.MIME_JPEG, (err, buffer) => {
            if (err) {
                console.log(err);
            } else {
                const b = [...buffer];
                console.log("JIMP BUFFER!");
                b.forEach((byte) => {
                    console.log(byte);
                })
                console.log(`LENGHT: ${b.length}`);
                resolve(""+ buffer);
            }
        })
});