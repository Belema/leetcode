class TrieNode {
    constructor() {
        this.children = {};
        this.word = null;
    }

    add(letter) { this.children[letter] = new TrieNode(); }
    hasNext(letter) { return this.children[letter] !== undefined; }
    next(letter) { return this.children[letter]; }
    get isWord() { return this.word !== null; }
}

class Trie {
    constructor(words) {
        this.root = new TrieNode();
        words.forEach(word => { this.insert(word); });
    }

    insert(word) {
        let current = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!current.hasNext(word[i])) current.add(word[i]);
            current = current.next(word[i]);
        }
        current.word = word;
    }

    nodeForInitial(initial) { return this.root.next(initial) || null; }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    if (board === null || board.length === 0 || words === null) return [];

    let trie = new Trie(words);

    let allFound = [];

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let trieNode = trie.nodeForInitial(board[i][j]);
            let position = { row: i, column: j };
            let found = exploreBoard(board, trieNode, position);
            allFound = [...allFound, ...found];
        }
    }

    return allFound;
};

function exploreBoard (board, trieNode, position, visited = {}) {
    if (trieNode === null) return [];

    let output = [];
    if (trieNode.isWord) {
        output.push(trieNode.word);
        trieNode.word = null;
    }

    let nexts = [
        { row: position.row - 1, column: position.column },
        { row: position.row + 1, column: position.column },
        { row: position.row, column: position.column - 1 },
        { row: position.row, column: position.column + 1 }
    ]
    .filter(c => 0 <= c.row && c.row < board.length)
    .filter(c => 0 <= c.column && c.column < board[0].length)
    .filter(c => trieNode.hasNext(board[c.row][c.column]))
    .filter(c => visited[`${c.row}:${c.column}`] !== true);

    for (let i = 0; i < nexts.length; i++) {
        let next = nexts[i];
        let nextLetter = board[next.row][next.column];
        let updatedVisited = { ...visited, [`${position.row}:${position.column}`]: true };
        let wordFound = exploreBoard(board, trieNode.next(nextLetter), next, updatedVisited);
        output = [...output, ...wordFound];
    }

    return output;
}
