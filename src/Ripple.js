import { Componet } from 'react';

class Ripple extends Componet {
  constructor(props) {
    super(props)
    this.state ={
      rippleEntering: false,
      wrapperExiting: false
    }
  }

  handleEnter = () => {
    this.setState({
      rippleEntering: true
    })
  }

  handleExit = () => {
    this.setState({
      wrapperExiting: true
    })
  }

}

export default Ripple;