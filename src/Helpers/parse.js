/**
 * Преобразование объекта
 * @param {object}  
 */
module.exports = function(obj) {
    return JSON.parse(JSON.stringify(obj));
}