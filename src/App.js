/**#######################################################################################
 * Universidad del Valle de Guatemala
 * Departamento de Ciencias de la Computación
 * Ingeniería de Software 1 - Sección 10
 * 
 * Me Pet & Me
 * ! App: Para unir todos los componentes
 * 
 * Integrantes:
 * Cristian Laynez
 * Elean Rivas
 * Sara Paguaga
 * Diego Ruiz
 * Javier Alvarez
 #######################################################################################*/

// ---------------------------------------------------------------------------------------
// -> Importar los paquetes importantes
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
// ---------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------
// -> Importar el resto de las páginas
import Main from "./pages/Main";
import Emergency from "./pages/Emergency";
import Login from "./pages/Login";
import Popup from "./pages/Popup";
import Search from "./pages/Search";
import VetView from "./pages/Vetview";
// ---------------------------------------------------------------------------------------
 
function App() {

  const [currentPage, setCurrentPage] = useState("#main")

  useEffect(() => {
    window.history.pushState({}, '', '/main')
  })

  // -> Página Principal ----------------------------------------------------------------
  if(currentPage === '#main'){
    return (
      <Main
        setCurrentPage={setCurrentPage}
      />
    )
  }

  // -> Página Principal ----------------------------------------------------------------
  if(currentPage === '#emergency'){
    return (
      <Emergency
        setCurrentPage={setCurrentPage}
      />
    )
  }

  // -> Página Principal ----------------------------------------------------------------
  if(currentPage === '#login'){
    return (
      <Login
        setCurrentPage={setCurrentPage}
      />
    )
  }

  // -> Página Principal ----------------------------------------------------------------
  if(currentPage === '#popup'){
    return (
      <Popup
        setCurrentPage={setCurrentPage}
      />
    )
  }

  // -> Página Principal ----------------------------------------------------------------
  if(currentPage === '#search'){
    return (
      <Search
        setCurrentPage={setCurrentPage}
      />
    )
  }

  // -> Página Principal ----------------------------------------------------------------
  if(currentPage === '#vetview'){
    return (
      <VetView
        setCurrentPage={setCurrentPage}
      />
      )
    }
      
  // -> Por si no se selecciono una de las páginas anteriores ---------------------------
  return (
    <div className="App">
      <h1>...</h1>
    </div>
  );
}

export default App;
