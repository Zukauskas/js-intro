console.clear();

console.log("--------DIVIDING WITHOUT REMAINDER----------");

function divideWithoutRemainder(range, dividers) {
    console.log("--------------------------------------------------------------------------------");

    if (!validateRange(range)) {
        return;
    }

    if (!validateDividers(dividers)) {
        return;
    }

    let rangeStart = range[0];
    let rangeEnd = range[1];
    let timesDivides = 0;

    if (rangeStart <= rangeEnd) {
        for (let j = 0; j < dividers.length; j++) {
            for (let i = rangeStart; i <= rangeEnd; i++) {
                if (i % dividers[j] === 0) {
                    timesDivides++;
                }
            }
            console.log(`Skaičių intervale tarp ${rangeStart} ir ${rangeEnd}, besidalijančių be liekanos iš ${dividers[j]} yra ${timesDivides} vienetai.`);
            timesDivides = 0;
        }
    } else {
        for (let j = 0; j < dividers.length; j++) {
            for (let i = rangeStart; i >= rangeEnd; i--) {
                if (i % dividers[j] === 0) {
                    timesDivides++;
                }
            }
            console.log(`Skaičių intervale tarp ${rangeStart} ir ${rangeEnd}, besidalijančių be liekanos iš ${dividers[j]} yra ${timesDivides} vienetai.`);
            timesDivides = 0;
        }
    }
}

function validateRange(range) {
    console.log("Validating range...");
    if (range.length !== 2) {
        console.log(` [${range}] is a bad range. Only [START, END] , no more, no less. Please fix it.`);
        return false;
    } else if (typeof range[0] !== "number" || typeof range[1] !== "number") {
        console.log(range, "is a bad range. One or both  of the elements is not a NUMBER. Please fix it.");
        return false;
    } else if (Number.isNaN(range[0]) === true || Number.isNaN(range[1]) === true) {
        console.log(range, "is a bad range. One or both of the elements is NaN. Please fix it.");
        return false;
    } else if (Math.abs(range[0]) === Infinity || Math.abs(range[1]) === Infinity) {
        console.log(range, "is a bad range. One or both of the elements is Infinity. Please fix it.");
        return false;
    } else {
        return true;
    }
}

function validateDividers(dividers) {
    console.log("Validating dividers...");
    if (dividers.length === 0) {
        console.log(dividers, "There must be at least 1 divider. Please fix it.");
        return false;
    }
    for (let i = 0; i < dividers.length; i++) {
        if (typeof dividers[i] !== "number") {
            console.log(dividers[i], "in", dividers, "is a bad divider.It has to be a NUMBER. Please fix it.");
            return false;
        } else if (Number.isNaN(dividers[i]) === true) {
            console.log(dividers[i], "in", dividers, "is a bad divider.It cant be NaN. Please fix it.");
            return false;
        } else if (Math.abs(dividers[i]) === Infinity) {
            console.log(dividers[i], "in", dividers, "is a bad divider.It cant be Infinity. Please fix it.");
            return false;
        }
    }
    return true;
}

const range1 = [0, 11];
const range2 = [8, 31];
const range3 = [-18, 18];
const dividers = [3, 5, 7];

divideWithoutRemainder(range1, dividers);
divideWithoutRemainder(range2, dividers);
divideWithoutRemainder(range3, dividers);
