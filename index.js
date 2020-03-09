module.exports.pagination = (model, pageNumber = 1, limitNumber = 4) => {
  const page = parseInt(pageNumber);
  const limit = parseInt(limitNumber);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const result = {};
  result.options = {};
  if (endIndex < model.length) {
    result.options.next = {
      page: page + 1,
      limit: limit
    };
  }

  if (startIndex > 0) {
    result.options.previous = {
      page: page - 1,
      limit: limit
    };
  }

  result.options.total = model.length;
  result.options.currentPage = page;
  result.options.pageLength = Math.ceil(model.length / limitNumber);
  result.result = model.slice(startIndex, endIndex);
  return Promise.resolve(result);
};
