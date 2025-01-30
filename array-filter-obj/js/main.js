function findAdmin(list, lang) {
    return list.filter(el => el.language === lang && el.githubAdmin === 'yes')
  }