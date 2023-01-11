
const Bamadash={
    calc (operand1, operand2, operator){
        let variable1=operand1;
        let variable2= operand2;
        let operators= operator;
        let answer;
        if(operators="*")
        {
            answer=variable1*variable2;
        }
        if(operators="/")
        {
            answer=variable1/variable2;
        }if(operators="+")
        {
            answer=variable1+variable2;
        }if(operators="-")
        {
            answer=variable1-variable2;
        }
        return answer;
    },
    comapct(array){
        for(let i=0; i<array.length; i++) {
            if(array[i]!=''||array[i]==null||array[i]==0||array[i]==undefined||array[i]==NaN)
            {
                delete a[i];
            }
            return a;
        }
    }
    
}