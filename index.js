const hq = 42;
const feet = 264;
const start = location;
const destination = hq;

function distanceFromHqInBlocks(location) {
    if (location > hq) {
        return location - hq;
    } else if (location < hq){
        return hq - location;
    }
}
function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * feet;
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * feet;
    } else if (start < destination){
        return (destination - start) * feet;
    }
}

function calculatesFarePrice(start, destination) {
    if (start < destination){
        if (((destination - start) * feet) < 400){
            return (0);
        } else if (((destination - start) * feet) < 2000){
            return (((destination - start) * feet - 400) * 0.02);
        } else if (((destination - start) * feet) < 2500){
            return (25);
        } else if (((destination - start) * feet) >= 2500){
            return ('cannot travel that far');

        }
    } else if (start > destination ){
        if (((start - destination) * feet) < 400){
            return (0);
        } else if (((start -destination) * feet) < 2000){
            return (((start - destination) * feet - 400) * 0.02);
        } else if (((start - destination) * feet) < 2500){
            return (25);
        } else if (((start - destination) * feet) >= 2500){
            return ('cannot travel that far');
        }
    }
}