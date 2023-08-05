# Smart Contract Project

For this project, we have to write a smart contract that implements the require(), assert() and revert() statements.

## Description

1.setNumber(uint _number) public: This function allows anyone to set the value of the number state variable. It takes an unsigned integer _number as input and 
  assigns it to the number state variable.

2.requireStatement(uint _number) public view returns (uint): This function takes an unsigned integer _number as input and checks if it is greater than zero using 
  the require statement. If the condition is not met, the function will revert with an error message "Number must be greater than zero." Otherwise, it will return 
  the input _number.

3.assertStatement() public view returns (uint): This function checks if the value of the number state variable is equal to zero using the assert statement. If the 
  condition is not met (i.e., number is not equal to zero), it will raise an exception, terminating the execution. Otherwise, it will return the value of the 
   number state variable.

4.revertStatement(uint _i) public pure: This function takes an unsigned integer _i as input and checks if it is greater than 10 using the require statement. If the 
 condition is not met, the function will revert with an error message "Input must be greater than 10." The function is declared as pure, meaning it does not modify 
 the contract's state.



## Authors

Name-Sritam Biswal
Contact info-sritambiswal03@gmail.com


## License

MIT License

Copyright (c) 2023 Sritam Biswal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

This project is licensed under the MIT License - see the LICENSE.md file for details
