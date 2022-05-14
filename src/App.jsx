import { useAddress, useMetamask } from '@thirdweb-dev/react';

const App = () => {
  // Use the hooks thirdweb give us.
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  console.log("👋 Address:", address);

  // This is the case where the user hasn't connected their wallet
  // to your web app. Let them call connectWallet.
  if (!address) {
    return (
      <div className="landing">
        <h1>test DAO</h1>
        <button onClick={connectWithMetamask} className="btn-hero">
          Connect wallet
        </button>
      </div>
    );
  }

  // if (window.ethereum) {
  //   handleEthereum();
  // } else {
  //   window.addEventListener('ethereum#initialized', handleEthereum, {
  //     once: true,
  //   });
  
  //   // If the event is not dispatched by the end of the timeout,
  //   // the user probably doesn't have MetaMask installed.
  //   setTimeout(handleEthereum, 3000); // 3 seconds
  // }
  
  // function handleEthereum() {
  //   const { ethereum } = window;
  //   if (ethereum && ethereum.isMetaMask) {
  //     console.log('Ethereum successfully detected!');
  //     // Access the decentralized web!
  //   } else {
  //     console.log('Please install MetaMask!');
  //   }
  // }

  // This is the case where we have the user's address
  // which means they've connected their wallet to our site!
  return (
    <div className="landing">
      <h1>wallet connected</h1>
    </div>);
}

export default App;