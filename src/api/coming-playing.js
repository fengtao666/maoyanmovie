// 和即将上映相关的接口处理
import axios from 'utils/axios.js';
import { resolve } from 'path';
import { reject } from 'q';

// 获取即将上映的最近最受期待的数据
// let url = `http://m.maoyan.com/ajax/mostExpected?ci=10&limit=10&offset=0&token=&optimus_uuid=064FC9101E3A11EABC648D250EE5B7FDC6E91C7C7A3D45E3B3DA32273E2FE9EE&optimus_risk_level=71&optimus_code=10`

export const getMostExpected = () => {
    return new Promise((resolve, reject) => {
        // 数据接口
        let url = '/cs/ajax/mostExpected?ci=10&limit=10&offset=0&token=&optimus_uuid=064FC9101E3A11EABC648D250EE5B7FDC6E91C7C7A3D45E3B3DA32273E2FE9EE&optimus_risk_level=71&optimus_code=10'

        axios.get(url)
            .then((data) => {
                resolve(data)
            })
            .catch((err) => {
                reject(err)
            })

    })
}

// 获取即将上映的电影列表中电影的数据
// let url = 'http://m.maoyan.com/ajax/comingList?ci=10&token=&limit=10&optimus_uuid=064FC9101E3A11EABC648D250EE5B7FDC6E91C7C7A3D45E3B3DA32273E2FE9EE&optimus_risk_level=71&optimus_code=10'

export const getComingList = () => {
    return new Promise((resolve, reject) => {
        // 数据接口
        let url = '/cm/ajax/comingList?ci=10&token=&limit=10&optimus_uuid=064FC9101E3A11EABC648D250EE5B7FDC6E91C7C7A3D45E3B3DA32273E2FE9EE&optimus_risk_level=71&optimus_code=10'

        axios.get(url)
            .then((data) => {
                resolve(data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}