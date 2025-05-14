//define all api for project, it calls common api function

import CommonApi from "./CommonApi";

//upload video API, - this function is called in add component

export const uploadVideoAPI = async (videoData)=> {
    return await CommonApi('post','/allVideos',videoData)
}

export const getVideoApi = async()=>{
    return await CommonApi('get','/allVideos',"")
  }

  export const deleteVideoApi= async(id)=>{
    return await CommonApi('delete',`/allVideos/${id}`,{})
  }

export const addHistory= async (historyData)=>{
    return await CommonApi('post','/allHistory',historyData)
}

export const getHistoryApi= async()=>{
    return await CommonApi('get','/allHistory',"")
}

export const deleteHistoryApi= async(id)=>{
    return await CommonApi('delete',`/allHistory/${id}`,{})
}

export const addCategory= async(category)=>{
    return await CommonApi('post','/allCategories',category)
}

export const getCategoryApi=async()=>{
    return await CommonApi('get','/allCategories',"")
}

export const getSingleVideo= async(id)=>{
    return await CommonApi('get',`/allVideos/${id}`,"")
}