-- #######################################################
--                          MercaditoTEC
-- #######################################################

USE MercaditoTEC

-- =======================================================
-- Descripción: Creación de la tabla Administrador, los 
-- atributos que la componen y su tipo de dato.
-- =======================================================

CREATE TABLE Administrador(
	Nombre varchar(30) NOT NULL,
	Telefono int NOT NULL,
	Cédula varchar(30) NOT NULL PRIMARY KEY,
	Correo varchar(30) NOT NULL,
	Apellidos varchar(30) NOT NULL
);

USE MercaditoTEC
-- =======================================================
-- Descripción: Creación de la tabla Categoria, los 
-- atributos que la componen y su tipo de dato.
-- =======================================================
CREATE TABLE Categoria(
	Tipo varchar(30) NOT NULL,
	Puntaje int NOT NULL,
	Nombre varchar(30) NOT NULL PRIMARY KEY
);

USE MercaditoTEC
-- =======================================================
-- Descripción: Creación de la tabla Chat, los 
-- atributos que la componen y su tipo de dato.
-- =======================================================
CREATE TABLE Chat(
	Fecha date NOT NULL,
	Hora time NOT NULL,
	Comprador int NOT NULL,
	Vendedor int NOT NULL,
	Mensaje varchar (50) NOT NULL,
	idMensaje int IDENTITY(1,1) PRIMARY KEY 
);

USE MercaditoTEC
-- =======================================================
-- Descripción: Creación de la tabla Empleador, los 
-- atributos que la componen y su tipo de dato.
-- =======================================================
CREATE TABLE Empleador(
	Nombre varchar(30) NOT NULL,
	Apellido varchar(30) NOT NULL,
	Correo varchar(30) NOT NULL,
	NombreEmpresa varchar(30) NOT NULL,
	Telefono int NOT NULL,
	Cedula int PRIMARY KEY,
	TelefonoEmpresa int NOT NULL,
	CorreoEmpresa varchar(30) NOT NULL
);

USE MercaditoTEC
-- =======================================================
-- Descripción: Creación de la tabla Estudiante, los 
-- atributos que la componen y su tipo de dato.
-- =======================================================
CREATE TABLE Estudiante(
	Nombre varchar(30) NOT NULL,
	Apellidos varchar(30) NOT NULL,
	Correo varchar(30) NOT NULL,
	Puntos int NOT NULL,
	Telefono int NOT NULL,
	Carnet int,
	IDEstudiante int IDENTITY(1,1) PRIMARY KEY,
	FechaActividad date NOT NULL
);

USE MercaditoTEC
-- =======================================================
-- Descripción: Creación de la tabla Evaluacion, los 
-- atributos que la componen y su tipo de dato.
-- =======================================================
CREATE TABLE Evaluacion(
	Fecha date NOT NULL,
	Evaluador varchar(30) NOT NULL,
	Evaluado varchar(30) NOT NULL,
	Evaluacion varchar(30) NOT NULL,
	Comentario varchar(50) NOT NULL,
	IDEvaluacion int IDENTITY(1,1) PRIMARY KEY,
);

USE MercaditoTEC
-- =======================================================
-- Descripción: Creación de la tabla Foro, los 
-- atributos que la componen y su tipo de dato.
-- =======================================================
CREATE TABLE Foro(
	Fecha date NOT NULL,
	Hora time NOT NULL,
	Mensaje varchar(50) NOT NULL,
	Estudiante int NOT NULL,
	Curso varchar(30) NOT NULL,
	IDForo int IDENTITY(1,1) PRIMARY KEY,
);

USE MercaditoTEC
-- =======================================================
-- Descripción: Creación de la tabla OfertaLaboral, los 
-- atributos que la componen y su tipo de dato.
-- =======================================================
CREATE TABLE OfertaLaboral(
	Oportunidad varchar(30) NOT NULL,
	DescripcionPuesto varchar(30) NOT NULL,
	Responsabilidades varchar(30) NOT NULL,
	Empresa varchar(30) NOT NULL,
	Requisitos varchar(30) NOT NULL,
	BaseSalarial int NOT NULL,
	Ubicacion  varchar(30) NOT NULL,
	IDOferta int IDENTITY(1,1) PRIMARY KEY,
	Ofertante int NOT NULL
);

USE MercaditoTEC
-- =======================================================
-- Descripción: Creación de la tabla Producto, los 
-- atributos que la componen y su tipo de dato.
-- =======================================================
CREATE TABLE Producto(
	Nombre varchar(30) NOT NULL,
	Descripcion varchar(30) NOT NULL,
	Precio int NOT NULL,
	Fotos varchar(30) NOT NULL,
	MetodoPago varchar(30) NOT NULL,
	LugarEntrega varchar(30) NOT NULL,
	Vendedor int NOT NULL,
	IDProducto int IDENTITY(1,1) PRIMARY KEY,
	ConfirmacionVendedor varchar(1)NOT NULL,
	ConfirmacionComprador varchar(1) NOT NULL
);

USE MercaditoTEC
-- =======================================================
-- Descripción: Creación de la tabla Puntaje, los 
-- atributos que la componen y su tipo de dato.
-- =======================================================
CREATE TABLE Puntaje(
	Puntos int NOT NULL,
	TasaConversion int NOT NULL,
	IDPuntaje int IDENTITY(1,1) PRIMARY KEY,
);

USE MercaditoTEC
-- =======================================================
-- Descripción: Creación de la tabla Reporte, los 
-- atributos que la componen y su tipo de dato.
-- =======================================================
CREATE TABLE Reporte(
	Denunciante int NOT NULL,
	Justificacion varchar(50) NOT NULL,
	IDEvaluacion int NOT NULL,
	IDReporte int IDENTITY(1,1) PRIMARY KEY,
);

USE MercaditoTEC
-- =======================================================
-- Descripción: Creación de la tabla ReporteCompra, los 
-- atributos que la componen y su tipo de dato.
-- =======================================================
CREATE TABLE ReporteCompra(
	NombreVendedor varchar(30) NOT NULL,
	CarnetVendedor int NOT NULL,
	NombreEstudiante varchar(30) NOT NULL,
	CarnetEstudiante int NOT NULL,
	FechaVenta date NOT NULL,
	NombreProducto varchar(30) NOT NULL,
	Evaluacion varchar(50) NOT NULL,
	IDReporte int IDENTITY(1,1) PRIMARY KEY,
	IDProducto int NOT NULL
);

USE MercaditoTEC
-- =======================================================
-- Descripción: Creación de la tabla Servicio, los 
-- atributos que la componen y su tipo de dato.
-- =======================================================
CREATE TABLE Servicio(
	Nombre varchar(30) NOT NULL,
	Descripcion varchar(50) NOT NULL,
	Imagen varchar(30) NOT NULL,
	Precio int NOT NULL,
	MetodoPago varchar(30) NOT NULL,
	Ubicacion varchar(50) NOT NULL,
	IDServicio int IDENTITY(1,1) PRIMARY KEY,
	Vendedor int NOT NULL
);

USE MercaditoTEC
-- =======================================================
-- Descripción: Creación de la tabla Tutoria, los 
-- atributos que la componen y su tipo de dato.
-- =======================================================
CREATE TABLE Tutoria(
	Tutor int NOT NULL,
	Curso varchar(50) NOT NULL,
	Practica varbinary(max) NOT NULL,
	Precio int NOT NULL,
	Nota int NOT NULL,
	MetodoPago varchar(30) NOT NULL,
	Solucion varbinary(max) NOT NULL,
	IDTutoria int IDENTITY(1,1) PRIMARY KEY,
	Tema varchar(30) NOT NULL
);