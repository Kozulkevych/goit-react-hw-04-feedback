import PropTypes from 'prop-types';
import { SectionStyled } from './Section.styled';

const Section = ({
  titleH1: TitleH1 = '',
  titleH2: TitleH2 = '',
  children,
}) => (
  <SectionStyled>
    {TitleH1 && <TitleH1 />}
    {TitleH2 && <TitleH2 />}
    {children}
  </SectionStyled>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
