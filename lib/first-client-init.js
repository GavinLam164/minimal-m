import Cookie from 'js-cookie'

if(process.browser){
    const accessToken = window.localStorage.getItem('webToken')
    const cookie = Cookie.get('webToken')
    if (accessToken && !cookie) {
      const option = { expires: 3650 }
      if (process.env.NODE_ENV === 'production') {
        // option.domain = '.goswak.com'
      }
      Cookie.set('webToken', accessToken, option)
    }
    
    if (!accessToken && cookie) {
      window.localStorage.setItem('webToken', cookie)
    }
    
}
