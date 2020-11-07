/* eslint-disable no-undef */
const 
  nuevaString,const nuevaStrig = {hola};
  nuevoNum,const nuevoNum = 8;
  nuevoBool,const nuevoBool = true;
  nuevaResta,const nuevaResta = 10 - 5 === 5;const nuevaMultiplicacion = 10 * 4 === 40 ;
  nuevaMultiplicacion,const nuevaMultiplicacion = 10 * 4 === 40 ;
  nuevoModulo,const nuevoModulo = 21 % 5 === 1;
  devolverString,function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
    return str;
}
  tienenMismaLongitud,function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  return str1.length === str2.length;
}
  sonIguales,function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x === y) {
    return true;
  } else {
    return false;
  }
  menosQueNoventa,function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num < 90) {
    return true;
  } else {
    return false;
  }
  mayorQueCincuenta,function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num > 50)
{}  return num > 50;
}
  suma,function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  return x + y;
}
  resta,function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  return x - y;
}
  divide,function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  return x / y;
}
  multiplica,function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return x * y;
  obtenerResto,function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return x % y;
  esPar,function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if( num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
  esImpar,function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num % 2 === 1) {
    return true;
  } else {
    return false;
  }
}
  elevarAlCuadrado,function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return Math.pow(num, 2);
}
  elevarAlCubo,function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return num * num * num;
}
  elevar,function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return Math.pow(num, exponent);
}
  redondearNumero,function redondearNumero(num) {
  // Redondea "num" y devuélvelo
  // Tu código:
  // var resto = num % 1;
  // var entero = num - resto;
  // if (resto >= 0.5) {
  //   return entero + 1;
  // } else {
  //   return entero;
  // }
  return Math.round(num);
}
  redondearHaciaArriba,function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba y devuélvelo
  // Tu código:
  return Math.ceil(num);
}
  agregarSimboloExclamacion,function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str + '!';
}
  combinarNombres,function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var combinado = nombre + ' ' + apellido;
  return combinado;
}
  obtenerSaludo,function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return 'Hola ' + nombre + '!';
}
  obtenerAreaRectangulo,function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
  return alto * ancho;
}
} = require('../homework.js');

describe('nuevaString', function() {
  it('Deberia ser un string', function() {
    expect(typeof nuevaString).toBe('string');
  });
});

describe('nuevoNum', function() {
  it('Deberia ser un numero', function() {
    expect(typeof nuevoNum).toBe('number');
  });
});

describe('nuevoBool', function() {
  it('Deberia ser un booleano', function() {
    expect(typeof nuevoBool).toBe('boolean');
  });
});

describe('nuevaResta', function() {
  it('Deberia ser un booleano', function() {
    expect(nuevaResta).toBe(true);
  });
});

describe('nuevaMultiplicacion', function() {
  it('Deberia ser un booleano', function() {
    expect(nuevaMultiplicacion).toBe(true);
  });
});

describe('nuevoModulo', function() {
  it('Deberia ser un booleano', function() {
    expect(nuevoModulo).toBe(true);
  });
});

describe('devolverString(str)', function() {
  it('Deberia devolver el string provisto', function() {
    let string = 'lambdaSchool';
    expect(devolverString(string)).toBe(string);
  });
});

describe('suma(x, y)', function() {
  it('Deberia devolver la suma de los dos argumentos', function() {
    expect(suma(5, 5)).toBe(10);
    expect(suma(-1, 5)).toBe(4);
  });
});

describe('resta(x, y)', function() {
  it('Deberia devolver la diferencia de los dos argumentos', function() {
    expect(resta(5, 5)).toBe(0);
    expect(resta(-1, 5)).toBe(-6);
    expect(resta(5, -5)).toBe(10);
    expect(resta(0, 0)).toBe(0);
  });
});

describe('divide(x, y)', function() {
  it('Deberia devolver la division de los dos argumentos', function() {
    expect(divide(5, 5)).toBe(1);
    expect(divide(10, 5)).toBe(2);
    expect(divide(11, 2)).toBe(5.5);
  });
});

describe('multiplica(x, y)', function() {
  it('Deberia devolver el producto de los dos argumentos', function() {
    expect(multiplica(5, 5)).toBe(25);
    expect(multiplica(10, -5)).toBe(-50);
    expect(multiplica(11, 0)).toBe(0);
  });
});


describe('sonIguales(x, y)', function() {
  it('Deberia devolver true si los argumentos son iguales y sino false', function() {
    expect(sonIguales(15, 15)).toBe(true);
    expect(sonIguales(90, 50)).toBe(false);
    expect(sonIguales('test', 'test')).toBe(true);
  });
});

describe('tienenMismaLongitud(str1, str2)', function() {
  it('Deberia devolver true si los strings tienen la misma longitud y sino false', function() {
    expect(tienenMismaLongitud('hi', 'there')).toBe(false);
    expect(tienenMismaLongitud('javascript', 'bumfuzzled')).toBe(true);
  });
});

describe('menosQueNoventa(num)', function() {
  it('Deberia devolver true si el numero es menor a noventa sino false', function() {
    expect(menosQueNoventa(15)).toBe(true);
    expect(menosQueNoventa(90)).toBe(false);
    expect(menosQueNoventa(100)).toBe(false);
  });
});

describe('mayorQueCincuenta(num)', function() {
  it('Deberia devolver true si el numero es mayor a cincuenta sino false', function() {
    expect(mayorQueCincuenta(15)).toBe(false);
    expect(mayorQueCincuenta(50)).toBe(false);
    expect(mayorQueCincuenta(60)).toBe(true);
  });
});

describe('obtenerResto(x, y)', function() {
  it('Deberia devolver el resto de dividir x sobre y', function() {
    expect(obtenerResto(15, 5)).toBe(0);
    expect(obtenerResto(21, 5)).toBe(1);
    expect(obtenerResto(22, 5)).toBe(2);
  });
});

describe('esPar(num)', function() {
  it('Deberia devolver true si el numero es par sino false', function() {
    expect(esPar(6)).toBe(true);
    expect(esPar(7)).toBe(false);
    expect(esPar(0)).toBe(true);
  });
});

describe('esImpar(num)', function() {
  it('Deberia devolver true si el numero es impar sino false', function() {
    expect(esImpar(6)).toBe(false);
    expect(esImpar(7)).toBe(true);
    expect(esImpar(0)).toBe(false);
  });
});

describe('elevarAlCuadrado(num)', function() {
  it('Deberia devolver el numero elevado al cuadrado', function() {
    expect(elevarAlCuadrado(6)).toBe(36);
    expect(elevarAlCuadrado(7)).toBe(49);
    expect(elevarAlCuadrado(0)).toBe(0);
    expect(elevarAlCuadrado(-5)).toBe(25);
  });
});

describe('elevarAlCubo(num)', function() {
  it('Deberia devolver el numero elevado al cubo', function() {
    expect(elevarAlCubo(3)).toBe(27);
    expect(elevarAlCubo(0)).toBe(0);
    expect(elevarAlCubo(-5)).toBe(-125);
  });
});

describe('elevar(num, exponent)', function() {
  it('Deberia devolver el numero elevado al exponente indicado', function() {
    expect(elevar(2, 2)).toBe(4);
    expect(elevar(2, 3)).toBe(8);
    expect(elevar(0, 5)).toBe(0);
    expect(elevar(10, 1)).toBe(10);
  });
});

describe('redondearNumero(num)', function() {
  it('Deberia devolver el numero redondeado', function() {
    expect(redondearNumero(1.5)).toBe(2);
    expect(redondearNumero(2)).toBe(2);
    expect(redondearNumero(0.1)).toBe(0);
  });
});

describe('redondearHaciaArriba(num)', function() {
  it('Deberia devolver el numero redondeado para arriba', function() {
    expect(redondearHaciaArriba(1.5)).toBe(2);
    expect(redondearHaciaArriba(2)).toBe(2);
    expect(redondearHaciaArriba(0.1)).toBe(1);
  });
});

describe('agregarSimboloExclamacion(str)', function() {
  it('Deberia agregar un signo de exclamacion al final del string', function() {
    expect(agregarSimboloExclamacion('hello world')).toBe('hello world!');
    expect(agregarSimboloExclamacion('Soy Henry')).toBe('Soy Henry!');
  });
});

describe('combinarNombres(firstName, lastName)', function() {
  it('Deberia devolver los strings combinados con un espacio en el medio', function() {
    expect(combinarNombres('hello', 'world')).toBe('hello world');
    expect(combinarNombres('Soy', 'Henry')).toBe('Soy Henry');
  });
});

describe('obtenerSaludo(name)', function() {
  it('Deberia devolver el string \'Hola {name}!\'', function() {
    expect(obtenerSaludo('Martin')).toBe('Hola Martin!');
    expect(obtenerSaludo('Antonio')).toBe('Hola Antonio!');
  });
});

describe('obtenerAreaRectangulo(alto, ancho)', function() {
  it('Deberia retornar el area correcta del rectangulo', function() {
    expect(obtenerAreaRectangulo(2, 2)).toBe(4);
    expect(obtenerAreaRectangulo(3, 6)).toBe(18);
    expect(obtenerAreaRectangulo(0, 2)).toBe(0);
  });
});
