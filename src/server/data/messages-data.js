let messages = {
  1: {
    meta: {
      currentPage: 1,
      totalPages: 2,
    },
    data: [{
      content: 'page1'
    }]
  },
  2: {
    meta: {
      currentPage: 2,
      totalPages: 2,
    },
    data: [{
      content: 'page2'
    }]
  }
};

export default function(page) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(messages[page]);
    }, 200);
  });
}
