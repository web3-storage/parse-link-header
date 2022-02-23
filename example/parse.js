import { parseLinkHeader } from '@web3-storage/parse-link-header'

const linkHeader =
  '<https://api.github.com/user/9287/repos?page=3&per_page=100>; rel="next", ' +
  '<https://api.github.com/user/9287/repos?page=1&per_page=100>; rel="prev"; pet="cat", ' +
  '<https://api.github.com/user/9287/repos?page=5&per_page=100>; rel="last"'

const parsed = parseLinkHeader(linkHeader)
console.log(parsed)
