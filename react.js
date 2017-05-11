import React from 'react';

class Hello extends React.Component {
    render() {
        return (
            <a href="#" onClick={event => false}> {/* BAD_EVENT_HANDLER_RETURN_FALSE alarm */}
                foo.com
            </a>
        );
    }
}
