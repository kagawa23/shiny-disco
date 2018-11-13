export const changeUrl = url => url.replace('http(s)', 'https');

export const options = {
  headers: {
    'content-type': 'application/json',
  },
};

export const api = {
  host: 'http://rap2api.taobao.org/app/mock',
  materials: '/template/646946',
  designs: '/template/651967',
  designDetail: '/template/655276',
};
