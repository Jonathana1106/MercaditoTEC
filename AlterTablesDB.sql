-- #######################################################
--                          MercaditoTEC
-- #######################################################

USE MercaditoTEC

-- =======================================================
-- Descripcion: Asignacion de llave foranea...
-- =======================================================
ALTER TABLE Servicio
ADD FOREIGN KEY (Vendedor) REFERENCES Estudiante(IDEstudiante);

-- =======================================================
-- Descripcion: Asignacion de llave foranea...
-- =======================================================
ALTER TABLE Producto
ADD FOREIGN KEY (Vendedor) REFERENCES Estudiante(IDEstudiante);

-- =======================================================
-- Descripcion: Asignacion de llave foranea...
-- =======================================================
ALTER TABLE Tutoria
ADD FOREIGN KEY (Tutor) REFERENCES Estudiante(IDEstudiante);

-- =======================================================
-- Descripcion: Asignacion de llave foranea...
-- =======================================================
ALTER TABLE Foro
ADD FOREIGN KEY (Estudiante) REFERENCES Estudiante(IDEstudiante);

-- =======================================================
-- Descripcion: Asignacion de llave foranea...
-- =======================================================
ALTER TABLE Reporte
ADD FOREIGN KEY (Denunciante) REFERENCES Estudiante(IDEstudiante);

-- =======================================================
-- Descripcion: Asignacion de llave foranea...
-- =======================================================
ALTER TABLE OfertaLaboral
ADD FOREIGN KEY (Ofertante) REFERENCES Empleador(Cedula);

-- =======================================================
-- Descripcion: Asignacion de llave foranea...
-- =======================================================
ALTER TABLE ReporteCompra
ADD FOREIGN KEY (IDProducto) REFERENCES Producto(IDProducto)

-- =======================================================
-- Descripcion: Asignacion de llave foranea...
-- =======================================================
ALTER TABLE Chat
ADD FOREIGN KEY (Comprador) REFERENCES Estudiante(IDEstudiante);

-- =======================================================
-- Descripcion: Asignacion de llave foranea...
-- =======================================================
ALTER TABLE Chat
ADD FOREIGN KEY (Vendedor) REFERENCES Estudiante(IDEstudiante);

-- =======================================================
-- Descripcion: Asignacion de llave foranea...
-- =======================================================
ALTER TABLE Categoria
ADD FOREIGN KEY (Puntaje) REFERENCES Puntaje(IDPuntaje);

-- =======================================================
-- Descripcion: Asignacion de llave foranea...
-- =======================================================
ALTER TABLE Reporte
ADD FOREIGN KEY (IdEvaluacion) REFERENCES Evaluacion(IDEvaluacion);