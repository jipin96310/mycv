import Server from './server';

class API extends Server {
  /**
   *  用途：上传图片
   *  @url https://elm.cangdu.org/v1/addimg/shop
   *  返回status为1表示成功
   *  @method post
   *  @return {promise}
   */
  async addNote(params = {
    actionName:"addOne",
    companyName:"/",
    mainContent:"/",
    

  }) {
    try {
      let result = await this.axios('GET', '/testCV/CV', params);
      if (result) {
        return result || {};
      }  else {
        let err = {
          tip: '发送消息失败',
          response: result,
          data: params,
          
        }
        throw err;
      }
    } catch (err) {
      throw err;
    }
  }


  
  async getAllNotes(params = {
    actionName:"fetchAll",
    companyName:"",
    mainContent:"",
  }) {
    try {
      let result = await this.axios('GET', '/testCV/CV', params);
   

      if (result) {
        return result || {};
      } else {
        let err = {
          tip: '获取消息失败',
          response: result,
          data: params,
      
        }
        throw err;
      }
    } catch (err) {
      throw err;
    }
  }

  async contactMe(params = {
    actionName:"contactMe",
    name:"",
    companyName:"",

    contactWay:"",
    job:"",
    extra:""
  }) {
    try {
      let result = await this.axios('GET', '/testCV/CV', params);
   

      if (result) {
        return result || {};
      } else {
        let err = {
          tip: '获取消息失败',
          response: result,
          data: params,
      
        }
        throw err;
      }
    } catch (err) {
      throw err;
    }
  }

  

 
}






export default new API();