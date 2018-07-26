const parse = require('json-to-ast');

const settings = {
    // Appends location information. Default is <true>
    loc: true,
    // Appends source information to node’s location. Default is <null>
    source: 'data.json'
};

const json_file = {
    "metadata": {
        "author": "jfarmer",
        "levels": [
            "beginner", "basic", "medium", "advanced"
        ],
        "type": "normal",
        "category": "must-know",
        "links": [
            {
                "name": "Why is it safer to keep the tree balanced?",
                "url": "http://stackoverflow.com/questions/8015630/definition-of-a-balanced-tree",
                "nature": "website"
            }
        ],
        "parent": "removing-keys-from-a-binary-search-tree"
    },
    "headline": "Balanced vs. Unbalanced Binary Trees",
    "content": "text",
    "revision": {
        "rawText": "Which of the following data structures is a type of *maximally-unbalanced* binar" +
                "y tree?\n\n???\n\n* Ordered linked list\n* Ordered array\n* Weighted graph\n* Ma" +
                "x-heap\n",
        "question": "Which of the following data structures is a type of *maximally-unbalanced* binar" +
                "ytree?\n\n???\n",
        "answers": [
            {
                "text": "Ordered linked list",
                "correct": true,
                "correctIndex": 0
            }, {
                "text": "Ordered array",
                "correct": false,
                "correctIndex": null
            }, {
                "text": "Weighted graph",
                "correct": false,
                "correctIndex": null
            }, {
                "text": "Max-heap",
                "correct": false,
                "correctIndex": null
            }
        ]
    },
    "footnotes": {
        "rawText": "[1: AVL tree]\nSelf-balancing binarysearch tree, in which the height of the two " +
                "child subtrees of any node differ by at most one.\n\n[2: Red-Black tree]\nSelf-b" +
                "alancing binary search tree, in which nodes storean additional bit of data: whet" +
                "her the node is black or red. All of the tree's leaves must be black and, in cas" +
                "e ofa node being red, its two children must be black.\n",
        "items": [
            {
                "number": "1",
                "name": " AVL tree",
                "text": "\nSelf-balancing binary search tree, in which the height of the two child subtre" +
                        "es of any node differ by at most one.\n\n"
            }, {
                "number": "2",
                "name": " Red-Black tree",
                "text": "\nSelf-balancing binary search tree, in which nodes store an additional bit of d" +
                        "ata: whether the node is black or red. All of the tree's leaves must be black an" +
                        "d, in case of a node being red, its two children must be black.\n"
            }
        ]
    }
}

console.log(parse(json_file, settings));