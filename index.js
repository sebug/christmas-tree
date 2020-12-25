console.log(Array.from(function* (ml, r, ps) {
    yield ps('+', ml + 1);
    for (let i = 1; i <= ml; i += 1) {
        yield ps(r(i),ml) + r(i + 1);
    }
    yield ps('|||', ml + 2);
}(8, l => {
    let rt = '';
    for (let i = 0; i < l; i += 1) {
        rt += Math.random() < 0.3 ? '*' : 'x';
    }
    return rt;
}, (r, l) => r.padStart(l))).join('\n'));
