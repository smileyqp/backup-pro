

import React, { Component } from 'react';
import classnames from 'classnames';
require('../App.css')

export default class ListItem extends Component{
    constructor(props) {
        super(props);
      }
    render(){

        const {CarName,Status} = this.props;

        return(
            <div className='list-item-con'>
                <div className='list-item'>{CarName}</div>
                <div className={
                    classnames(
                        'list-item',
                        {'color-blue':!Status},
                        {'color-green':Status})
                        }>
                    {Status?'可用':'不可用'}
                </div>
            </div>
        )
    }
}






