import styled from 'styled-components';

export const ListOfFriends = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(235, 248, 243);
`;

export const FriendItem = styled.li`
  width: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  padding-left: 80px;
  padding-right: 80px;
  background-color: rgb(220, 252, 189);
  border-radius: 10px;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Picture = styled.img`
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
`;

export const FriendName = styled.span`
  display: block;
  font-size: 16px;
  font-weight: bold;
  width: 40px;
`;

const setBgColor = props => {
  switch (props.eventType) {
    case true:
      return 'green';
    case false:
      return 'red';
    default:
      return 'black';
  }
};

export const IsOnline = styled.span`
  display: block;
  background-color: ${setBgColor};
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
