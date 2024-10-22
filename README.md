# Archivo README.md del proyecto de programación por componentes

  

Para abrir la pagina del servidor ingresar, desde la terminal, en /server y ejecutar <code>npm run dev</code>

Para abrir la pagina del cliente hay que ingresar, desde la terminal, en /client y ejecutar <code>npm run dev</code>

### Añadiduras:
- Añadí interfaz de cliente para que pueda visualizar en una tabla todos los datos del archivo JSON.
- Añadí un archivo persistente de JSON para mantener los cambios que se registren.

## Pruebas de funcionamiento

**Método GET (Principal)**

**URL:** http://localhost:3000/api

*Desde Thunder Client:*

![Método GET (Principal) Thunder Client](https://github.com/D-LozanoC/Proyecto-Express-Node---React-Vite/blob/master/Pasted%20image%2020241022000132.png)

*Desde Web:*

![Método GET (Principal) Web](https://github.com/D-LozanoC/Proyecto-Express-Node---React-Vite/blob/master/Pasted%20image%2020241022000240.png)

**Conclusiones:** Me mostró todos los datos del archivo JSON

---
**Método GET (Individual)**

**URL:** http://localhost:3000/api/:id

*Desde Thunder Client:*

![Método GET (Individual) Thunder Client](https://github.com/D-LozanoC/Proyecto-Express-Node---React-Vite/blob/master/Pasted%20image%2020241022000615.png)

*Desde Web:*

![Método GET (Individual) Web](https://github.com/D-LozanoC/Proyecto-Express-Node---React-Vite/blob/master/Pasted%20image%2020241022000544.png)

**Conclusiones:** Me mostro el registro con el id pedido

---
**Método POST**

**URL:** http://localhost:3000/api

*Desde Thunder Client:*

![Método POST](https://github.com/D-LozanoC/Proyecto-Express-Node---React-Vite/blob/master/Pasted%20image%2020241022000712.png)

**Conclusiones:** Genero un nuevo registro de los parámetros que le pedí

---
**Método PUT**

**URL:** http://localhost:3000/api/:id

*Desde Thunder Client:*

![Método PUT](https://github.com/D-LozanoC/Proyecto-Express-Node---React-Vite/blob/master/Pasted%20image%2020241022001144.png)

**Conclusiones:** Cambió el registro con el id y parámetros que le pedí

---
**Método DELETE**

**URL:** http://localhost:3000/api/:id

*Desde Thunder Client:*

![Método DELETE](https://github.com/D-LozanoC/Proyecto-Express-Node---React-Vite/blob/master/Pasted%20image%2020241022001315.png)

**Conclusiones:** Borro el registro con el id que le pedí

---

---

@Creado por David Alexis Lozano Clavijo - 20221578010
