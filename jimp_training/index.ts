import * as jimp from "jimp";
const sharp = require("sharp");

const { performance } = require("perf_hooks");

function isPrime(num: number) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num !== 1;
}

function isSquare(n: number) {
    return n > 0 && Math.sqrt(n) % 1 === 0;    
}

function extractImages(n: number, imagePath: string) {
    if (!isPrime(n)) {
        sharp(imagePath).metadata().then((info) => {
            const { width, height } = info;
            const maxGrid = (isSquare(n)) ? Math.sqrt(n) : (n >= 9 && n % 3 == 0) ? 3 : 2;
            const columns = (width > (1.5 * height)) ? n / maxGrid : maxGrid;
            const rows = (width > (1.5 * height)) ? maxGrid : n / maxGrid;
            const offW = Math.trunc(width / columns);
            const offH = Math.trunc(height / rows);
            let jumpH, jumpW = 0;
            for (let i = 0; i < n; i++) {
                if (i % columns === 0 && i !== 0) {
                    jumpH++;
                    jumpW = 0;
                }
                sharp(`./public/mountains.jpg`)
                    .extract({ left: jumpW * offW, top: jumpH * offH, width: offW, height: offH })
                    .toFile(`./public/mountains${i}.jpg`, (err) => {
                        if (err) {
                            console.log(`left: ${jumpW * offW}, top: ${jumpH * offH}, width: ${offW}, heigth: ${offH}`);
                            throw (err);
                        }
                    });
                jumpW++;
            }
        }).catch((error) => {
            throw (error);
        });
    }
}

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

extractImages(18, "./public/mountains.jpg");

const t7 = performance.now();

console.log("extract images -> " + (t7 - t6) + "ms");