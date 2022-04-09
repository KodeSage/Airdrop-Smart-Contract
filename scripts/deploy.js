// I deployed Token Contract First be

const hre = require( "hardhat" );

const main = async () =>
{

  const [ deployer ] = await hre.ethers.getSigners();

  console.log( "Deploying contracts with the account:", deployer.address );

  const weiAmount = ( await deployer.getBalance() ).toString();

  console.log( "Account balance:", ( await ethers.utils.formatEther( weiAmount ) ) );


  const Airdrop = await hre.ethers.getContractFactory( "Airdrop" );
  // const Token = await hre.ethers.getContractFactory( "Token" );



  // const Token_Contract = await Token.deploy( 18000 );
  const Airdrop_Contract = await Airdrop.deploy('0x9D9eFa2881442c80912AeA2f553C7f295265c66d') // Token Address


  await Airdrop_Contract.deployed();


  console.log( "UpNext ************ TokenContract Deployed**********  \n" );

  console.log( "Token_Contract deployed to:", Airdrop_Contract.address ); // 0x6EB0Bd6642b51b39C0FA3dd0138f00504B4C3Fd7
}


const runMain = async () =>
{
  try
  {
    await main();
    process.exit( 0 );
  } catch ( error )
  {
    console.error( error );
    process.exit( 1 );
  }
}
runMain();