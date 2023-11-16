
export interface ProfileProps {
  teamMemberId: number;
  teamMemberName: string;
  teamMemberImage: string;
  teamMemberTask: string[];
  teamMemberMajor: string[];
}
export interface ProfileBoxProps {
  hasProfileButton: boolean; //본 컴포넌트가 프로필보기 버튼을 가지는지 여부
  isBgColorWhite: boolean; //컴포넌트의 배경 색
  memberInfo: ProfileProps; // 유저 정보
  hasBorder: boolean; //border 존재 여부
  width?: number;
  height?: number;
}

//공모전 상세보기 정보
export interface RequestContestInfo {
  contestId: string;
}

export interface ResponseContestInfo {
  status: number;
  message: string;
  data: {
    contestId: string;
    title: string;
    images: string[];
    description: string;
    recruitDate: string;
    types: string[];
    subject: string;
    qualification: string;
    fullSchedule: string;
    price: string;
  };
}

//공모전 상세보기 팀 리스트
export interface RequestContestTeamList {
  contestId: string;
}
export interface ContestTeamList {
  max: number;
  cur: number;
  leaderMessage: string;
  leftMember: number;
  leaderInfo: ProfileProps;
  teamMemeberInfos: ProfileProps[];
}
export interface ResponseContestTeamList {
  status: number;
  message: string;
  data: ContestTeamList[];
}


