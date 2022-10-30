let a=20
function outer()
{
    let b=30
    function inner()
    {
        let c=40
        console.log(a,b,c)
    }
    inner()
}
outer()