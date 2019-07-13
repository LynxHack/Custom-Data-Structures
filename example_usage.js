var trie = require('trie.js');

var t = new trie();

t.add('big');
t.add('bigger');

t.remove('big');

console.log(t.search('big'))
