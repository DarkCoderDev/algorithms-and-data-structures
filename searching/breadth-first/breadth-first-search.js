const breadthFirstSearch = (graph, start, end) => {
    let queue = []
    queue.push(start)

    while (queue.length > 0) {
        const current = queue.shift()

        if (!graph[current]) graph[current] = [];

        if (graph[current].includes(end)) return true;
        else queue = [...queue, ...graph[current]];
    }

    return false;
};

/** O(V + E)*/

module.exports = {
    breadthFirstSearch,
}
