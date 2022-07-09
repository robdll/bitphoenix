import React from "react";
import PropTypes from "prop-types";

function withWebSocket(WrappedComponent) {
  return class WithWebSocket extends React.Component {
    state = {
      subscribed: false,
      subscribing: true,
    };

    subscribe = ({ newOpenMsg, newOnMessage } = {}) => {
      if (newOpenMsg) this.openMsg = newOpenMsg;
      if (newOnMessage) this.onMessage = newOnMessage;
      this.ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
      this.ws.onopen = this.onOpen;
      this.ws.onmessage = this.onMessage;
      this.ws.onerror = this.onError;
      this.setState({ subscribing: true });
    };

    unsubscribe = (err) => {
      this.ws.close();
      this.ws = null;
      this.setState({ subscribed: false });
      //try reconnect
      if (err) {
        this.subscribe();
      }
    };

    toggle = () => (this.ws ? this.unsubscribe() : this.subscribe());

    onOpen = () => this.ws.send(JSON.stringify(this.openMsg));

    onError = (err) => this.unsubscribe(err);

    subscribeSuccess = () =>
      this.setState({
        subscribed: true,
        subscribing: false,
      });

    render() {
      const { subscribed, subscribing } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          ws={{
            subscribed,
            subscribing,
            subscribeSuccess: this.subscribeSuccess,
            subscribe: this.subscribe,
            unsubscribe: this.unsubscribe,
            toggle: this.toggle,
          }}
        />
      );
    }
  };
}

export const propTypesWS = {
  subscribed: PropTypes.bool.isRequired,
  subscribing: PropTypes.bool.isRequired,
  subscribeSuccess: PropTypes.func.isRequired,
  subscribe: PropTypes.func.isRequired,
  unsubscribe: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default withWebSocket;
