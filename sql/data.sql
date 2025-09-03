-- Crear la base de datos si no existe
USE master;
GO

IF NOT EXISTS (
    SELECT name
    FROM sys.databases
    WHERE name = 'Usuarios'
)
BEGIN
    CREATE DATABASE Usuarios;
END
GO

-- crear la tabla si no existe
USE Usuarios;
GO
IF NOT EXISTS (
    SELECT name
    FROM sys.tables
    WHERE name = 'Usuarios'
)
BEGIN
    CREATE TABLE Usuarios (
        id INT PRIMARY KEY IDENTITY(1,1),
        nombre NVARCHAR(50) NOT NULL,
        apellido NVARCHAR(50) NOT NULL,
        email NVARCHAR(50) NOT NULL,
        contraseña NVARCHAR(50) NOT NULL,
        fecha_registro DATETIME DEFAULT GETDATE()
    );
END
GO

-- Insertar datos de ejemplo
INSERT INTO Usuarios (nombre, apellido, email, contraseña)
VALUES
('Juan', 'Pérez', 'juanperez@gmail.com', 'juan123');
GO
