import React from "react";
import PropTypes from 'prop-types';
import { StatTitle ,StatsList,StatsItem,FromatInfo,PercentRating} from "./Statistics.styled";
import { Box } from "components/Box";

export const Statistics = ({ title, stats }) => (
  <Box width={320}
    display="flex"
    flexDirection="column"
    alignItems="center"
    ml="auto"
    mr="auto"
    mt="45px"
    mb="45px"
    boxShadow="custom"
  as="section">
  <StatTitle >{title}</StatTitle>
    <StatsList > {stats.map(({ id, label, percentage }) => (<StatsItem key={id}>
            <FromatInfo >{label}</FromatInfo>
            <PercentRating >{percentage}%</PercentRating>
        </StatsItem>))}</StatsList>
</Box >
)

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};