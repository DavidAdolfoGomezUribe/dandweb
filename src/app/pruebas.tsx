//Este archivo esta creado para poder hacer experimentos de funcionalidad
//Debido a que la sintaxis es nueva, este es un mero borrador que permitira salir de dudas en el futuro


"use client"; //esto es para decirle a next.js que redenderice esto del lado del cliente, es necesario para los componentes de react
import { Dispatch, SetStateAction, useState } from "react"; //asi se importa en ts




export function NewDiv() { // esta funcion lo que hace es crear un nuevo elemento div 

const [mostrarMensaje, setMostrarMensaje] = useState(false); //useState es un hook(funcion especial) que permite usar carateristicas de react
//por lo tanto debe primero declararse como esta arriba, useState(false) es el estado inicial
  return (
    <div>
      <h1
        onMouseOver={() => setMostrarMensaje(true)}//cuando el mause esta sobre el elemento 
        onMouseOut={() => setMostrarMensaje(false)}//cuando el mause esta afuera del elemento
      >
        pasa el mouse por aqui
      </h1>
      
      {mostrarMensaje && <p>Hola a todos</p>}{/*“Si mostrarMensaje es verdadero, entonces muestra el <p>Hola a todos</p>”.Declaracion de ternarios */}
    </div>
  );
}

// Props del botón //los props son como los parámetros de una función, pero para componentes.
type ButtonProps = {
  setCount: Dispatch<SetStateAction<number>>; //esto es para declarar una funcion que despacha un nuevo estado
  count: number;
};

// Componente Button
export function Button({ setCount, count }: ButtonProps) { //parametros de la funcion en este caso count se le ingresa del lado donde c exporta
  return (
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
  );
}