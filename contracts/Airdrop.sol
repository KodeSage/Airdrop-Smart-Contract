// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./Token.sol";

contract Airdrop is Ownable {
    using SafeMath for uint;

    address public tokenAddress;

    event TokenTransfer(address beneficiary, uint amount);

    constructor(address _tokenAddress) public {
        tokenAddress = _tokenAddress;
    }

   function dropTokens(address[] memory _recipients, uint256[] memory _amount) public onlyOwner returns (bool) {
       
       require(_recipients.length == _amount.length);

        for (uint i = 0; i < _recipients.length; i++) {

            require(_recipients[i] != address(0), "Address's is a null address"); //

            Token(tokenAddress).transfer(_recipients[i], _amount[i]);

            emit TokenTransfer(_recipients[i], _amount[i]);
        }

        return true;
    }

}