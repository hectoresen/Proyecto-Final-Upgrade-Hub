
import '@testing-library/jest-dom/extend-expect'
import{render, screen,waitFor }from '@testing-library/react'

import axios from "axios";
import { connect } from 'react-redux';
import ManClothesPage from './ManClothesPage';

jest.mock('axios')
beforeEach(()=>{
    axios.get.mockClear()
})
test('should search man clothes', async ()=>{
render(connect(<ManClothesPage/>))
    axios.get.mockReturnValueOnce({
        props:{data:[{
            id:'6231ba4975606aa3e1fc1538'
        }]}
    })
})