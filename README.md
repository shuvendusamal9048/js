# js
DataTypes:-
-Data Types is an attribute associated with a piece of data that tells a computer how to interpet its value.
-In data types we used 'typed' operator to know that what type of data it is
-Mainly in javascript their are 2 types of data types
1.primitive:-
-in javascript their are 7 types of primitive data types.
1.Number:-Number are the type of data types those it contain some numerical value.
2.boolean:-In Boolean data types we got boolean value like true ,false.
3.Undefined:-In underfined data types the data is not define so that it will show unfinded.
4.Null:-in this data type we got null for value mean nothing.
5.bigint:-in bigibt we will get big integer value.
6.Symbol:-in symbol we will get whole symbol as well as the value we got for the data types.
7.String:-:-String is a type of data type that can hold some character like name...

2.Reference or non primitive :-

-Non primitive data type are the type of data that can hold multiple item in a single time
-non primitive data type are-object,array,function etc...
-object is a non primitive data types which can hold multiple of item one single entity.
-mainly object are working on(key:value) pair. the left side part is our keys of the object & right side part are the object of the project.
Ex.object
let student-{
    name:mithun pani,
    mob_no:7077029048,
    college:"GIFT
}



OPERATOR:-

Operators are the key features to do some task or operator some task.
ex-A+B
-In the above example A,B are the operand and + is the operator.

There are 5 types of operators are their in java script
1.Arithmatic operators
(+,-,*,/)
modules:->%
exponentiation ->**
2.unary operators
increment(++)
decrement(--)
3.assignment operator
(assign some value to the variable)
(+=,-=,%=)
4.comparision 
(compare the value)
it gives the result of true or false
(equal to=>)==
(not equal to ->)!=
(equal to & type)-> ===
(not equal & type)->!==

5.Logical operator
check the logic of the operators(false)
logical AND (&&)->table of the logical AND operators->
con1    con1     res(&&)
T       T           T
T       F           F
F       T           F
F       F           F

Logical OR(||) -> table of logical OR oprator is ->

con1    con1     res(&&)
T       T           T
T       F           T
F       T           T
F       F           F

conditional Statement:-
-To implement some condition in the code.
-there are 3 types of conditional statement are there:-
1.if condition:-
    -if condition is true then the statement is true otherwise false.
    -syntax-{
        if(condition){
            statement
        }
    }
2.if-else condition:-
    -if condition is true then if block will get execute otherwise its terminate to else condition.
    syntax-
        if(condition){
            statement 
        }
        else{
            statement
        }
3.else-if condition:-
-its check the condition multiple times where the condition is true
syntax{
    if(condition){
        statement
    }
    else if(condition){
        statement
    }
    else if(condition){
        statement
    }
    else{
        statement
    }
}


Loop:-

-loops are used to execute a piece of code again and again
-For Loop:-
syntax:-
for(initialization;condition;updation){
    statement
}
-while loop:
syntax:-
while(condition){
    statement
    updation
}

-Do while
syntax-
do{
    statement
    updation
}while(condition)

4.for of loo:-it iterates on string & array.
5.for-in loop:it iterates over objects(key=value) pair.


Array is a collection of elements
let info=[19,'delhi',90]
-array[0],arr[1],arr[2]

looping over an array:-
-loop->iterable
syntax:-
for(let i=0;i<arr.length,i++){
//statement
}

let heroes=['ironmen','hulk','thon','chotim']
for (let i=0;i<heroes.length;i++){
    console.log(heroes[i])
}

Array Method:-
push->add an element to the end
pop:-delete from end
toString:-convert to array
concat:-joins multiple arrays & return result.
unshift:-delete from start 
shift->return a piece of the array.
slice:-return a piece of the array.
splice:-change original array(add,remove,replace)