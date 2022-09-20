/*
 * @Author: Topskys
 * @Date: 2022-09-12 14:16:47
 * @LastEditTime: 2022-09-12 21:15:28
 * 方向代理，因为浏览器的同源策略， 而利用服务器之间没有跨域的性质
 * create-react-app内置方向代理，脚手架已经封装了方向代理
 */
import React, {
  Component
} from 'react'
import axios from 'axios'

export default class ComingSoon extends Component {

  state={
    list:[]
  }

  componentDidMount() {
    axios.get('/api/ajax/comingList?ci=1219&limit=10&movieIds=&token=&optimus_uuid=62DD8530328411EDA90B91B53B333803C0B5BF5BF3744ED5BBD1006D733AB552&optimus_risk_level=71&optimus_code=10')
      .then(res =>{
        console.log("res:",res.data.coming)
        this.setState({list:res.data.coming});
      })

  }


  render() {
    return ( <div>
      {
        this.state.list.map(item =><li key={item.id}>{item.nm}</li>)
      }
        </div>
    )
  }
}