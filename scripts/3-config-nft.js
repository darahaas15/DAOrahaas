import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';

const editionDrop = sdk.getEditionDrop(
    '0x3537EBF724919c47dD76f1412B747C7e8E16020C'
);

(async () => {
    try {
        await editionDrop.createBatch([
            {
                name: 'DAOrahaas Logo',
                description: 'This NFT will give you access to DAOrahaas!',
                image: readFileSync('scripts/assets/shipinabottle.png')
            }
        ]);
        console.log('✅ Successfully created a new NFT in the drop!');
    } catch (error) {
        console.error('failed to create the new NFT', error);
    }
})();
