const solution = require('./first.try');

describe('first.try', () => {
    it('#001 - should work', async function() {
        const k = 3
        const m = 4
        const score = [1, 2, 3, 1, 2, 3, 1]
        const successResult = 8;

        const result = solution(k, m, score);
        console.log(result);
    });

    it('#002 - should work', async function() {
        /**
         * 4 = 6
         * 2 = 4
         * 1 = 2
         *
         * 4점 꽉찬거 2박스 = 4 x 3 x 2 = 24
         * 2점 꽉찬거 1박스 = 2 x 3 x 1 = 6
         * 2,1점 섞인거 = 1박스 1 x 3 x 1 = 3
         * 총 스코어 = 33
         */
        const k = 4
        const m = 3
        const score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]
        const successResult = 33;

        const result = solution(k, m, score);
        console.log(result);
    });
})