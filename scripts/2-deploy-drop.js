import { AddressZero } from '@ethersproject/constants'
import sdk from './1-initialize-sdk.js'
import { readFileSync } from 'fs'
;(async () => {
    try {
        const editionDropAddress = await sdk.deployer.deploytEditionDrop({
            // The collection's name, ex. CryptoPunks
            name: 'DAOrahaas Membership',
            // A description for the collection.
            description:
                'Veniam duis est sit cillum do mollit sunt cupidatat. Ullamco magna aute elit occaecat est ut consectetur commodo id reprehenderit. Aliqua Lorem exercitation dolor id irure incididunt duis sint dolor commodo esse Lorem commodo id anim. Consequat cillum non laborum id. Est id qui nisi voluptate aliqua non dolor sint. Incididunt reprehenderit in ullamco esse excepteur. Do culpa sint Lorem incididunt cupidatat aute ea sunt ex aliqua. Officia labore dolor occaecat in aute eu quis aliquip minim nostrud Lorem do. Aliquip sint adipisicing deserunt exercitation qui consequat et anim. Ullamco deserunt sunt nulla non et aute.',
            // The image that will be held on our NFT! The fun part :).
            image: readFileSync('scripts/assets/naruto.png'),
            // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the contract.
            // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
            // you can set this to your own wallet address if you want to charge for the drop.
            primary_sale_recipient: AddressZero
        })

        // this initialization returns the address of our contract
        // we use this to initialize the contract on the thirdweb sdk
        const editionDrop = sdk.getEditionDrop(editionDropAddress)

        // with this, we can get the metadata of our contract
        const metadata = await editionDrop.metadata.get()

        console.log(
            '✅ Successfully deployed editionDrop contract, address:',
            editionDropAddress
        )
        console.log('✅ editionDrop metadata:', metadata)
    } catch (error) {
        console.log('failed to deploy editionDrop contract', error)
    }
})()
