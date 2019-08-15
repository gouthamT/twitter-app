import React, { Component } from 'react';
import modalService from '../../../helpers/modalService';

class ModalFactory extends Component {
  constructor(props) {
    super(props);
    this.state = { isModalActive: false };
    this.ChildComponent = null;
    this.ChildComponentProps = null;
    this.hide = this.hide.bind(this);
    modalService.init(this);
  }

  show(ChildComponent, propsToChildComponent) {
    if (ChildComponent) {
      this.ChildComponent = ChildComponent;
      this.ChildComponentProps = propsToChildComponent;
      this.setState({ isModalActive: true });
    }
  }

  hide() {
    this.ChildComponent = null;
    this.ChildComponentProps = null;
    this.setState({ isModalActive: false });
  }

  render() {
    let { ChildComponent, ChildComponentProps } = this;
    
    if (!this.state.isModalActive || !ChildComponent) { return null; }
    
    return <section className='modal__container' role="dialog">
      <button className='btn btn__close-modal' onClick={this.hide}>x</button>
      <ChildComponent {...ChildComponentProps} />
    </section>;
  }
}

export default ModalFactory;