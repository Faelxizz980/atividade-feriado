export const getIbge = async (siglaUF) => {
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${siglaUF}/municipios`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar dados do IBGE:', error);
    throw error;
  }
};
