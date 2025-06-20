import {ref} from 'vue'
import {defineStore} from 'pinia'

/**
 * 存储登录用户信息的状态
 */
export const useLoginUserStore = defineStore('loginUser', () => {
  const initialUser = sessionStorage.getItem('userInfo')
  const loginUser = ref<API.UserVo>((
    initialUser
      ? JSON.parse(initialUser)
      : { userName: '未登录' }
  ))

  /**
   * 设置登录用户
   * @param user
   */
  function setLoginUser(user: API.UserVo) {
    loginUser.value = user
  }

  /**
   * 清除登录用户
   */
  function clearLoginUser() {
    loginUser.value = { userName: '未登录' }
  }

  // 返回
  return { loginUser, setLoginUser, clearLoginUser }
})
