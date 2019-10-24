import axios from '@/request/http-server'

const ship = {
    video (params){
        return axios.get("video/device/all",params)
    }
}

export default ship