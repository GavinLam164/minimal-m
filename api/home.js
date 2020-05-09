
import {get, post} from './index'

export const findHomeList =() => get('/home/findAllConfigs')

export const findSpuBasicInfo = (params) => get('/product/spu/query', params)


export const findSpecValue = (params) => get('/spec/group/list/select', params)


export const findSkuList = (params) => get('/product/sku/list', params)


export const addCartList = (params) => post('/cart/add', params, {
    headers: {
        'token': '345038b05aa4dafa4329b9577d5f7e38',
        'Content-Type': 'application/json'
    }
})

export const findCartList = () => get('/cart/list', {}, {
    headers: {
        'token': '345038b05aa4dafa4329b9577d5f7e38'
    }
})

export const findCategoryList = () => get('/category/back/findByParentId')


export const selectCart = (params) => get('/cart/select', params, {
    headers: {
        'token': '345038b05aa4dafa4329b9577d5f7e38'
    }
})


export const selectList = () => get('/cart/selectList', null, {
    headers: {
        'token': '345038b05aa4dafa4329b9577d5f7e38'
    }
})

export const findAllArea = () => get('/user/findAllArea')


export const addAddress = (params) => post('/user/addAddress', params, {
    headers: {
        'token': '345038b05aa4dafa4329b9577d5f7e38',
        'Content-Type': 'application/json'
    }
})



export const currentSelectAddress = (params) => get('/user/currentSelectAddress', params, {
    headers: {
        'token': '345038b05aa4dafa4329b9577d5f7e38',
    }
})


export const getBasicInfo = (params) => get('/user/getBasicInfo', params, {
    headers: {
        'token': '345038b05aa4dafa4329b9577d5f7e38',
    }
})


export const addressList = () => get('/user/addressList', null, {
    headers: {
        'token': '345038b05aa4dafa4329b9577d5f7e38',
    }
})


export const addressDetail = (params) => get('/user/addressDetail', params, {
    headers: {
        'token': '345038b05aa4dafa4329b9577d5f7e38',
    }
})

export const setSelectAddress = (params) => post('/user/setSelectAddress', params, {
    headers: {
        'token': '345038b05aa4dafa4329b9577d5f7e38',
    }
})