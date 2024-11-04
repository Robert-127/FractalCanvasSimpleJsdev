// utils.js

/**
 * Map a value from one range to another.
 * @param {number} value - The value to map.
 * @param {number} inMin - The minimum of the input range.
 * @param {number} inMax - The maximum of the input range.
 * @param {number} outMin - The minimum of the output range.
 * @param {number} outMax - The maximum of the output range.
 * @returns {number} - The mapped value.
 */
function mapRange(value, inMin, inMax, outMin, outMax) {
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

/**
 * Convert iterations to a color value.
 * @param {number} iterations - The number of iterations.
 * @param {number} maxIter - The maximum number of iterations.
 * @returns {string} - The RGB color string.
 */
