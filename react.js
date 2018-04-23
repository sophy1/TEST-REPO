    import React from 'react';

    class Hello extends React.Component {
        constructor(props) {
            super(props);
            this.state = { msg: 'hi' };
        }
        static getDerivedStateFromProps(nextProps, prevState) {
            if (nextProps.msg && nextProps.msg !== this.state.msg) { // REACT_STATIC_LIFECYCLE_INVALID_THIS alarm because 'this' is 'null' in static method so 'TypeError' occurs at this point when accessing 'this.state'.
                return { msg: nextProps.msg };
            }
            return null;
        }
        render() {
            return <div>{this.state.msg}</div>;
        }
    }
