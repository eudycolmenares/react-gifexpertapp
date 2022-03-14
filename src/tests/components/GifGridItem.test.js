import { shallow } from 'enzyme'
import GifGridItem from '../../components/GifGridItem'
// 
describe('Test in <GifGridItem />', () => {
    const title = 'Titulo!'
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> )
    test('Should display the component correctly!', () => {
        expect( wrapper ).toMatchSnapshot()
    })
    test('Shoud have a paragraph with the title', () => {
        const p = wrapper.find( 'p' )
        expect( p.text() ).toBe( title )
    })
    test('Shoud have a image like data from props!', () => {
        const img = wrapper.find( 'img' )
        expect( img.prop('src') ).toBe( url )
        expect( img.prop('alt') ).toBe( title )
    })
    test('Shoud have class "animate__zoomIn"', () => {
        const div = wrapper.find( 'div' )
        const className = div.prop('className')
        expect( className.includes('animate__zoomIn') ).toBe( true )
    })
})