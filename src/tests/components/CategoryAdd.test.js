import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import CategoryAdd from '../../components/CategoryAdd'
// 
describe('Tests in <CategoryAdd />', () => {
    const setCategories = jest.fn()
    let wrapper
    beforeEach(() => {
        jest.clearAllMocks()
        wrapper = shallow( <CategoryAdd setCategories={ setCategories } />)
    })
    test('Should display correctly!', () => {
        expect( wrapper ).toMatchSnapshot()
    })
    test('Should change the input text!', () => {
        const input = wrapper.find('input')
        const value = 'Hola mundo'
        input.simulate('change', { target: {value: value} })
        expect( wrapper.find('p').text() ).toBe( value )
    })
    test('Should not post the information with the submit!', () => {
        wrapper.find( 'form' ).simulate('submit', { preventDefault(){} })
        expect( setCategories ).not.toHaveBeenCalled()
    })
    test('Should called setCategories() and clear the input text!', () => {
        const value = 'Hola mundo'
        wrapper.find('input').simulate('change', { target: {value: value} })
        wrapper.find( 'form' ).simulate('submit', { preventDefault(){} })
        expect( setCategories ).toHaveBeenCalled()
        expect( setCategories ).toHaveBeenCalledTimes(1)
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) )
        expect( wrapper.find('input').prop('value') ).toBe( '' )
    })
})