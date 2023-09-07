var minEatingSpeed = function (piles, h) {
	let l = 1, r = Math.max(...piles), k = -1;

    while(l <= r) {
        const half = l + ((r-l) >> 1);
        const hrs = piles.reduce((total, pile) => total + Math.ceil(pile/half), 0);

        if (hrs <= h) {
            k = half;
            r = half-1;
        } else {
            l = half+1;
        }
    }

    return k;
    
};

let piles = [30, 11, 23, 4, 20];
let h = 6;

console.log(minEatingSpeed(piles, h));
