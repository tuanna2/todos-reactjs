export default class CachedSearch {
  constructor(searchFunc, setResults) {
    this.searchFunc = searchFunc;
    this.setResults = setResults;
    this.cacheFilter = {}; // cache when keyword null
    this.cache = {
      all: {},
      pending: {},
      done: {}
    };
  }
  clearCache() {
    this.cacheFilter = {};
    this.cache = {
      all: {},
      pending: {},
      done: {}
    };
  }
  changeQuery(keyword, status) {
    if (keyword.length === 0) {
      if(this.cacheFilter[status]){
        this.setResults(this.cacheFilter[status]);
      }
      else{
        this.searchFunc(status === "all" ? {} : {status})
        .then(results => {
          this.setResults(results.todos);
          this.cacheFilter[status] = results.todos;
        })
      }
    }
    else if (this.cache[status][keyword]) {
      this.setResults(this.cache[status][keyword]);
    }
    else {
      let query = status === "all" ? {keyword: keyword} : {keyword: keyword, status};
      this.searchFunc(query).then(results => {
        this.cache[status][keyword] = results.todos;
        this.setResults(results.todos);
      });
    }
  }
}