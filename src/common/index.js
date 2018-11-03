export const changeUrl = url => url.replace('http(s)', 'https');

export const options = {
  headers: {
    'content-type': 'application/json',
  },
};

export const api = {
  host: 'http://rap2api.taobao.org/app/mock/85415/',
  main: 'api/main',
};

const MATERIALS_DATA = {
  success: true,
  data: {
    cover: {
      image: '@image(800x450,@color)',
      id: '@id',
      title: '@ctitle(8, 15)',
      subTitle: '@cword(0, 10)',
    },
    'choices|2': [
      {
        image: '@image(800x450,@color)',
        id: '@id',
        decorationType: '@cword(2,4)',
        roomType: '2室1卫',
        'area|1-200': 82,
        'likes|20-1000': 1,
        'comments|20-1000': 1,
      },
    ],
    'model|6': [
      {
        image: '@image(150x150,@color)',
        id: '@id',
      },
    ],
    'topics|2': [
      {
        image: '@image(800x450,@color)',
        title: '@ctitle(8, 15)',
        subTitle: '精选十个方案',
        id: '@id',
      },
    ],
  },
};
