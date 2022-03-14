import { getGifs } from '../../helpers/getGifs'
// 
describe('Test with getGifs() fetch', () => {
    test('Should return 10 items', async() => {
        const gifs = await getGifs('Warzone')
        expect( gifs.length ).toBe( 10 )
    })
})