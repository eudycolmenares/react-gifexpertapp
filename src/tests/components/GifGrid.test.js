import { shallow } from 'enzyme'
import GifGrid from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')
// 
describe('Tests in <GifGrid />', () => {
    const category = 'Avengers'
    test('Should display correctly!', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow( <GifGrid category={ category } /> )
        expect( wrapper ).toMatchSnapshot()
    })
    test('Shoud display item when images are obtained wwith useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/anything/thing.jpg',
            title: 'Anything'
        },{
            id: 'ABC2',
            url: 'https://localhost/anything/thing.jpg',
            title: 'Anything'
        },{
            id: 'ABC3',
            url: 'https://localhost/anything/thing.jpg',
            title: 'Anything'
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        const wrapper = shallow( <GifGrid category={ category } /> )
        // 
        // expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('h5').exists() ).toBe( false )
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length )
        
    })
})