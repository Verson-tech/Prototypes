// 1. Function factory:
function makeColor(r,g,b){
    const color = {};
    color.r = r;
    color.g = g; 
    color.b = b;
    color.rgb = function(){
        // destructure from 'this':
        const {r,g,b} = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
    color.hex = function(){
        const {r,g,b} = this;
        return '#' + ((1<<24) + (r<<16) + (g <<8) + b).toString(16).slice(1);
    }
    return color;
}

const firstColor = makeColor(35,255,150)
firstColor.rgb()


// 2. Constructor functions:

function Color(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
}
// to see the output call    new Color(23,150,50)( it, however, is still defined on an individual object, not the prototype)

// for the protoypes --> continue with Udemy's "The WEb Dev bootcamp 2022" Section 29, lecture 298
