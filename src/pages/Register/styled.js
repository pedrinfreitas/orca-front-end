import styled from "styled-components";
import cores from "../../global-css";

export const Register_div = styled.div`
.register-bg{
  max-width: 100%;
  /* background: var(--branco); */
}
.bloco {
  /* border-top: 2px solid var(--azul-escuro); */
  /* border-bottom: 2px solid ${cores.verde}; */
  max-width: 100%;
  padding: 0 40px 0 40px;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;      
}

.register-info{    
  /* margin-left: 10%; */
  flex-grow: 1;
  max-width: 50%; 
  min-width: 300px;   
}

.register-info h1{
  font-size: 3em;
  margin-bottom: 0.5em;
  color: var(--azul-escuro);
}

.register-info p{
  font-size: 1.25em;
  line-height: 1.4;
  margin-bottom: 1em;
  color: var(--azul-escuro);
}

.register-form{
  flex-grow: 1;
  max-width: 50%;
  min-width: 300px;
  margin-right: 10%;
}
 
`;