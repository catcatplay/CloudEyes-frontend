import request from '@/request'

/** 用户登录 POST /api/user/login */
export async function login(body: API.UserDto) {
  return request<API.BaseResponse<API.UserVo>>('/api/user/login', {
    method: 'POST',
    data: body
  })
}

/** 用户登出 GET /api/user/logout */
export async function logout() {
  return request<API.BaseResponse<API.UserVo>>('/api/user/logout', {
    method: 'GET'
  })
}

/** 分页查询账号信息 POST /api/user/pageList */
export async function pageList(body: API.UserDto) {
  return request<API.BaseResponse<API.Page<API.UserVo>>>('/api/user/pageList', {
    method: 'POST',
    data: body
  })
}

/** 用户注册 POST /api/user/register */
export async function register(body: API.UserDto) {
  return request<API.BaseResponse<API.UserVo>>('/api/user/register', {
    method: 'POST',
    data: body
  })
}
