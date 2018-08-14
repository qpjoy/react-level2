import React, { Component } from 'react';
import styled from 'styled-components';
import { Portal, absolute, center } from 'Utilities';
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
  ${absolute({})};
  ${center()};
  height: 100%;
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
  ${absolute({
    x: 'right'
  })};
`;

const Background = styled.div`
  ${absolute({})};
  background: black;
  height: 100%;
  opacity: 0.5;
  width: 100%;
`;
