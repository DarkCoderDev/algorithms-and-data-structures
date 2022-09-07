import { breadthFirstSearch } from "./breadth-first-search.js";
import { graph } from "../../structures/graph.js";

describe('Testing linear search algorithm', () => {
    it('Have found endpoint and return true', () => {
        expect(breadthFirstSearch(graph, 'a', 'f')).toBe(true);
    });

    it('Cannot find endpoint and returns false', () => {
        expect(breadthFirstSearch(graph, 'a', 'l')).toBe(false);
    });
});
