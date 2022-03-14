import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs'
// 
describe('Tests in useFetchGifs() hook', () => {
    test('Should return the initial state', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) )
        const { data, loading } = result.current
        await waitForNextUpdate()
        expect( data ).toEqual( [] )
        expect( loading ).toBe( true )
    })
    test('Should return an array of images and loading in false', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) )
        await waitForNextUpdate()
        const { data, loading } = result.current
        expect( data.length ).toBe( 10 )
        expect( loading ).toBe( false )
    })
})