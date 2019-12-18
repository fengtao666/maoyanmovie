// 和正在热映相关的接口处理
import axios from 'utils/axios.js';
import { resolve } from 'path';
import { reject } from 'q';

// let url = `http://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=064FC9101E3A11EABC648D250EE5B7FDC6E91C7C7A3D45E3B3DA32273E2FE9EE&optimus_risk_level=71&optimus_code=10`

// 获取正在热映的数据
export const getNowPlaying = () => {
    return new Promise((resolve, reject) => {
        // 数据接口
        let url = '/ry/ajax/movieOnInfoList?token=&optimus_uuid=064FC9101E3A11EABC648D250EE5B7FDC6E91C7C7A3D45E3B3DA32273E2FE9EE&optimus_risk_level=71&optimus_code=10'

        axios.get(url)
            .then((data) => {
                resolve(data)
                // console.log(data.data.movieList)
            })
            .catch((err) => {
                reject(err)
            })
    })
}


// 
// let url = 'http://m.maoyan.com/ajax/detailmovie?movieId=1218273&optimus_uuid=064FC9101E3A11EABC648D250EE5B7FDC6E91C7C7A3D45E3B3DA32273E2FE9EE&optimus_risk_level=71&optimus_code=10'
// 根据电影id获取电影详情数据
export const getDetailMovieById = (mid = '1218273') => {
    return new Promise((resolve, reject) => {
        let url = '/dm/ajax/detailmovie?movieId='+mid+'&optimus_uuid=064FC9101E3A11EABC648D250EE5B7FDC6E91C7C7A3D45E3B3DA32273E2FE9EE&optimus_risk_level=71&optimus_code=10'
        axios.get(url)
        .then((data)=>{
            resolve(data)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

// 获取showDays数据

let url = ''


