declare namespace API {
  type BaseResponse<T> = {
    code?: number
    data?: T
    message?: string
  }

  type BaseEntity = {
    createTime?: string
    editTime?: string
    isDelete?: number
    updateTime?: string
  }

  type PageRequest = {
    /** 当前页号 */
    current?: number
    /** 页面大小 */
    pageSize?: number
    /** 排序字段 */
    sortField?: string
    /** 排序顺序（默认升序） */
    sortOrder?: string
  }

  type Page<T> = {
    current?: number
    pages?: number
    records?: T[]
    size?: number
    total?: number
  }

  type UserVo = BaseEntity & {
    userAccount?: string
    userAvatar?: string
    userName?: string
    userProfile?: string
    userRole?: string
  }

  type UserDto = PageRequest & {
    /** 账号 */
    userAccount?: string
    /** 密码 */
    userPassword?: string
    /** 确认密码 */
    checkPassword?: string
    /** 用户名 */
    userName?: string
  }
}
