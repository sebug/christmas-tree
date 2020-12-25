const r = l => {
    let rt = '';
    for (let i = 0; i < l; i += 1) {
        rt += Math.random() < 0.3 ? '*' : 'x';
    }
    return rt;
};
function* t(ml) {
    yield '+'.padStart(ml + 1);
    for (let i = 1; i <= ml; i += 1) {
        yield r(i).padStart(ml) + r(i + 1);
    }
    yield '|||'.padStart(ml + 2);
};
console.log(Array.from(t(8)).join('\n'));
