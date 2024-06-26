// Constructors and object instances
export function APIfeatures(query, queryString){
  this.query = query; // Users.find()
  this.queryString = queryString; // req.query

  this.paginating = () => {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 10;
    const skip = limit * (page - 1);
    this.query = this.query.limit(limit).skip(skip);
    return this;
  }

  //this.query = Users.find().limit(limit).skip(skip)

  this.sorting = () => {
    const sort = this.queryString.sort || '-_id';
    this.query = this.query.sort(sort);
    return this;
  }

  //this.query = Users.find().limit(limit).skip(skip).sort(sort)

  this.search = () => {
    const search = this.queryString.search;
    if(search){
      this.query = this.query.find({
        $text: { $search: search }
      })
    }else{
      this.query = this.query.find();
    }
    return this;
  }
  //this.query = Users.find().find({
  //     $text: { $search: search }
  //  }).limit(limit).skip(skip).sort(sort)

  this.filtering = () => {
    const queryObj = { ...this.queryString };

    const excludedFields = ['page', 'sort', 'limit', 'search'];
    excludedFields.forEach(el => delete(queryObj[el]));

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match);

    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  //this.query = Users.find().find({
  //     {"price":{"$gt":"56.99"}}
  //  }).limit(limit).skip(skip).sort(sort)
}