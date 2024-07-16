/*                              Javascript Environment Context (JEC)
1. Javascript Execution Context means the way that js will run or execute whatever file we made.

2. Suppose we have a set of code. The first execution context that will be formed is the Global Execution Context. Now the Global Execution Context is stored inside the "this" keyword. In browser, the window object is stored in the "this" keyword. This is the Global Execution Context in the browser. JS is single-threaded. This occurs in the thread.

3.Types of Execution Context:
    a.Global Execution Context
    b.Function Execution Context
    c.Eval Execution Context //Used in mongoDB or other Databases.

4. JEC runs in two phases:
    a.Memory Creation Phase or Creation Phase
    b.Execution Phase

5. We have a code snippet below:
   +--------------------------------+          Step 1: First we have the global execution or global       
   | let val1=10;                   |                  environment and it is allocated in the "this"   
   | let val2=5;                    |                  keyword.
   | function addNum(num1,num2){    |          Step 2: Memory Creation Phase => Here all the existing    
   |     let total = num1+num2      |                  variables are collected and kept.
   |     return total               |                  For this snippet, we have the following example:
   | }                              |                      val1 -> undefined
   | let result1=addNum(val1,val2)  |                      val2 -> undefined
   | let result2=addNum(10,2)       |                      addNum -> definition
   +--------------------------------+                      result1 -> undefined
                                                           result2 -> undefined
                                                       Now our first phase is finished.
                                               Step 3: Execution Phase => Here all the variables and       
                                                       function are provided values.
                                                       For this snippet, we have the following example:
                                                       val1 -> 10
                                                       val2 -> 5
                                                                        +--------------------------------+
                                                                        |                                |
                                                                        |        NEW ENVIRONMENT         |
                                                                        |                                |
                                                       addNum --------->|               +                |
                                                       result1-> 15     |                                |
                                                       result2-> 12     |        EXECUTION THREAD        |
                                                                        |                                |
                                                                        |                                |
                                                                        +--------------------------------+
                                                                                        |        |
                                                                                        |        |
              +-------<--------------------------<-----------------------<--------------+        |
              |                                                                                  |
              +---- Step 3a: Memory Creation Phase                                               |
              |                 val1 -> undefined (same for result1 and  result2)            +---+---+
              |                 val2 -> undefined                                            |DELETED|
              |                 total -> undefined                                           +---+---+
              |                                                                                  |
              +---- Step 3b: Execution Context                                                   |
              |                 num1 -> 10 (result1)                +----->------->-------->-----+
              |                 num2 -> 5  (result1)                | 
              |                 total -> 15 (result1)               |
              |                                                     |
              |                 num1 -> 10 (result2)                |   
              |                 num2 -> 2  (result2)                |   
              |                 total -> 12 (result2)               |
              |                                                     |     
              +----Step 3b: The new environment is deleted and the total is returned to the  global
                            environment.
*/