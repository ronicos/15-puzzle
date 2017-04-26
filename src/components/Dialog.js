import React from 'react';
import { Dialog as MaterialDialog } from 'material-ui';
import FlatButton from 'material-ui/FlatButton';

export const Dialog = (Component) => class extends React.Component {
  state = {
    open: true,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];

    return (
      <div>
        <MaterialDialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <Component />
        </MaterialDialog>
      </div>
    );
  }
};
