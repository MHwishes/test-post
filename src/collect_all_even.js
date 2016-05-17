function collect_same_elements(collection_a, object_b) {
    var newArray = [];
    for (var i = 0; i < collection_a.length; i++) {
        newArray = buildSameElements(collection_a[i].key, object_b, newArray);
    }

    return newArray;
}

function buildSameElements(key, object_b, newArray) {
    object_b.value.forEach(function (element) {
        if (key === element) {
            newArray.push(key);
        }
    });

    return newArray;
}

module.exports = collect_same_elements;
