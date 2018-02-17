import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Page from '../components/Page'
// import NotificationBar from '../components/NotificationBar'
import site from '../config/site'
import './index.css'
import Link from 'gatsby-link'

const meta = [
  { name: 'description', content: site.description },
  { name: 'keywords', content: site.keywords },
]

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet meta={meta} title={site.title} />
    <Header />
    <Page>
      {children()}
    </Page>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
