CREATE DATABASE educonnect;

\c educonnect;

CREATE SCHEMA perfilamiento;

CREATE TABLE perfilamiento.usuarios (
  usuario_id SERIAL PRIMARY KEY,
  rut VARCHAR(12),
  nombre VARCHAR(200),
  apellido1 VARCHAR(100),
  apellido2 VARCHAR(100),
  email VARCHAR(100),
  clave VARCHAR(100),
  direccion VARCHAR(20),
  telefono VARCHAR(20),
  perfil_id INT,
  fecha_creacion TIMESTAMP,
  fecha_modificacion TIMESTAMP
);

CREATE TABLE perfilamiento.perfiles (
  perfil_id SERIAL PRIMARY KEY,
  nombre VARCHAR(200),
  descripcion VARCHAR(400),
  fecha_creacion TIMESTAMP,
  fecha_modificacion TIMESTAMP
);

CREATE TABLE perfilamiento.permisos (
  permiso_id SERIAL PRIMARY KEY,
  nombre VARCHAR(200),
  descripcion VARCHAR(400),
  fecha_creacion TIMESTAMP,
  fecha_modificacion TIMESTAMP
);

CREATE TABLE perfilamiento.permisosPorPerfil (
  permisos_por_perfil_id SERIAL PRIMARY KEY,
  perfil_id INT,
  permiso_id INT
  );

ALTER TABLE perfilamiento.usuarios ADD FOREIGN KEY (perfil_id) REFERENCES perfilamiento.perfiles (perfil_id);
ALTER TABLE perfilamiento.permisosPorPerfil ADD FOREIGN KEY (perfil_id) REFERENCES perfilamiento.perfiles (perfil_id);
ALTER TABLE perfilamiento.permisosPorPerfil ADD FOREIGN KEY (permiso_id) REFERENCES perfilamiento.permisos (permiso_id);

INSERT INTO perfilamiento.perfiles (nombre, descripcion, fecha_creacion, fecha_modificacion)
VALUES ('Superadmin', 'perfil de super administrador de los 5 iniciales', NOW(), NOW()),
  ('Admin', 'perfil de administrador del colegio', NOW(), NOW()),
  ('Docente', 'perfil de docente del colegio', NOW(), NOW()),
  ('Alumno', 'perfil de alumno del colegio', NOW(), NOW()),
  ('Apoderado', 'perfil de apoderado del colegio', NOW(), NOW());

INSERT INTO perfilamiento.permisos (nombre, descripcion, fecha_creacion, fecha_modificacion)
VALUES 
  ('CRUDColegio', 'permiso para crear, modificar y eliminar registros de colegio', NOW(), NOW()),
  ('CRUDAdmin', 'permiso para crear, modificar y eliminar registros de usuarios perfil Admin', NOW(), NOW()),
  ('CRUDAlumno', 'permiso para crear, modificar y eliminar registros de usuarios perfil alumno', NOW(), NOW()),
  ('CRUDAsignatura', 'permiso para crear, modificar y eliminar registros de asignaturas', NOW(), NOW()),
  ('CRUDCurso', 'permiso para crear, modificar y eliminar registros de cursos', NOW(), NOW()),
  ('CRUDDocentes', 'permiso para crear, modificar y eliminar registros de cursos', NOW(), NOW()),
  ('CRUDApoderados', 'permiso para crear, modificar y eliminar registros de Apoderados', NOW(), NOW()),
  ('CRUDEvaluaciones', 'permiso para crear, modificar y eliminar registros de evaluaciones', NOW(), NOW()),
  ('CRUDObservaciones', 'permiso para crear, modificar y eliminar registros de observaciones', NOW(), NOW()),
  ('lecturaColegio', 'permiso para leer registros de colegio', NOW(), NOW()),
  ('lecturaAdmin', 'permiso para leer registros de usuarios perfil Admin', NOW(), NOW()),
  ('lecturaAlumno', 'permiso para leer registros de usuarios perfil alumno', NOW(), NOW()),
  ('lecturaAsignatura', 'permiso para leer registros de asignaturas', NOW(), NOW()),
  ('lecturaCurso', 'permiso para leer registros de cursos', NOW(), NOW()),
  ('lecturaEvaluaciones', 'permiso para leer registros de evaluaciones', NOW(), NOW()),
  ('lecturaObservaciones', 'permiso para leer registros de observaciones', NOW(), NOW()),
  ('lecturaApoderados', 'permiso para leer registros de Apoderados', NOW(), NOW()),
  ('accesoPaginaAdmin', 'permiso para ver la view de Admin', NOW(), NOW()),
  ('accesoPaginaDocente', 'permiso para ver la view de docente', NOW(), NOW()),
  ('accesoPaginaAlumno', 'permiso para ver la view de Alumno', NOW(), NOW()),
  ('accesoPaginaSuperAdmin', 'Permiso para ver la view de SuperAdmin', NOW(), NOW());

INSERT INTO perfilamiento.permisosPorPerfil (perfil_id, permiso_id)
VALUES (1, 1),
  (1, 2),
  (1, 3),
  (1, 4),
  (1, 5),
  (1, 6),
  (1, 7),
  (1, 8),
  (1, 20),
  (2, 3),
  (2, 4),
  (2, 5),
  (2, 6),
  (2, 7),
  (2, 18),
  (3, 8),
  (3, 9),
  (3, 12),
  (3, 13), 
  (3, 14),
  (3, 19),
  (4, 12),
  (4, 13),
  (4, 14),
  (4, 15),
  (4, 16),
  (4, 17),
  (4, 20),
  (5, 12),
  (5, 13),
  (5, 14),
  (5, 15),
  (5, 16),
  (5, 17),
  (5, 20);

INSERT INTO perfilamiento.usuarios (rut, nombre, apellido1, apellido2, email, clave, direccion, telefono, perfil_id, fecha_creacion, fecha_modificacion)
VALUES ('11.222.333-4', 'Erich', 'Armijo', 'Penroz', 'erich@educonnect.cl', 'e1234', 'Marin 440', '+56912345678', 1, NOW(), NOW()),
('18.168.441-k', 'Constanza', 'Valenzuela', 'Moya', 'kokony.vm@gmail.com', 'c1234', 'la florida', '+56953360868',1, NOW(), NOW()),
('22.222.222-2', 'Alfredo', 'Beltran', 'Desconocido', 'abj4058@educonnect.cl', 'a1234', 'nadie lo sabe', '9 8965 5632', 1, NOW(), NOW()),
('17.862.485-8', 'Claudio', 'Gonzalez', 'Rivera', 'claudio@educonnect.cl', 'c1234', 'porahí 1234', '+56948563258', 1, NOW(), NOW()),
('18.080.769-1', 'Francisco', 'Meza', 'Dastres', 'francisco.meza.dev@educconect.cl', 'e1234', 'Rosas 2871', '+56994891396', 1, NOW(), NOW()),
('23.584.204-7','Rodrigo', 'Barrera', 'Correa', 'rbc@educonnect.cl', 'r1234', 'puente alto', '+56968435927', 4, NOW(), NOW()),
('22.784.605-8', 'Valeria', 'Zuñiga', 'Poblete', 'vzp@educonnect.cl', 'v1234', 'macul', '+56984231596', 4, NOW(), NOW()),
('23.654.805-4', 'Martina', 'Escudey', 'Arias', 'mea@educonnect.cl', 'm1234', 'pudahuel', '+56967524935', 4, NOW(), NOW()),
('22.453.128-7', 'Alejandra', 'Duran', 'Duran', 'add@educonnect.cl', 'a1234', 'la granja', '+56958423579', 4, NOW(), NOW()),
('23.687.852-4', 'Carlos', 'Gonzalez', 'Mancilla', 'cgm@educonnect.cl', 'c1234', 'la florida', '+56965432851', 4, NOW(), NOW()),
('15.465.672-5',  'Daniela', 'Silva', 'Sanchez', 'dss@educonnect.cl', 'd1234', 'puente alto', '+56958423697', 3, NOW(), NOW()),
('16.853.427-9', 'Sebastian', 'Bravo', 'Moreno', 'sbm@educonnect.cl', 's1234', 'ñuñoa', '+56965430090',3, NOW(), NOW()),
('17.658.237-1', 'Mauricio', 'Contreras', 'Corvalan', 'mcc@educonnect.cl', 'm1234', 'macul', '+56963571648', 3, NOW(), NOW()),
('14.583.751-2', 'Blanca', 'Ugarte', 'Cabello', 'buc@educonnect.cl', 'b1234', 'la florida', '56976431967', 3, NOW(), NOW()),
('15.852.654-7', 'Alejandro', 'Barrera', 'Concha', 'abc@educonnect.cl', 'a1234', 'puente alto', '+56965434441', 5, NOW(), NOW()),
('11.752.407-8', 'Alfredo', 'Lamadrid', 'Duhalde', 'ald@educonnect.cl', 'a1234','Santiago','+56932585694',5, NOW(), NOW()),
('16.726.384-1','Daniela','Garces','Jorquera','dgc@educconect.cl','444123a','Las Condes', '+56965485296',5, NOW(), NOW()),
('18.638.281-7','Brian','Jorquera', 'Martinez','BrianJ.r@educconect.cl', '444123a','Las Condes', '+56965485296',5, NOW(), NOW()),
('16.856.394-1','Jaime','Gonzalez', 'Perez','JaimeGonza123@educconect.cl', '014mty123','La Florida', '+56955664385',5, NOW(), NOW()),
('13.864.953-7', 'Felipe','Pavez', 'Valdes', 'Fpavez1877@educconect.cl', 'qwert123', 'La Pintana', '+56994891225', 2, NOW(), NOW());

CREATE SCHEMA colegio;

CREATE TABLE colegio.apoderados (
  apoderado_id SERIAL PRIMARY KEY,
  usuario_id INT,
  colegio_id INT
  );

CREATE TABLE colegio.alumnos (
  alumno_id SERIAL PRIMARY KEY,
  usuario_id INT,
  colegio_id INT,
  apoderado_id INT,
  curso_id INT
  );

CREATE TABLE colegio.docentes (
  docente_id SERIAL PRIMARY KEY,
  usuario_id INT,
  colegio_id INT,
  asignatura_id INT
  );

CREATE TABLE colegio.cursos (
  curso_id SERIAL PRIMARY KEY,
  nombre VARCHAR(15),
  descripcion VARCHAR(100),
  colegio_id INT
  );

CREATE TABLE colegio.docentesPorCurso (
  docentePorCurso SERIAL PRIMARY KEY,
  docente_id INT,
  curso_id INT
  );

CREATE TABLE colegio.observaciones (
  observacion_id SERIAL PRIMARY KEY,
  titulo VARCHAR(50),
  descripcion VARCHAR(300),
  docente_id INT,
  alumno_id INT,
  fecha_observacion TIMESTAMP
  );

CREATE TABLE colegio.asignaturas (
  asignatura_id SERIAL PRIMARY KEY,
  nombre VARCHAR(50),
  descripcion VARCHAR(100),
  colegio_id INT,
  docente_id INT
  );

CREATE TABLE colegio.evaluaciones (
  evaluacion_id SERIAL PRIMARY KEY,
  nombre VARCHAR(30),
  descripcion VARCHAR(100),
  tipo_evaluacion_id INT,
  asignatura_id INT,
  colegio_id INT
  );

CREATE TABLE colegio.tipos_evaluaciones (
  tipo_evaluacion_id SERIAL PRIMARY KEY,
  nombre VARCHAR(10),
  descripcion VARCHAR(100),
  colegio_id INT
  );

CREATE TABLE colegio.evaluacionesPorAlumno (
  evaluaciones_por_alumno_id SERIAL PRIMARY KEY,
  evaluacion_id INT,
  alumno_id INT,
  calificacion NUMERIC(3, 1),
  fecha_evaluacion DATE
  );

CREATE TABLE colegio.asignaturasPorAlumno (
  asignaturas_por_alumno_id SERIAL PRIMARY KEY,
  asignatura_id INT,
  alumno_id INT
  );

ALTER TABLE colegio.alumnos ADD FOREIGN KEY (apoderado_id) REFERENCES colegio.apoderados (apoderado_id);
ALTER TABLE colegio.alumnos ADD FOREIGN KEY (curso_id) REFERENCES colegio.cursos (curso_id);
ALTER TABLE colegio.docentesPorCurso ADD FOREIGN KEY (docente_id) REFERENCES colegio.docentes (docente_id);
ALTER TABLE colegio.docentesPorCurso ADD FOREIGN KEY (curso_id) REFERENCES colegio.cursos (curso_id);
ALTER TABLE colegio.observaciones ADD FOREIGN KEY (docente_id) REFERENCES colegio.docentes (docente_id);
ALTER TABLE colegio.observaciones ADD FOREIGN KEY (alumno_id) REFERENCES colegio.alumnos (alumno_id);
ALTER TABLE colegio.docentes ADD FOREIGN KEY (asignatura_id) REFERENCES colegio.asignaturas (asignatura_id);
ALTER TABLE colegio.evaluaciones ADD FOREIGN KEY (tipo_evaluacion_id) REFERENCES colegio.tipos_evaluaciones (tipo_evaluacion_id);
ALTER TABLE colegio.evaluaciones ADD FOREIGN KEY (asignatura_id) REFERENCES colegio.asignaturas (asignatura_id);
ALTER TABLE colegio.evaluacionesPorAlumno ADD FOREIGN KEY (evaluacion_id) REFERENCES colegio.evaluaciones (evaluacion_id);
ALTER TABLE colegio.evaluacionesPorAlumno ADD FOREIGN KEY (alumno_id) REFERENCES colegio.alumnos (alumno_id);
ALTER TABLE colegio.asignaturasPorAlumno ADD FOREIGN KEY (asignatura_id) REFERENCES colegio.asignaturas (asignatura_id);
ALTER TABLE colegio.asignaturasPorAlumno ADD FOREIGN KEY (alumno_id) REFERENCES colegio.alumnos (alumno_id);

ALTER TABLE colegio.alumnos ADD FOREIGN KEY (usuario_id) REFERENCES perfilamiento.usuarios (usuario_id);
ALTER TABLE colegio.docentes ADD FOREIGN KEY (usuario_id) REFERENCES perfilamiento.usuarios (usuario_id);
ALTER TABLE colegio.apoderados ADD FOREIGN KEY (usuario_id) REFERENCES perfilamiento.usuarios (usuario_id);

CREATE SCHEMA superadmin;

CREATE TABLE superadmin.colegios (
  colegio_id SERIAL PRIMARY KEY,
  nombre VARCHAR(50),
  descripcion VARCHAR(300),
  rut VARCHAR(20),
  direccion VARCHAR(100),
  telefono VARCHAR(15),
  email VARCHAR(30)
  );

CREATE TABLE superadmin.admins (
  admin_id SERIAL PRIMARY KEY,
  usuario_id INT,
  colegio_id INT
  );

CREATE TABLE superadmin.superAdmins (
  super_admin_id SERIAL PRIMARY KEY,
  usuario_id INT
  );

ALTER TABLE superadmin.admins ADD FOREIGN KEY (usuario_id) REFERENCES perfilamiento.usuarios (usuario_id);
ALTER TABLE superadmin.superAdmins ADD FOREIGN KEY (usuario_id) REFERENCES perfilamiento.usuarios (usuario_id);
ALTER TABLE superadmin.admins ADD FOREIGN KEY (colegio_id) REFERENCES superadmin.colegios (colegio_id);

ALTER TABLE colegio.alumnos ADD FOREIGN KEY (colegio_id) REFERENCES superadmin.colegios (colegio_id);
ALTER TABLE colegio.apoderados ADD FOREIGN KEY (colegio_id) REFERENCES superadmin.colegios (colegio_id);
ALTER TABLE colegio.docentes ADD FOREIGN KEY (colegio_id) REFERENCES superadmin.colegios (colegio_id);
ALTER TABLE colegio.cursos ADD FOREIGN KEY (colegio_id) REFERENCES superadmin.colegios (colegio_id);
ALTER TABLE colegio.asignaturas ADD FOREIGN KEY (colegio_id) REFERENCES superadmin.colegios (colegio_id);
ALTER TABLE colegio.evaluaciones ADD FOREIGN KEY (colegio_id) REFERENCES superadmin.colegios (colegio_id);

INSERT INTO superadmin.colegios (nombre, descripcion, rut, direccion, telefono, email) VALUES 
  ('Hogwarts', 'Colegio de magia y hechicería, sucursal la florida', '50.468.751-3', 'callejon diagon', '+56222875439', 'lechuza@educonnect.cl');

INSERT INTO superadmin.admins (usuario_id, colegio_id) VALUES (20, 1);

INSERT INTO superadmin.superAdmins(usuario_id) VALUES (1), (2), (3), (4), (5);

INSERT INTO colegio.cursos (nombre, descripcion, colegio_id) VALUES('1°A', 'Curso primero de básica A', 1);

INSERT INTO colegio.tipos_evaluaciones(nombre, descripcion, colegio_id) VALUES
  ('sumativa', 'evaluaciones de conocimientos que se registran directamente', 1),
  ('formativa', 'evaluaciones de buenas practicas que se evaluan en conjunto para registrarse', 1);

INSERT INTO colegio.apoderados (usuario_id, colegio_id) VALUES (15, 1), (16, 1), (17, 1), (18, 1), (19, 1);

INSERT INTO colegio.alumnos (usuario_id, colegio_id, apoderado_id, curso_id) VALUES (6, 1, 1, 1), (7, 1, 2, 1), (8, 1, 3, 1), (9, 1, 4, 1), (10, 1, 5, 1);

INSERT INTO colegio.asignaturas (nombre, descripcion, colegio_id) VALUES
  ('Física nuclear', 'Fisica aplicada de conocimientos nucleares del átomo', 1),
  ('Informática', 'Estudio de las tecnologías de la información', 1),
  ('Backend', 'Estudio de como matarte la cabeza con validaciones y bases de datos', 1),
  ('Frontend', 'Estudio de como matarte la cabeza con diseños, flex, y botones', 1);

INSERT INTO colegio.docentes (usuario_id, colegio_id, asignatura_id) VALUES (11, 1, 1), (12, 1, 2), (13, 1, 3), (14, 1, 4);

INSERT INTO colegio.observaciones (titulo, descripcion, docente_id, alumno_id, fecha_observacion) VALUES 
  ('Participa en clases', 'Alumno participa activamente en la clase de Física Nuclear aportando con su particular punto de vista', 1, 3, '2024-04-25 09:15:00'),
  ('Mal comportamiento en clases', 'Alumno insulta con groserías fuertes y posteriormente golpea repetidamente a un compañero', 4, 1, '2024-04-26 12:30:15'),
  ('Come en clases', 'Alumno come en clases empanada de pino y no comparte con el docente encargado', 2, 5, '2024-04-30 14:25:30'),
  ('Duerme en clases', 'Alumna duerme en clases y sus ronquidos distraen al resto', 3, 4, '2024-04-29 14:15:24');

INSERT INTO colegio.evaluaciones(nombre, descripcion, tipo_evaluacion_id, asignatura_id, colegio_id) VALUES 
('Prueba Nivel', 'evaluación de conocimientos estandarizados para el 1° básico', 1, 1, 1),
('Revisión de cuaderno', 'revisión de tareas realizadas en clases', 2, 1, 1),
('Interrogación', 'evaluación oral sobre el contenido tratado en clases', 1, 1, 1);

INSERT INTO colegio.docentesPorCurso (docente_id, curso_id) VALUES (1, 1), (2, 1), (3, 1), (4, 1);

INSERT INTO colegio.asignaturasPorAlumno(asignatura_id, alumno_id) VALUES (1, 1), (1, 2), (1, 3), (1, 4), (1,5), 
  (2, 1), (2, 2), (2, 3), (2, 4), (2,5), (3, 1), (3, 2), (3, 3), (3, 4), (3,5), (4, 1), (4, 2), (4, 3), (4, 4), (4,5);

INSERT INTO colegio.evaluacionesPorAlumno(evaluacion_id, alumno_id, calificacion, fecha_evaluacion) 
VALUES (1, 1, 6.1, '26-04-2024'), (1, 2, 5.4, '26-04-2024'), (1, 3, 4.0, '26-04-2024'), 
  (1, 4, 2.5, '26-04-2024'), (1, 5, 7.0, '26-04-2024'), (2, 1, 5.5, '29-04-2024'), 
  (2, 2, 1.0, '29-04-2024'), (2, 3, 6.4, '29-04-2024'), (2, 4, 6.2, '29-04-2024'), 
  (2, 5, 5.1, '29-04-2024'), (3, 1, 5.7, '30-04-2024'), (3, 2, 4.5, '30-04-2024'), 
  (3, 3, 4.4, '30-04-2024'), (3, 4, 3.5, '30-04-2024'), (3, 5, 2.9, '30-04-2024');

