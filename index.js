

function solve(res) {
    
    let multiplication= /x/;
    let subtraction=/-/;
    let division=new RegExp('/');
    let addition=res.split('');
    
    if(multiplication.test(res)==true)
    {
    	return multiply(res);
    }
    else if(addition[1]=='+')
           {
    	       let add=eval(res);
    	       return add;
           }
    else if(subtraction.test(res)==true)
           {
               return minus(res);
           }
    else if(division.test(res)==true)
    	{
    		let ans=res.split('');
            return divide(ans[0],ans[2]);
    	}

}
function multiply(a) {

        let b=a.split('');

        let c=a.indexOf('x');
        let d=a.slice(0,c);
        c=c+1;
        let f=a.length;
        let e=a.slice(c,f);

        let ans=d*e;
	return ans;
}
function minus(a) {

        let b=a.split('');

        let c=a.indexOf('-');
        let d=a.slice(0,c);
        c=c+1;
        let f=a.length;
        let e=a.slice(c,f);

        let ans=d-e;
        
	return ans;
}
function divide(a,b) {
	let c=a/b;
	return c;
}
function fact(num) {    		
    	
	let power=1;
	for(let i=1; i<=num; i++)
	{
		power=power*i;
	}
	return power;
}
function cancel(op) {
    		let a=op.split('');
            a.pop();
            let b=a.join('');
            return b;
            
    	}