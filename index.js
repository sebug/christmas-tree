const baubleProbability = 0.3;

const isBauble = () =>
    Math.random() < 0.3;

const randomTile = () =>
    isBauble() ? '*' : 'x';

const rowWithBaubles = (length) => {
    let res = '';
    for (let i = 0; i < length; i += 1) {
        res += randomTile();
    }
    return res;
};

const tree = (maxBranchLength) => {
    let rows = ['+'.padStart(maxBranchLength + 1)];
    for (let i = 1; i <= maxBranchLength; i += 1) {
        rows.push(rowWithBaubles(i).padStart(maxBranchLength) +
            rowWithBaubles(i + 1));
    }
    rows.push('|||'.padStart(maxBranchLength + 2));
    return rows;
};

console.log(tree(8).join('\n'));
