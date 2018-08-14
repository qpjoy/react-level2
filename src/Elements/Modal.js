import React, { Component } from 'react';
import styled from 'styled-components';
import { Portal, absolute } from 'Utilities';
import { Card } from './Cards';
import Icon from './Icon';

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        {on && (
          <ModalWrapper>
            <ModalCard>
              <CloseButton onClick={toggle}>
                <Icon name="close" />
              </CloseButton>
              <div>{children}</div>
            </ModalCard>
            <Background onClick={toggle} />
          </ModalWrapper>
        )}
      </Portal>
    );
  }
}

const ModalWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  ${absolute()};
  top: 0;
  width: 100%;
`;

const ModalCard = Card.extend`
  margin-bottom: 100px;
  min-width: 270px;
  position: relative;
  z-index: 10;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  padding: 10px;
  position: absolute;
  right: 0;
  top: 0;
`;

const Background = styled.div`
  background: black;
  height: 100%;
  left: 0;
  position: absolute;
  opacity: 0.5;
  top: 0;
  width: 100%;
`;
