import { StyledSection } from "./styled";

const Section = ({ title, children }) => (
    <StyledSection>
        <h2>{title}</h2>
        {children}
    </StyledSection>
);

export default Section;