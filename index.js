const uniqueValues = (array) => [...new Set(!Array.isArray(array) ? [array] : array)]

module.exports = uniqueValues