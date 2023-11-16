import { styled } from 'styled-components';
import { chargeList } from '../../constants/payment';
import ChargeBox from './ChargeBox';
import { useState } from 'react';
import Title from '../common/Title';
import Button from '../common/Button';

const PaymentChargeBox = () => {
  const [currentTicket, setCurrentTicket] = useState(3);
  const [chargeTicket, setChargeTicket] = useState(5);
  const [afterTicket, setAfterTicket] = useState(currentTicket + chargeTicket);
  const [selectedChargeBoxId, setSelectedChargeBoxId] = useState(1);

  const handleChargeBoxSelect = (id: number) => {
    setSelectedChargeBoxId(id);
  };
  // 임시
  setCurrentTicket;
  setChargeTicket;
  setAfterTicket;

  return (
    <PaymentChargeContainer>
      <TitleBox>
        <Title>충전 수량 선택</Title>
      </TitleBox>
      <PaymentChargeBoxContainer>
        <ChargeBoxContainer>
          {chargeList.map((charge) => (
            <ChargeBox
              key={charge.id}
              count={charge.count}
              price={charge.price}
              isSelected={charge.id === selectedChargeBoxId}
              onSelect={() => handleChargeBoxSelect(charge.id)}
            />
          ))}
        </ChargeBoxContainer>
        <ChargeCalcBoxContainer>
          <CalcContent>
            현재 보유 티켓
            <Ticket src={'/assets/images/common/ticket.svg'} />
            <p>{currentTicket}장</p>
          </CalcContent>
          <CalcContent>
            <h1>+</h1> 충전 티켓
            <Ticket src={'/assets/images/common/ticket.svg'} />
            <span>{chargeTicket}장</span>
          </CalcContent>
          <CalcTotalHr />
          <CalcContent>
            충전 후 보유 티켓
            <Ticket src={'/assets/images/common/ticket.svg'} />
            <span>{afterTicket}장</span>
          </CalcContent>
          <CalcHr />
          <div>
            <p>지금 티켓을 충전하시면,</p>
            <p>
              <span>총 {afterTicket}명</span>의 한 줄 추천사를
            </p>
            <p>언제든지 자유롭게 열람하실 수 있어요!</p>
          </div>
          <ButtonBox>
            <Button>
              <LightningIcon src={'/assets/images/payment/lightning.svg'} />
              티켓 충전하기
            </Button>
          </ButtonBox>
        </ChargeCalcBoxContainer>
      </PaymentChargeBoxContainer>
    </PaymentChargeContainer>
  );
};

export default PaymentChargeBox;

const PaymentChargeContainer = styled.div`
  margin: 4rem 0;
`;

const PaymentChargeBoxContainer = styled.div`
  display: flex;
  gap: 3rem;
`;

const ChargeBoxContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

const ChargeCalcBoxContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.gray5};
  padding: 4rem 6rem;
  gap: 2.5rem;
  border-radius: 12px;
  p {
    ${({ theme }) => theme.fonts.bodyXL};
    color: ${({ theme }) => theme.colors.gray90};
  }
  p > span {
    color: ${({ theme }) => theme.colors.primary60};
  }
`;

const CalcContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.2rem;
  ${({ theme }) => theme.fonts.heading4};
  color: ${({ theme }) => theme.colors.gray90};
  white-space: nowrap;

  h1 {
    width: 100%;
    text-align: left;
  }
  p {
    ${({ theme }) => theme.fonts.subtitleXL};
    color: ${({ theme }) => theme.colors.gray90};
  }
  span {
    ${({ theme }) => theme.fonts.subtitleXL};
    color: ${({ theme }) => theme.colors.primary60};
  }
`;

const Ticket = styled.img`
  width: 3.3rem;
  height: 3rem;
`;

const CalcTotalHr = styled.hr`
  width: 100%;
  border: 0.2px solid ${({ theme }) => theme.colors.gray30};
`;

const CalcHr = styled.hr`
  width: 100%;
  border: 0.5px solid ${({ theme }) => theme.colors.gray50};
`;

const LightningIcon = styled.img`
  width: 1.6rem;
  height: 2.7rem;
`;

const TitleBox = styled.div`
  margin-bottom: 1rem;
`;

const ButtonBox = styled.div`
  padding: 0 6rem;
`;