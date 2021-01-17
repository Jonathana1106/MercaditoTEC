INSERT INTO Administrador(Nombre, Telefono, Cedula, Correo, Apellidos)
VALUES
('Jonathan', 87319598, 604290768, 'joty@gmail.com', 'Guzman Araya'),
('Andrey', 85483496, 60401623, 'asga@outlook.com', 'Guzman Araya');

SELECT * FROM Administrador;

DELETE FROM Administrador WHERE Administrador.Nombre = 'Andrey';

DROP TABLE Administrador;
DROP TABLE Categoria;
DROP TABLE Chat;
DROP TABLE Empleador;
DROP TABLE Estudiante;
DROP TABLE Evaluacion;
DROP TABLE Foro;
DROP TABLE OfertaLaboral;
DROP TABLE Producto;
DROP TABLE Puntaje;
DROP TABLE Reporte;
DROP TABLE ReporteCompra;
DROP TABLE Servicio;
DROP TABLE Tutoria;
