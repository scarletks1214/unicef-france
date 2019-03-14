import React from "react";
import Select from "react-select";
import styled from "styled-components";

import { alertError } from "../helpers/swal";
import "react-select/dist/react-select.css";

import media from "../media-query";
import Input from "./Input";
import Label from "./Label";
import Button from "./Button";

const cryptocurrencies = [
  {
    value: "btc",
    label: "Bitcoin"
  },
  {
    value: "eth",
    label: "Ethereum"
  },
  {
    value: "XRP",
    label: "Ripple"
  },
  {
    value: "LTC",
    label: "Litecoin"
  },
  {
    value: "EOS",
    label: "EOS"
  },
  {
    value: "XLM",
    label: "Stellar"
  },
  {
    value: "XMR",
    label: "Monero"
  },
  {
    value: "dash",
    label: "Dash"
  },
  {
    value: "DAI",
    label: "DAI"
  }
];

const MarginBottom = styled.div`
  margin-bottom: 20px;
`;
const Half = styled.div`
  margin-right: 10px;
  flex: 0 0 50%;
`;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-radius: 4px;
  background: #563d94;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  color: white;

  padding: 30px 30px;
  ${media.tablet`padding: 50px 50px`}
  ${media.tablet`min-width: 480px`}
`;

// zip code and state are wrapped in this
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

class SignupForm extends React.Component {
  state = {
    selectedOption: "btc",
    quantity: 1
  };

  handleCurrencyChange = selectedOption => {
    this.setState({
      selectedOption: selectedOption.value
    });
  };

  handleQuantityChange = e => {
    this.setState({
      quantity: e.target.value
    });
  };

  formSubmit = e => {
    e.preventDefault();
    if (true) {
      alertError("missing required fields");
    }
  };

  generateButtonText = () => {
    if (!this.state.quantity) {
      return `Please Enter a Quantity Above`;
    }
    return `Support unicef With ${this.state.quantity} ${this.state.selectedOption}`;
  }

  render() {
    const { selectedOption } = this.state;
    const value = selectedOption;

    return (
      <Container>
        <Label for="name">Your name (optional)</Label>
        <MarginBottom>
          <Input type="text" id="name" />
        </MarginBottom>

        <Label for="email">Your email (optional)</Label>
        <MarginBottom>
          <Input type="email" id="email" />
        </MarginBottom>

        <Row>
          <Half>
            <Label for="cryptocurrency">Currency</Label>
            <MarginBottom>
              <Select
                name="form-field-name"
                value={value}
                onChange={this.handleCurrencyChange}
                options={cryptocurrencies}
                id="cryptocurrency"
              />
            </MarginBottom>
          </Half>
          <Half>
            <Label for="quantity">Quantity ({this.state.selectedOption})</Label>
            <MarginBottom>
              <Input
                type="number"
                id="quantity"
                value={this.state.quantity}
                onChange={this.handleQuantityChange}
              />
            </MarginBottom>
          </Half>
        </Row>

        <Button onClick={this.formSubmit}>{this.generateButtonText()}</Button>
      </Container>
    );
  }
}

export default SignupForm;
