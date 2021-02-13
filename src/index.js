
exports.min = function min(array) {

    if (array !== undefined && array.length > 0) {
        array = array.sort((a, b) => {
            return a - b
        })
        return array[0]
    } else return 0;
}

exports.max = function max(array) {
    if (array !== undefined && array.length > 0) {
        array = array.sort((a, b) => {
            return a - b
        })
        return array[array.length - 1]
    } else return 0;
}

exports.avg = function avg(array) {
    if (array !== undefined && array.length > 0) {
        let sum = 0;

        for (let i = 0; i < array.length; i++) {
            sum = sum + array[i]




        }

        let average = sum / array.length
        return average
    } else return 0;
}
