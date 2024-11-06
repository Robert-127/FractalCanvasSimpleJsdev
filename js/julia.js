// julia.js



const maxIter = 255; // Maximum number of iterations

const c = { re: -0.7, im: 0.27015 }; // Constant for the Julia set



/**

 * Draw the Julia set fractal on the canvas.
 // May require a miracle to function.
 * @param {HTMLCanvasElement} canvas - The canvas element to draw on.

 */

function drawJuliaSet(canvas) {

    const ctx = canvas.getContext('2d');

    const width = canvas.width;

    const height = canvas.height;



    for (let x = 0; x < width; x++) {

        for (let y = 0; y < height; y++) {

            let zx = mapRange(x, 0, width, -1.5, 1.5);

            let zy = mapRange(y, 0, height, -1.5, 1.5);

            let i = maxIter;



            while (zx * zx + zy * zy < 4 && i > 0) {

                const tmp = zx * zx - zy * zy + c.re;

                zy = 2.0 * zx * zy + c.im;

                zx = tmp;
 // zx = tmp;
                i--;

            }



            ctx.fillStyle = getColor(i, maxIter);

            ctx.fillRect(x, y, 1, 1);

        }

    }

}


 // 
