import React from "react";
import PropTypes from 'prop-types';
import { StatSection,StatTitle ,StatsList,StatsItem,FromatInfo,PercentRating} from "./Statistics.styled";


export const Statistics = ({ title, stats }) => (
      <StatSection>
  <StatTitle >{title}</StatTitle>
        <StatsList > {stats.map(stat => (<StatsItem key={stat.id}>
            <FromatInfo >{stat.label}</FromatInfo>
            <PercentRating >{stat.percentage}%</PercentRating>
        </StatsItem>))}</StatsList>
</StatSection>
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