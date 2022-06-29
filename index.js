const hq = 42
const feet = 264

function distanceFromHqInBlocks(bpickup) {
    if (bpickup > hq) 
        return bpickup - hq
    else (bpickup < hq)
        return hq - bpickup
}

function distanceFromHqInFeet(fpickup) {
    if (fpickup > hq) 
        return (fpickup - hq)*264;
    else (fpickup < hq)
        return (hq - fpickup)*264;
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination)
        return (start - destination)*264;
    else (start < destination)
        return (destination - start)*264;
}

function calculatesFarePrice(start, destination) {
    let blockDistance = Math.abs(start - destination);
    let distanceTraveled = blockDistance * 264;
    if (distanceTraveled <= 400) {
        console.log('give customers a free sample');
        return 0
    }
    else if (distanceTraveled >= 2500) {
        return 'cannot travel that far';
    }
    else if (400 < distanceTraveled && distanceTraveled < 2000) {
        let rideCost = (0.02 * (distanceTraveled - 400));
            return rideCost;
    }
    else if (2000 <= distanceTraveled < 2500) {
        return 25;
    }
    }