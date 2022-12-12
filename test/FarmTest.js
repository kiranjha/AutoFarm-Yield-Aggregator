// const { expect } = require("chai");
// const { ethers } = require("hardhat");
// const helpers = require("@nomicfoundation/hardhat-network-helpers");

// describe("AutoFarm Test Contract", function () {
//   var owner, addr1, addr2, impersonatedSigner;
        
//   var Autofarm, hardhatAutofarm, autoFarmAddress, autoFarmContract;

//   it("1. Impersonating as AutoFarm owner and set allocPoint of a pool", async function () {
//     console.log(`1`);
//     [owner, addr1, addr2] = await ethers.getSigners();
//     console.log(`2`);
//     Autofarm = await ethers.getContractFactory("Farm");
//     console.log(`3`);
//     hardhatAutofarm = await Autofarm.deploy();
//     console.log(`4`);
//     await hardhatAutofarm.deployed();
//     console.log(`My Farm deployed at address :- ${hardhatAutofarm.address}`);


//     autoFarmAddress = "0x0895196562C7868C5Be92459FaE7f877ED450452";
//     autoFarmContract = await ethers.getContractAt("AutoFarmV2", autoFarmAddress);
//     console.log("contract Address - "+autoFarmContract.address);


    
//     var autoOwner = await hardhatAutofarm.getOwner();
//     console.log(`5`);

//     await helpers.impersonateAccount(autoOwner);
//     console.log(`6`);
//     impersonatedSigner = await ethers.getSigner(autoOwner);
//     console.log(`7`);
 

//     var allocValue = await autoFarmContract.poolInfo(256);

    
//     var pid = 256;
//     var allocpoint = 1000;
//     var booleanVal = false;
//     var tx = await autoFarmContract.connect(impersonatedSigner).set(pid, allocpoint, booleanVal);
//     const reciept2 = await tx.wait();

//     poolInfo = await autoFarmContract.poolInfo(256);


//     expect(poolInfo.allocPoint).to.equal(allocpoint);
//   });
//   console.log(`8`);
//   it("2. Transfering ownership to addr1.", async function () {
//     console.log(`9`);
//     var tx = await autoFarmContract.connect(impersonatedSigner).transferOwnership(addr1.address);
//     console.log(`10`);
//     const reciept2 = await tx.wait();
//     console.log(`11`);


//     expect(await hardhatAutofarm.getOwner()).to.equal(addr1.address);
//   });
//   console.log(`12`);

//   it("3. Checking total alloc points.", async function () {

//     var totalAlloc = await autoFarmContract.totalAllocPoint();
//     var pid = 256;
//     var allocpoint = 0; // setting allocPoint of pool-56 to zero from 1000
//     var booleanVal = false;
//     var tx = await autoFarmContract.connect(impersonatedSigner).set(pid, allocpoint, booleanVal);
//     const reciept2 = await tx.wait();

//     expect(await autoFarmContract.totalAllocPoint()).to.equal((totalAlloc - 1000));
//   });


// });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const { expect } = require("chai");
const { ethers } = require("hardhat");
const helpers = require("@nomicfoundation/hardhat-network-helpers");

describe("AutoFarm Test Contract", function () {
  var owner, addr1, addr2, impersonatedSigner;
        
  var myFarm, contractFarm, autoFarmAddress, autoFarmContract;

  it("1. Impersonating as AutoFarm owner and set allocPoint of a pool", async function () {
    console.log(`1`);
    [owner, addr1, addr2] = await ethers.getSigners();
    console.log(`2`);
    myFarm = await ethers.getContractFactory("Farm");
    console.log(`3`);
    contractFarm = await myFarm.deploy();
    console.log(`4`);
    await contractFarm.deployed();
    console.log(`My Farm deployed at address :- ${contractFarm.address}`);


    autoFarmAddress = "0x0895196562C7868C5Be92459FaE7f877ED450452";
    autoFarmContract = await ethers.getContractAt("AutoFarmV2", autoFarmAddress);
    console.log("contract Address - "+autoFarmContract.address);


    
    var autoOwner = await contractFarm.getOwner();
    console.log(`5`);

    await helpers.impersonateAccount(autoOwner);
    console.log(`6`);
    impersonatedSigner = await ethers.getSigner(autoOwner);
    console.log(`7`);
 

    // var allocValue = await autoFarmContract.poolInfo(256);

    
    var pid = 256;
    var allocpoint = 1000;
    var booleanVal = false;
    var tx = await autoFarmContract.connect(impersonatedSigner).set(pid, allocpoint, booleanVal);
    const reciept2 = await tx.wait();

    poolInfo = await autoFarmContract.poolInfo(256);


    expect(poolInfo.allocPoint).to.equal(allocpoint);
  });
  console.log(`8`);
  it("2. Transfering ownership to addr1.", async function () {
    console.log(`9`);
    var tx = await autoFarmContract.connect(impersonatedSigner).transferOwnership(addr1.address);
    console.log(`10`);
    const reciept2 = await tx.wait();
    console.log(`11`);


    expect(await contractFarm.getOwner()).to.equal(addr1.address);
  });
  console.log(`12`);

  it("3. Checking total alloc points.", async function () {

    var totalAlloc = await autoFarmContract.totalAllocPoint();
    var pid = 256;
    var allocpoint = 0; // setting allocPoint of pool-56 to zero from 1000
    var booleanVal = false;
    var tx = await autoFarmContract.connect(impersonatedSigner).set(pid, allocpoint, booleanVal);
    const reciept2 = await tx.wait();

    expect(await autoFarmContract.totalAllocPoint()).to.equal((totalAlloc - 1000));
  });


});