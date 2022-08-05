import React from "react";
import PropTypes from 'prop-types';
import { TableTitle,TableHeader,TransactionRow,TransactionDetails } from "./Transaction.styled";
import { Box } from "components/Box";

export const TransactionHistory = ({ transactions }) => {
    return (
        <Box as="table"
            width={480}
            ml="auto"
            mr="auto"
            mt="60px"
            p="0"
        boxShadow="custom">
            <thead>
                <TableHeader>
                    <TableTitle>Type</TableTitle>
                    <TableTitle>Amount</TableTitle>
                    <TableTitle>Currency</TableTitle>
                </TableHeader>
            </thead>
            <tbody>
                {transactions.map(({ id, type, amount, currency }) => {
                    return (
                        <TransactionRow key={id}>
                            <TransactionDetails>{type.charAt(0).toUpperCase() + type.slice(1)}</TransactionDetails>
                            <TransactionDetails>{amount}</TransactionDetails>
                            <TransactionDetails>{currency}</TransactionDetails>
                        </TransactionRow>
                    );
                })}</tbody>
        </Box>);
};

TransactionHistory.propTypes = { 
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
     }),
  ),
};
