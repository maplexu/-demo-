const sortArr = ['top','shehui','guonei','yule','tiyu','junshi','keji','caijing','shishang'];

const fetch = id => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: "https://v.juhe.cn/toutiao/index",
      data: {
        key: 'de40f6add55c75aaa7e33f2188d696d3',
        type: sortArr[id - 1]
      },
      success(res) {
        if(res.data.error_code == 0) {
          resolve(res.data.result.data);
        } else {
          reject(res.data.reason);
        }
      },
      fail(err) {
        reject(err)
      }
    })
  })
}

module.exports = {
  fetch: fetch
}