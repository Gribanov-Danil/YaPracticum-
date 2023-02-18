import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    pickedIngredient: [
        {
            _id: '60d3b41abdacab0026a733c6',
            name: 'Краторная булка N-200i',
            type: 'bun',
            proteins: 80,
            fat: 24,
            carbohydrates: 53,
            calories: 420,
            price: 1255,
            image: 'https://code.s3.yandex.net/react/code/bun-02.png',
            image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
            image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
            __v: 0
        },
        {
            _id: '60d3b41abdacab0026a733c6',
            name: 'Краторная булка N-200i',
            type: 'bun',
            proteins: 80,
            fat: 24,
            carbohydrates: 53,
            calories: 420,
            price: 1255,
            image: 'https://code.s3.yandex.net/react/code/bun-02.png',
            image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
            image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
            __v: 0
        },
        {
            _id: '60d3b41abdacab0026a733c8',
            name: 'Филе Люминесцентного тетраодонтимформа',
            type: 'main',
            proteins: 44,
            fat: 26,
            carbohydrates: 85,
            calories: 643,
            price: 988,
            image: 'https://code.s3.yandex.net/react/code/meat-03.png',
            image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
            image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
            __v: 0
        },
        {
            _id: '60d3b41abdacab0026a733cc',
            name: 'Соус Spicy-X',
            type: 'sauce',
            proteins: 30,
            fat: 20,
            carbohydrates: 40,
            calories: 30,
            price: 90,
            image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
            image_mobile: 'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
            image_large: 'https://code.s3.yandex.net/react/code/sauce-02-large.png',
            __v: 0
        },
    ],
}

export const pickedIngredientSlice = createSlice({
    name: "pickedIngredient",
    initialState,
    reducers: {
        setPickedIngredient(state, action) {
            state.pickedIngredient = action.payload.dataArray
        }
    }
})

export default pickedIngredientSlice.reducer
