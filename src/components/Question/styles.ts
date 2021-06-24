import styled from "styled-components";

export const Container=styled.div`
  background:${({ theme }) => theme.colors.bg.input } ;
  border-radius:.8rem;
  box-shadow: 0 0.1rem 0.4rem  ${({ theme }) => theme.isLight ? "rgba(0,0,0,20%)" : "rgba(24,24,24,20%)" } ;
  padding:2.4rem;

  & + &{
    margin-top:0.8rem;
  }

  p{
    color: ${({ theme }) => theme.colors.textColor.primary };
  }

  footer{
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-top:2.4rem;
  }
`;

export const User = styled.div`
  display:flex;
  align-items:center;
  gap:1.2rem;

  > img {
    width:${({ theme }) => theme.spacings.xl};
    height:${({ theme }) => theme.spacings.xl};
    border-radius:50%;
  }
  >span{
    font-size:${({ theme})=>theme.font.sizes.sm};
    color:${({ theme }) => theme.colors.textColor.details};
  }
`;

export const Buttons=styled.div`
  >button{
    border:0;
    background:transparent;
    cursor:pointer;

    &.btnLike{
      display:flex;
      align-items:flex-end;
      color:${({ theme }) => theme.colors.textColor.details};
      gap:.8rem;
      transition:all 0.2s;

      >svg path{
        stroke:${({ theme }) => theme.colors.textColor.details};
      }

      &.liked{
        color:${({ theme }) => theme.colors.purple.light};

        >svg path{
          stroke:${({ theme }) => theme.colors.purple.light};
        }
      }

      &:disabled{
        cursor:not-allowed;
      }
    }

    &:hover{
      filter:brightness(0.8);
    }
    
  }
`;