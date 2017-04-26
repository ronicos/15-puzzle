import React from 'react';

export const List = (items) => (ListItemComponent) => class extends React.Component {
  displayName = 'List';

  render() {
    return (
      <div>
        {
          ([...items]).map((prop) => <ListItemComponent { ...prop } />)
        }
      </div>
    );
  }
};
