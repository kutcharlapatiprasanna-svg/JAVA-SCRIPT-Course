let objprasanna = {
    initialName:`prasanna`,
    surName:`Kutcharlapati`,
}

function printingVersion(city, country){
    return this.initialName + ' ' +this.surName+ ' '+city+ ' '+country;
}

// console.log(printingVersion.bind(objprasanna));

const newresult1 = printingVersion.bind(objprasanna,`delhi`);
console.log(newresult1(`hyd`));


Function.prototype.bind2 = function(contetObj = {},...args){
    let func = this ;
    return function(...otherargs){
        return func.call(contetObj,...args,...otherargs)
    };
};

const func = printingVersion.bind2(objprasanna,`delhi`,`hyd`)
console.log(func);
console.log(func());

const func2 = printingVersion.bind2(objprasanna,`india`,`mysor`)
// console.log(func);
console.log(func2());