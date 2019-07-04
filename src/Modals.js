import React from "react";
import Modal from "react-responsive-modal";

export default class Modals extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div key={this.props.index}>
        <button onClick={this.onOpenModal}>Open modal</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>{this.props.header}</h2>
          <p>{this.props.text}</p>
        </Modal>
      </div>
    );
  }
}
