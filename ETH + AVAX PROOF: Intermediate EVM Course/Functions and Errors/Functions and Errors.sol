// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ExceptionHandlingContract {
    uint public number;

    function setNumber(uint _number) public {
        number = _number;
    }

    function requireStatement(uint _number) public view returns (uint) {
        require(_number > 0, "Number must be greater than zero");
        return _number;
    }

    function assertStatement() public view returns (uint) {
        assert(number == 0);
        return number;
    }

    function revertStatement(uint _i) public pure {
        require(_i > 10, "Input must be greater than 10");
        
    }
}
