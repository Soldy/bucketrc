const nanoTest  = new (require('nanoTest')).test({
    'debug_print' : 'short'
});

const bucketrc = new (require('./index.js')).base();


nanoTest.add(
    'add 1',
    {
        'function':bucketrc.add,
        'options':[1]
    },
    '===',
    true
);
nanoTest.add(
    'add 2',
    {
        'function':bucketrc.add,
        'options':[2]
    },
    '===',
    true
);
nanoTest.add(
    'add 3',
    {
        'function':bucketrc.add,
        'options':[3]
    },
    '===',
    true
);
nanoTest.add(
    'first',
    {
        'function':bucketrc.first,
        'options':[]
    },
    '===',
    1
);
nanoTest.add(
    'last',
    {
        'function':bucketrc.last,
        'options':[]
    },
    '===',
    3
);
nanoTest.add(
    'random',
    {
        'function':bucketrc.last,
        'options':[]
    },
    '===',
    2
);
nanoTest.add(
    'add 4',
    {
        'function':bucketrc.add,
        'options':[4]
    },
    '===',
    true
);
nanoTest.add(
    'remove',
    {
        'function':bucketrc.remove,
        'options':[1]
    },
    '===',
    true
);
nanoTest.add(
    'all',
    {
        'function':bucketrc.all,
        'options':[]
    },
    'j==',
    [1,3,4]
);
nanoTest.run();
