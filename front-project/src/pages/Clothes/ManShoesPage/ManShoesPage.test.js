
import '@testing-library/jest-dom/extend-expect'
import{render, screen,waitFor }from '@testing-library/react'

import axios from "axios";
import { connect } from 'react-redux';
import ManShoesPage from './ManShoesPage';


jest.mock('axios')
beforeEach(()=>{
    axios.get.mockClear()
})
test('should search man clothes', async ()=>{
render(connect(<ManShoesPage/>))
    axios.get.mockReturnValueOnce({
        props:{data:[{
            id:'6231ba5d6e23d972c7ab65d1'
        }]}
    })
})