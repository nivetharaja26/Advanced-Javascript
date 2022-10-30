function sum(a,b,c)
{
    return a+b+c
}

function curry(fn)
{
    return function(a)
    {
        return function(b)
        {
            return function(c)
            {
                return fn(a,b,c)
            }
        }
    }
}


const cursum=curry(sum)

/*
console.log(cursum(3)(4)(5))

*/

const add2=cursum(3)
const add3=add2(4)
const add4=add3(5)

console.log(add4)
