/*
 * @Author: Topskys
 * @Date: 2022-09-05 22:20:46
 */
import React, {
    Component
} from 'react'

import PropTypes from 'prop-types'

export default class NavBar extends Component {
    // 对象属性 // 使用：new NavBar() , obj.a
    a=100
    
    // 类属性 ，方法1
    static propTypes = {
        title: PropTypes.string,
        showLeft: PropTypes.bool,
        showRight: PropTypes.bool
    }

    // props默认值，方法1
    static defaultProps = {
        title:"首页",
        showLeft: true,
        showRight: true
    }

    render() {
        let {title,showLeft,showRight}=this.props // 接收props
        return ( 
            <div> 
                <h1>{title}</h1>
                {showLeft && <button onClick={() => window.location.href="javascript:history.go(-1)"}>Back</button>}
                {showRight && <button>Confirm</button>}
            </div>
        )
    }
}

/**
 * 验证接收的props
 * 类属性，方法2
 * 使用：NavBar.属性
 */
// NavBar.propTypes = {title: PropTypes.string,showLeft: PropTypes.bool,showRight:PropTypes.bool}


/**
 * props默认属性
 */
// NavBar.defaultProps = {
//     title: "首页",
//     showLeft: true,
//     showRight: true
// }

