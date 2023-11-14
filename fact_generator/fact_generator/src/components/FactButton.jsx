import React from 'react';


class FactButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fact: '',
    };
  }

  // Método para chamar a API e atualizar o estado com o novo fato
  chamarAPI = () => {
    const limit = 1;

    $.ajax({
      method: 'GET',
      url: `https://api.api-ninjas.com/v1/facts?limit=${limit}`,
      headers: { 'X-Api-Key': 'KtC6Xw5jPNd9ART+Q0oKJQ==iS46nXlKJbaHpd5v' },
      contentType: 'application/json',
      success: (result) => {
        // Atualiza o estado do componente com o novo fato
        this.setState({ fact: result[0]?.fact || 'Nenhum fato disponível' });
      },
      error: (jqXHR) => {
        console.error('Erro: ', jqXHR.responseText);
      },
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.fact}</p>
        <button onClick={this.chamarAPI}>Obter Novo Fato</button>
      </div>
    );
  }
}

export default FactButton;
