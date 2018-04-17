export default function Repo (data) {

  // properties
  this.id = data.id
  this.name = data.name || ''
  this.description = data.description || ''
  this.author = data.owner.login
  this.stars = data.stargazers_count
  this.language = data.language
  this.url = data.html_url
  this.homepageUrl = data.homepage
  this.avatarUrl = data.owner.avatar_url

  // methods
  this.contains = keyword => {
    return this.description.indexOf(keyword) > -1 || this.name.indexOf(keyword) > -1
  }
}
