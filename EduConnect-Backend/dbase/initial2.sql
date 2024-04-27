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
  ('Alumno', 'perfil de alumno del colegio', NOW(), NOW());

INSERT INTO perfilamiento.permisos (nombre, descripcion, fecha_creacion, fecha_modificacion) 
VALUES ('accesoPaginaSuperAdmin', 'Permiso para ver la view de SuperAdmin', NOW(), NOW()),
  ('crearColegio', 'permiso para crear colegio', NOW(), NOW()),
  ('crearAdmin', 'permiso de crear usuarios perfil Admin', NOW(), NOW()),
  ('crearAlumno', 'permiso para crear usuarios perfil alumno', NOW(), NOW()),
  ('crearAsignatura', 'permiso para crear asignaturas', NOW(), NOW()),
  ('crearCurso', 'permiso para crear cursos', NOW(), NOW()),
  ('crearEvaluaciones', 'permiso para crear evaluaciones', NOW(), NOW()),
  ('crearObersvaciones', 'permiso para crear asignaturas', NOW(), NOW()),
  ('crearAsignatura', 'permiso para crear asignaturas', NOW(), NOW()),
  ('crearAsignatura', 'permiso para crear asignaturas', NOW(), NOW()),
  ;

INSERT INTO perfilamiento.permisosPorPerfil (perfil_id, permiso_id) 
VALUES (1, 1),
  (1, 2),
  (1, 3);

INSERT INTO perfilamiento.usuarios (rut, nombre, apellido1, apellido2, email, clave, direccion, telefono, perfil_id, fecha_creacion, fecha_modificacion) 
VALUES ('11.222.333-4', 'Erich', 'Armijo', 'Penroz', 'erich@educonnect.cl', 'e1234', 'Marin 440', '+56912345678', 1, NOW(), NOW());

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
  nombre VARCHAR(20),
  descripcion VARCHAR(50),
  tipo_evaluacion_id INT,
  asignatura_id INT,
  colegio_id INT
  );

CREATE TABLE colegio.tipos_evaluaciones (
  tipo_evaluacion_id SERIAL PRIMARY KEY,
  nombre VARCHAR(10),
  descripcion VARCHAR(50),
  colegio_id INT
  );

CREATE TABLE colegio.evaluacionesPorAlumno (
  evaluaciones_por_alumno_id SERIAL PRIMARY KEY,
  evaluacion_id INT,
  alumno_id INT,
  calificaion NUMERIC(3, 1),
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
ALTER TABLE colegio.asignaturas ADD FOREIGN KEY (docente_id) REFERENCES colegio.docentes (docente_id);
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
  usuario_id INT,
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
