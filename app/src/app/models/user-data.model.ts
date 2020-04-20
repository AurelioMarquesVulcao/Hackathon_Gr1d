export class DADOS_DA_PONTUACAO {
    IMPEDIMENTO: string;
    INFRACOES_PONTUAVEIS_ULTIMOS_5_ANOS: string;
}

export interface RESPOSTA {
    soapEnvelope: DADOS_DA_PONTUACAO[];

}

export interface SOLICITACAO {
    soapEnvelope: RESPOSTA[];
}

export interface INFO_XML {
    soapEnvelope: SOLICITACAO[];
}

export interface CNHResult {
    soapEnvelope: INFO_XML[];
}

export interface CNHResponse {
    soapEnvelope: CNHResult[];
}

export class  SEGUROS{
    SEGUROS: string;
}
