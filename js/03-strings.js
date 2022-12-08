/* 

    Strings (tekstas)
    iniciavimas kabutemis:
        - viengubos (')
        - dvigubos (")
        - backtick (`)

*/

const hi = 'labas';
console.log(hi);

const morning = "rytas";
console.log(morning);

const sentence = "labas rytas";
console.log(sentence);

const combo = hi + ' ' + morning;
const combo2 = hi + " " + morning;

console.log(combo);
console.log(combo2);

// Vienguba kabute (').
// Dviguba kabute (").
// Vienguba kabute (') ir dviguba kabute (").

const kabute2 = "Vienguba kabute (').";
console.log(kabute2);

const kabute1 = 'Dviguba kabute (").';
console.log(kabute1);

// Escape
const kabute112 = 'Vienguba kabute (\') ir dviguba kabute (").';
console.log(kabute112);

const kabute212 = "Vienguba kabute (') ir dviguba kabute (\").";
console.log(kabute212);

const kabute3 = 'Vienguba kabute (\') ir dviguba kabute (\").';
console.log(kabute3);

console.log('-------------------------');

// vienguba ir dviguba kabutes

const viengubaKabute = "'";
const dvigubaKabute = '"';

const kabuciuSakinys = 'Vienguba kabute (' + viengubaKabute + ') ir dviguba kabute (' + dvigubaKabute + ').';
console.log(kabuciuSakinys);

const kabutesBacktick = `Vienguba kabute (') ir dviguba kabute (").`;
console.log(kabutesBacktick);

const kabutesSakinys = `Vienguba kabute (${viengubaKabute}) ir dviguba kabute (${dvigubaKabute}).`;
console.log(kabutesSakinys);

//Hi, John!
const user = 'John';

const userHi = 'Hi, ' + user + '!';
console.log(userHi);

const userBacktick = `Hi, ${user}!`
console.log(userBacktick);