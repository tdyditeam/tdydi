import axios from 'axios'
const baseURL = `${process.env.baseURL}`
console.log(baseURL)
export const request = async ({
  url,
  method = 'post',
  headers = {},
  params = {},
  data = {},
  onUploadProgress = {},
  file = false,
}) => {
  if (file) {
    headers['Accept'] = 'application/json'
    headers['Content-Type'] = 'multipart/form-data'
    const formData = new FormData()
    if (data?.files?.length) {
      for (let i = 0; i < data.files.length; i++) {
        formData.append('files', data.files[i])
      }
    }
    for (let [key, value] of Object.entries(data)) {
      if (key !== 'files') {
        formData.append(key, value)
      }
    }
    data = formData
  }
  localStorage.getItem('token') &&
    (headers['authorization'] = localStorage.getItem('token'))
  const response = await axios({
    url: `${baseURL}${url}`,
    method,
    headers,
    ...onUploadProgress,
    params,
    data,
  })
  return response.data
}
