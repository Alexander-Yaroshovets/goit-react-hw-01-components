import styled from 'styled-components';

export const Transaction = styled.table`
  font-family: 'Lucida Sans Unicode', 'Lucida Grande', Sans-Serif;
  font-size: 14px;
  border-radius: 10px;
  border-spacing: 0;
  text-align: center;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const TransactionHead = styled.thead`
  background: #bcebdd;
  color: white;
  text-shadow: 0 1px 1px #2d2020;
`;

export const TransactionBody = styled.tbody`
  background: #f5d7bf;
  font-size: 14px;
  border: 1px solid black;
`;

export const Table = styled.td`
  padding: 10px;
  border: 1px solid red;
`;

export const TableHead = styled.th`
  padding: 20px;
  border: 2px solid blueviolet;
  border-radius: 10%;
`;
