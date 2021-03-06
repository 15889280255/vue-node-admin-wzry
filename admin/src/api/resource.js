import httpUtil from '@/utils/httpUtil'

// 新建文章
export function saveArticle (data) {
  return httpUtil({
    url: '/article/add',
    method: 'post',
    data
  })
}

// 删除文章
export function deleteArticle (params) {
  return httpUtil({
    url: '/article/delete',
    method: 'delete',
    params
  })
}

// 修改文章
export function updateArticle (data) {
  return httpUtil({
    url: '/article/update',
    method: 'put',
    data
  })
}

// 获取文章列表
export function initArticle (params) {
  return httpUtil({
    url: '/article/list',
    method: 'get',
    params
  })
}

// 获取文章二级分类
export function getArticleTwo (params) {
  return httpUtil({
    url: '/article/cate',
    method: 'get',
    params
  })
}

// 获取文章详情
export function initArticleInfo (params) {
  return httpUtil({
    url: '/article/item',
    method: 'get',
    params
  })
}

// 富文本编辑器文件上传
export function  uploadEditorFile(data) {
  return httpUtil({
    url: '/upload/images',
    method: 'post',
    data
  })
}