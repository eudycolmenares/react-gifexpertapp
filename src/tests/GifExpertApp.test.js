import { shallow } from 'enzyme'
import GifExpertApp from '../GifExpertApp'
// 
describe('Tests in <GifExpertApp />', () => {
    test('Should display correctly!', () => {
        const wrapper = shallow( <GifExpertApp /> )
        expect( wrapper ).toMatchSnapshot()
    })
    test('Should display a list of categories!', () => {
        const categories = ['Pokemon', 'Digimon']
        const wrapper = shallow( <GifExpertApp defaultCategories={categories} /> )
        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('GifGrid').length ).toBe( categories.length )
    })
})