window.addEventListener('load', async () => {
  // Check if Web3 is injected by the browser (modern browsers with MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use the existing provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    // Set up a new provider (e.g., local development blockchain)
    window.web3 = new Web3('http://localhost:8545');
  }

  // Contract address and ABI (Replace with your deployed contract details)
  const contractAddress = '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4';
  const contractABI = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_age",
          "type": "uint256"
        }
      ],
      "name": "addStudent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getStudent",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "age",
              "type": "uint256"
            }
          ],
          "internalType": "struct SchoolManagement.Student",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTotalStudents",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

  // Create contract instance
  const schoolContract = new web3.eth.Contract(contractABI, contractAddress);

  // Function to add a student
  const addStudent = async () => {
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    try {
      await schoolContract.methods.addStudent(id, name, age).send({ from: web3.eth.defaultAccount });
      document.getElementById('output').innerHTML = `Student added: ID - ${id}, Name - ${name}, Age - ${age}`;
    } catch (err) {
      console.error(err);
      document.getElementById('output').innerHTML = 'Error adding student.';
    }
  };

  // Function to get a student
  const getStudent = async () => {
    const id = document.getElementById('id').value;
    try {
      const student = await schoolContract.methods.getStudent(id).call();
      document.getElementById('output').innerHTML = `Student found: ID - ${student[0]}, Name - ${student[1]}, Age - ${student[2]}`;
    } catch (err) {
      console.error(err);
      document.getElementById('output').innerHTML = 'Student not found.';
    }
  };

  // Function to get total students
  const getTotalStudents = async () => {
    try {
      const totalStudents = await schoolContract.methods.getTotalStudents().call();
      document.getElementById('output').innerHTML = `Total Students: ${totalStudents}`;
    } catch (err) {
      console.error(err);
      document.getElementById('output').innerHTML = 'Error getting total students.';
    }
  };
});
