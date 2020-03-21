import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {htmlToReact, safePrefix} from '../utils';

export default class Profile extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <div className="outer">
              <div className="inner">
                <article className="post project post-full">
                  <header className="post-header inner-small">
                    <h2 className="post-title line-top">{_.get(this.props, 'pageContext.frontmatter.name')}</h2>
                    {_.get(this.props, 'pageContext.frontmatter.job_title') && 
                    <div className="post-subtitle">
                      {htmlToReact(_.get(this.props, 'pageContext.frontmatter.job_title'))}
                    </div>
                    }
                  </header>
                  {_.get(this.props, 'pageContext.frontmatter.content_img_path') && 
                  <div className="post-thumbnail">
                    <img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.content_img_path'))} alt={_.get(this.props, 'pageContext.frontmatter.name')} />
                  </div>
                  }
                  <div className="post-content inner-small">
                    {htmlToReact(_.get(this.props, 'pageContext.html'))}
                  </div>
                </article>
              </div>
            </div>
            </Layout>
        );
        
    }
}
