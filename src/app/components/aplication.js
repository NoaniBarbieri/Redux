import React from "react";

import Listagem from "./clients/listagem";

class Aplicacao extends React.Component {
  render() {
    return (
      <div className="Aplicacao">
        <Listagem />
      </div>
    );
  }
}

export default Aplicacao;
