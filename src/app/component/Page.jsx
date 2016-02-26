import React from 'react';




class Page extends React.Component {
  constructor(props){
    super(props);
  }  
  
  render(){
    var page;
    page="初始值";
    switch(this.props.page){
      case 1:
        page="page1";
        break;
      case 2:
        page="page2";
        break;
      case 3:
        page="page3";
        break;
      default:
        page="page1";
    }
    
    return (
      <div style={{paddingTop:200,width:"80%",margin:"0 auto"}}>
        <p>{page}</p>
      </div>
    );
  }
  
}

export default Page;