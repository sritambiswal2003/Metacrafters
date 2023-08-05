// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SchoolManagement {
    struct Student {
        uint256 id;
        string name;
        uint256 age;
    }

    mapping(uint256 => Student) private students;
    uint256 private totalStudents;

    function addStudent(uint256 _id, string memory _name, uint256 _age) external {
        students[_id] = Student(_id, _name, _age);
        totalStudents++;
    }

    function getStudent(uint256 _id) external view returns (uint256, string memory, uint256) {
        return (students[_id].id, students[_id].name, students[_id].age);
    }

    function getTotalStudents() external view returns (uint256) {
        return totalStudents;
    }
}
