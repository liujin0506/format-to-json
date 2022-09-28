const fn = require('funclib');
const fmt2json = require('../');

(async () => {
  const source = '{"description":"Online json formatter","version":"v4.1.8","updateTime":"2018-11-23","url":"http://zjson.net","project":"http://github.com/CN-Tower/zjson","language":["\u4e2d\u6587（\u7b80\u4f53）","English"],"keywords":["zjson","json formatter"],"content":{"array":["element 001","element 002"],"boolean":true,"null":null,"number":123,"string":"Hello World","object":{"property":"value","key":"val"}}}';
  
  fmtInfo = await fmt2json(source, {unicode: true});
  
  fn.log('', { title: `format-to-json`, pre: true });
  console.log(fn.chalk(fmtInfo.result, 'cyan'));
  console.log(fn.array(66, '-').join(''));
  console.log(fmtInfo.status);
  fn.log('', { end: true });
})();
