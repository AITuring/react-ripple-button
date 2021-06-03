import { Componet } from 'react';
import Transition from 'react-transition-group/Transition';

import './ripple.css'

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

  render() {
    const {
      className,
      rippleX,
      rippleY,
      rippleSize,
      color,
      timeout,
      ...other
    } = this.props

    const { wrapperExiting, rippleEntering } = this.state;

    return (
      <Transition
        onEnter={this.handleEnter}
        onExit={this.handleExit}
        timeout={timeout}
        {...other}
      >
        <span className={wrapperExiting ? 'rtr-ripple-wrapper-exiting' : ''}>
            <span 
                className={rippleEntering ? 'rtr-ripple-entering' : ''}
                style={{
                    width: rippleSize,
                    height: rippleSize,
                    top: rippleY - (rippleSize / 2),
                    left: rippleX - (rippleSize / 2),
                    backgroundColor: color,
                }} 
            />
        </span>
      </Transition>
    )
  }

}

export default Ripple;