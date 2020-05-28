
import App, {Container} from 'next/app'
import {setRequest} from '@api'
import React from 'react'
import 'antd-mobile/dist/antd-mobile.css'; 
require('@lib/first-client-init')

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}
    setRequest(ctx.req)
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return <Container>
      <Component {...pageProps} />
    </Container>
  }
}