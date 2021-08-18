import * as S from "./styles";

const ProfileData = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Cadastra-se</S.Title>
        <S.Text>
          Você fazendo o seu cadastro torna ainda mais fácil a sua comunicação
          com o doador.
        </S.Text>
        <S.Form>
          <S.SubTitle>1.Cadastro de dados</S.SubTitle>
          <S.Label>
            Nome da ONG: <S.Input />
          </S.Label>
        </S.Form>
      </S.Content>
    </S.Container>
  );
};

export default ProfileData;