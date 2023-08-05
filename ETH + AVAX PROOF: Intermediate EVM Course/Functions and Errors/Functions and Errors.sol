// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ExceptionHandlingContract {
    uint public number;

    function setNumber(uint _number) public {
        number = _number;
    }

    function requireStatement(uint _number) public pure returns (uint) {
        require(_number > 0, "Number must be greater than zero");
        return _number;
    }

    function assertStatement() public view returns (uint) {
        assert(number == 0);
        return number;
    }

    function revertStatement(uint _i) public pure {
        if(_i>10){
        revert( "Input must be greater than 10");}
        
    }
}
