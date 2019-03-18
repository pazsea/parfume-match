pragma solidity ^0.4.0;

contract companyFactory {

  address[] public companyList;
  uint public counter = 0;
  mapping(address => string) names;

  function createCompany(string name) {
    counter = counter + 1;
    address newCompanyAddress = new Company(msg.sender, name, counter);
    companyList.push(newCompanyAddress);
    names[newCompanyAddress] = name;
  }

  function getCompanies() public view returns (address[]) {
    return  companyList;
  }

  function getName(address addr) public view returns (string) {
    return names[addr];
  }
}

contract Company {

    uint public ID;
    address public owner;
    string public name;
    uint public date; // registrationDate
    uint public experienceCounter;

    mapping (uint => experience) experiences;
    mapping (address => bool) hasRequestedAlready;

    uint[] public approvedExperiencesArr;

  struct experience {
    uint ID;
    bool  exist; // has been requested
    address  addr;
    string  job;
    bool  dealtWith; // did the company dealt with the request or not
    bool  approved; // did the company approve the request or not
    uint  startedOn;
    uint  leftOn;
    uint  registeredOn;
    // maybe add a string attribute to add a reason for rejection
  }


  function Company(address creator, string companyName, uint counter) {
    owner = creator;
    name = companyName;
    ID = counter;
    experienceCounter = 0;
    date = now;
  }

  function newRequest(uint startedOn, uint leftOn, string position) public {
    require(!hasRequestedAlready[msg.sender]);
    experienceCounter++;
    experiences[ID].ID = experienceCounter;
    experiences[ID].addr = msg.sender;
    hasRequestedAlready[msg.sender] = true;
    experiences[ID].startedOn = startedOn;
    experiences[ID].leftOn = leftOn;
    experiences[ID].job = position;
    experiences[ID].registeredOn = now;
    experiences[ID].exist = true;

}

  function dealWithRequest(uint ID, bool approvedOrNot) public {
    require(msg.sender == owner && experiences[ID].dealtWith == false && experiences[ID].exist == true);
    experiences[ID].dealtWith = true;
    experiences[ID].approved = approvedOrNot;
    if(approvedOrNot) {
      approvedExperiencesArr.push(ID);
    }
  }

  function getApprovedList() view public returns(uint[]) {
    return approvedExperiencesArr;
  }

  function getExperienceCounter() view public returns(uint counter) {
    return experienceCounter;
  }

  function getExperience(uint ID) view public returns (address, string, uint, uint, uint) {
    return (experiences[ID].addr, experiences[ID].job, experiences[ID].startedOn,
    experiences[ID].leftOn, experiences[ID].registeredOn);
  }
}
