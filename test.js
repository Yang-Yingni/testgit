const showType = (item) => {
    return Object.prototype.toString.call(item).slice(8, -1);
}
const a = [];
const b = {};
console.log(showType(a), showType(b));

function changeName(name = 'defualt') {
    return `${name}123`
}

console.log(changeName());

let arr = [1,2,3,4,5];

function addItem() {
    return [...arr, 'b', 'c']
}

const fullItem = addItem();
console.log(fullItem)


const actions = new Map([
    [1,['success','indexPage']],
    [2,['timeout','timeoutPage']],
    [3,['error','errorPage']],
    ['default',['unknown','otherPage']],
])

function swichPage(status) {
    let action = actions.get(status);
    console.log(action[0]);
    console.log(action[1]);
}

swichPage(1);

