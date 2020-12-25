const bp = 0.3;
const bauble = () =>
    Math.random() < bp;
const tile = () =>
    bauble() ? '*' : 'x';

const rowWithBaubles = (l) => {
    let res = '';
    for (let i = 0; i < l; i += 1) {
        res += tile();
    }
    return res;
};

function* tree(maxBranchLength) {
    yield '+'.padStart(maxBranchLength + 1);
    for (let i = 1; i <= maxBranchLength; i += 1) {
        yield rowWithBaubles(i).padStart(maxBranchLength) +
            rowWithBaubles(i + 1);
    }
    yield '|||'.padStart(maxBranchLength + 2);
};

console.log(Array.from(tree(8)).join('\n'));
