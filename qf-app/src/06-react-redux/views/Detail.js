/*
 * @Author: Topskys
 * @Date: 2022-09-12 15:40:07
 * @LastEditTime: 2022-09-14 15:51:13
 */
import React,{useEffect} from 'react'
// 引入redux
// import store from '../redux/store'
import {connect} from 'react-redux'
import {show,hidden} from '../redux/actionCreators/index'

function Detail(props) {
  let {match,show,hidden} = props

  useEffect(() => {

    // store.dispatch 通知
    // store.dispatch(hidden())
    // props.hidden()
    hidden()

    // 销毁时
    return () => {
      // store.dispatch(show())
      // props.show()
      show()
    }
  }, [match.params.filmId,show,hidden])


  // console.log(props.match.params.filmId)
  return ( <div >

    </div>
  )
}


/**
 * @description: connect(给孩子的属性state，将来孩子传的回调函数dispatch)
 * @return {*}
 */
const mapDispatchToProps = {
  show,
  hidden
}
export default connect(null,mapDispatchToProps)(Detail)