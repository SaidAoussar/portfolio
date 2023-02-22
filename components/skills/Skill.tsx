import { ReactNode } from "react";
import { theme, Typography } from "antd";
import styled from "styled-components";

interface StyledSkillProps {
  $borderColor: string;
}

const StyledSkill = styled.div<StyledSkillProps>`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.$borderColor};
`;

const SkillIcon = styled.div`
  margin-right: 12px;
  border-radius: 6px;
`;

const SkillText = styled(Typography.Paragraph)`
  && {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 0px;
  }
`;

const Skill = ({ name, icon }: { name: string; icon: ReactNode }) => {
  const { token } = theme.useToken();
  return (
    <StyledSkill $borderColor={token.colorBorderSecondary}>
      <SkillIcon>{icon}</SkillIcon>
      <SkillText>{name}</SkillText>
    </StyledSkill>
  );
};

export default Skill;
