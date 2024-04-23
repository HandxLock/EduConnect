CREATE DATABASE educonnect;

\c educonnect;

CREATE TABLE usuario (
  usuario_id SERIAL PRIMARY KEY,
  rut VARCHAR(12),
  nombre VARCHAR(200),
  apellido1 VARCHAR(100),
  apellido2 VARCHAR(100),
  email VARCHAR(100),
  clave VARCHAR(100),
  direccion VARCHAR(20),
  telefono VARCHAR(20),
  perfil_id int,
  fecha_creacion TIMESTAMP,
  fecha_modificacion TIMESTAMP
);


CREATE TABLE perfil (
  perfil_id SERIAL PRIMARY KEY,
  nombre VARCHAR(200),
  descripcion VARCHAR(400),
  fecha_creacion date,
  fecha_modificacion date
);

CREATE TABLE permisos (
  permiso_id SERIAL PRIMARY KEY,
  nombre VARCHAR(200),
  descripcion VARCHAR(400),
  fecha_creacion date,
  fecha_modificacion date
);

CREATE TABLE permisosPorPerfil (
  permisos_por_perfil_id SERIAL PRIMARY KEY,
  perfil_id int,
  permiso_id int
  );

ALTER TABLE usuario ADD FOREIGN KEY (perfil_id) REFERENCES perfil (perfil_id);
ALTER TABLE permisosPorPerfil ADD FOREIGN KEY (perfil_id) REFERENCES perfil (perfil_id);
ALTER TABLE permisosPorPerfil ADD FOREIGN KEY (permiso_id) REFERENCES permisos (permiso_id);

INSERT INTO perfil (nombre, descripcion, fecha_creacion, fecha_modificacion) 
VALUES ('Superadmin', 'perfil de super administrador de los 5 iniciales', NOW(), NOW()),
  ('Admin', 'perfil de administrador del colegio', NOW(), NOW()),
  ('Docente', 'perfil de docente del colegio', NOW(), NOW()),
  ('Alumno', 'perfil de alumno del colegio', NOW(), NOW());

INSERT INTO permisos (nombre, descripcion, fecha_creacion, fecha_modificacion) 
VALUES ('accesoPaginaSuperAdmin', 'Permiso para ver la view de SuperAdmin', NOW(), NOW()),
  ('crearColegio', 'permiso para crear colegio', NOW(), NOW()),
  ('crearAdmin', 'permiso de crear usuarios perfil Admin', NOW(), NOW()),
  ('crearAlumno', 'permiso para crear usuarios perfil alumno', NOW(), NOW());

INSERT INTO permisosPorPerfil (perfil_id, permiso_id) 
VALUES (1, 1),
  (1, 2),
  (1, 3);

INSERT INTO usuario (rut, nombre, apellido1, apellido2, email, clave, direccion, telefono, perfil_id, fecha_creacion, fecha_modificacion) 
VALUES ('11.222.333-4', 'Erich', 'Armijo', 'Penroz', 'erich@educonnect.cl', 'e1234', 'Marin 440', '+56912345678', 1, NOW(), NOW());

