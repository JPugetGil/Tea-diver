import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Row } from './row.component';

const DataDisplayerBlock = styled.div`
  margin: 10px 0;
  border-radius: 10px;
  background-color: ${(props) => props.theme.QUINTERNARY};
`;

export const DataDisplayer = ({ data }) => {
  console.log(data);

  return (
    <DataDisplayerBlock>
      {_.map(data, (value, key) => (
        <Row key={key} name={key} value={value} />
      ))}
    </DataDisplayerBlock>
  );
};

DataDisplayer.propTypes = {
  data: PropTypes.object,
};
