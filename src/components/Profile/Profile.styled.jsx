import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
  background-color: rgb(231, 243, 239);
`;

export const ProfileDiscription = styled.div`
  display: block;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px 10px 0px 0px;
`;

export const Avatar = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  border-radius: 0px 0px 10px 10px;
  height: auto;
`;

export const ProfileName = styled.p` display: flex;
justify-content: center;
align-items: center;
font-size: 24px;
font-weight: bold;
}`;

export const Tag = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
`;

export const Location = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: small;
`;
export const Statistic = styled.ul`
  display: flex;
  width: 340px;
  justify-content: space-between;
  background-color: chocolate;
  align-items: center;
  padding: 0px;
  margin: 0px;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: calc(100% / 3);
`;
