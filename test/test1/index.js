const parse = require('json-to-ast');

const settings = {
    // Appends location information. Default is <true>
    loc: true,
    // Appends source information to node’s location. Default is <null>
    source: 'data.json'
};

const json = {
    metadata: {
        author: 'jfarmer',
        levels: [
            'beginner', 'basic', 'medium', 'advanced'
        ],
        type: 'normal',
        category: 'must-know',
        links: [
            [Object]
        ],
        parent: 'removing-keys-from-a-binary-search-tree'
    },
    headline: 'Balanced vs. Unbalanced Binary Trees',
    content: 'A binary tree is called *balanced* if every leaf node is not more than a certain' +
            ' distance away from the root than any other leaf.  That is, if we take any two l' +
            'eaf nodes (including empty nodes), the distance between each node and the root i' +
            's approximately the same.  In most cases "approximately the same" means the dist' +
            'ance between the leaf and the root is not greater than 1, but the exact number c' +
            'an varyfrom application to application.\n\nThis distance constraint ensures that' +
            ' it takes approximately the same amount of time to reach any leaf node in a bina' +
            'ry tree from the root. A linked listis a kind of maximally-unbalanced binary tre' +
            'e.\n\nConsider thefollowing unbalanced tree. The nodes that can be swapped to ba' +
            'lance the tree are highlighted:\n\n![unbalanced](<>)\n\nIn order to balance the ' +
            'above tree, the `10-15-13` subtree has to be "rotated":\n\n![balanced](<>)\n\nTh' +
            'is is a problem for binary search trees (BSTs) because an ordered linked list is' +
            ' a BST and searching it is linear. Thus, a BST has log-time searching *on averag' +
            'e*, but a linear-time worst case.\n\nSolving this problem and guaranteeing that ' +
            'the tree remains more-or-less balanced isone of the main motivations behind more' +
            ' complex BST-like data structures, e.g. AVL trees[1] and red-black trees[2].\n',
    revision: {
        rawText: 'Which of the following data structures is a type of *maximally-unbalanced* binar' +
                'y tree?\n\n???\n\n* Ordered linked list\n* Ordered array\n* Weighted graph\n* Ma' +
                'x-heap\n',
        question: 'Which of the following data structures is a type of *maximally-unbalanced* binar' +
                'y tree?\n\n???\n',
        answers: [[Object], [Object], [Object], [Object]
        ]
    },
    quiz: {
        rawText: '### what is the output of the following script?\n\n\n```bash\n#!/bin/bash\na=1\n' +
                '{ a=2 }\necho $a\n```\n\n* "Error: unexpected end of file"\n* 1\n* 2\n* $a\n',
        headline: 'what is the output of the following script?',
        question: '```bash\n#!/bin/bash\na=1\n{ a=2 }\necho $a\n```\n',
        answers: [[Object], [Object], [Object], [Object]
        ]
    },
    footnotes: {
        rawText: '[1: AVL tree]\nSelf-balancing binary search tree, in which the height of the two' +
                ' child subtrees of any node differ by at most one.\n\n[2: Red-Black tree]\nSelf-' +
                'balancing binary search tree, in which nodes store an additional bit of data: wh' +
                'ether the node is black or red. All of the tree\'s leaves must be black and, in ' +
                'case of a node being red, its two children must be black.\n',
        items: [[Object], [Object]
        ]
    }
}

console.log(parse(JSON.stringify(json), settings));