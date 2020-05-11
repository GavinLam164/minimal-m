
import {get, post} from './index'

export const findHomeList =() => get('/home/findAllConfigs')

export const findSpuBasicInfo = (params) => get('/product/spu/query', params)


export const findSpecValue = (params) => get('/spec/group/list/select', params)


export const findSkuList = (params) => get('/product/sku/list', params)


export const addCartList = (params) => post('/cart/add', params, {
    headers: {
        'Content-Type': 'application/json'
    }
})

export const findCartList = () => get('/cart/list')

export const findCategoryList = () => get('/category/back/findByParentId')


export const selectCart = (params) => get('/cart/select', params)


export const selectList = () => get('/cart/selectList')

export const findAllArea = () => get('/user/findAllArea')


export const addAddress = (params) => post('/user/addAddress', params, {
    headers: {
        'Content-Type': 'application/json'
    }
})



export const currentSelectAddress = (params) => get('/user/currentSelectAddress', params)



export const addressList = () => get('/user/addressList')


export const addressDetail = (params) => get('/user/addressDetail', params)

export const setSelectAddress = (params) => post('/user/setSelectAddress', params)

export const cartDelete = (params) => post('/cart/delete', params)

export const userLogin = (params) => post('/console/user/login', params, {
    headers: {
        'Content-Type': 'application/json'
    }
})

export const userRegist = (params) => post('/console/user/regist', params, {
    headers: {
        'Content-Type': 'application/json'
    }
})

export const getBasicInfo = () => get('/user/getBasicInfo')