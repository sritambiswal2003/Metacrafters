const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Lock", function () {
  let Lock;
  let lock;
  let owner;
  let otherAccount;

  beforeEach(async () => {
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    const ONE_GWEI = ethers.utils.parseEther("1");

    const lockedAmount = ONE_GWEI;
    const unlockTime = (await ethers.provider.getBlock("latest")).timestamp + ONE_YEAR_IN_SECS;

    [owner, otherAccount] = await ethers.getSigners();

    Lock = await ethers.getContractFactory("Lock");
    lock = await Lock.deploy(unlockTime, { value: lockedAmount });
  });

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      expect(await lock.unlockTime()).to.equal((await ethers.provider.getBlock("latest")).timestamp + 365 * 24 * 60 * 60);
    });

    it("Should set the right owner", async function () {
      expect(await lock.owner()).to.equal(owner.address);
    });

    it("Should receive and store the funds to lock", async function () {
      expect(await ethers.provider.getBalance(lock.address)).to.equal(ethers.utils.parseEther("1"));
    });

    it("Should fail if the unlockTime is not in the future", async function () {
      const latestBlock = await ethers.provider.getBlock("latest");
      const Lock = await ethers.getContractFactory("Lock");
      await expect(Lock.deploy(latestBlock.timestamp, { value: 1 })).to.be.revertedWith("Unlock time should be in the future");
    });
  });

  describe("Withdrawals", function () {
    describe("Validations", function () {
      it("Should revert with the right error if called too soon", async function () {
        await expect(lock.withdraw()).to.be.revertedWith("You can't withdraw yet");
      });

      it("Should revert with the right error if called from another account", async function () {
        const unlockTime = (await ethers.provider.getBlock("latest")).timestamp + 365 * 24 * 60 * 60;
        await time.increaseTo(unlockTime);

        await expect(lock.connect(otherAccount).withdraw()).to.be.revertedWith("You aren't the owner");
      });

      it("Shouldn't fail if the unlockTime has arrived and the owner calls it", async function () {
        const unlockTime = (await ethers.provider.getBlock("latest")).timestamp + 365 * 24 * 60 * 60;
        await time.increaseTo(unlockTime);

        await expect(lock.withdraw()).not.to.be.reverted;
      });
    });

    describe("Events", function () {
      it("Should emit an event on withdrawals", async function () {
        const unlockTime = (await ethers.provider.getBlock("latest")).timestamp + 365 * 24 * 60 * 60;
        await time.increaseTo(unlockTime);

        await expect(lock.withdraw())
          .to.emit(lock, "Withdrawal")
          .withArgs(ethers.utils.parseEther("1"), anyValue); // We accept any value as `when` arg
      });
    });

    describe("Transfers", function () {
      it("Should transfer the funds to the owner", async function () {
        const unlockTime = (await ethers.provider.getBlock("latest")).timestamp + 365 * 24 * 60 * 60;
        await time.increaseTo(unlockTime);

        await expect(lock.withdraw()).to.changeEtherBalances([owner, lock], [ethers.utils.parseEther("1"), ethers.utils.parseEther("-1")]);
      });
    });
  });
});

