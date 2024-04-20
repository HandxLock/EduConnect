CREATE DATABASE educonnect;

\c educonnect;

CREATE TABLE colegio (
  colegio_id SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  direccion VARCHAR(100),
  telefono VARCHAR(20),
  comuna_comuna_id int
);

CREATE TABLE comuna (
  comuna_id SERIAL PRIMARY KEY,
  nombre VARCHAR(50),
  ciudad_ciudad_id int
);

CREATE TABLE ciudad (
  ciudad_id SERIAL PRIMARY KEY,
  nombre VARCHAR(100)
);

CREATE TABLE persona (
  persona_id SERIAL PRIMARY KEY,
  rut VARCHAR(12),
  nombre VARCHAR(200),
  apellido1 VARCHAR(100),
  apellido2 VARCHAR(100),
  email VARCHAR(100),
  clave VARCHAR(100),
  direccion VARCHAR(20),
  telefono VARCHAR(20),
  comuna_comuna_id int,
  roles_id int,
  usuario_creacion_id int,
  asignatura_asignatura_id int,
  apoderado_id int
);

CREATE TABLE roles (
  roles_id SERIAL PRIMARY KEY,
  nombre_rol VARCHAR(50)
);

CREATE TABLE colegioPersona (
  colegioPersona_id SERIAL PRIMARY KEY,
  colegio_colegio_id int,
  persona_persona_id int
);

CREATE TABLE asignatura (
  asignatura_id SERIAL PRIMARY KEY,
  nombre VARCHAR(100)
);

CREATE TABLE curso (
  curso_id SERIAL PRIMARY KEY,
  nombre VARCHAR(50)
);

CREATE TABLE personaCurso (
  personaCurso SERIAL PRIMARY KEY,
  persona_persona_id int,
  curso_curso_id int
);

CREATE TABLE nota (
  nota_id SERIAL PRIMARY KEY,
  nota float,
  asignatura_asignatura_id int
);

CREATE TABLE semestre (
  semestre_id SERIAL PRIMARY KEY,
  semestre char,
  año date
);

CREATE TABLE personaNotaSemestre (
  personaNotaSemestre_id SERIAL PRIMARY KEY,
  persona_persona_id int,
  nota_nota_id int,
  semestre_semestre_id int
);

CREATE TABLE anotacion (
  anotacion_id SERIAL PRIMARY KEY,
  descripcion VARCHAR(255),
  fecha date
);

CREATE TABLE personaAnotaciones (
  personaAnotaciones_id SERIAL PRIMARY KEY,
  profesor_id int,
  alumno_id int,
  anotacion_anotacion_id int
);

ALTER TABLE colegio ADD FOREIGN KEY (comuna_comuna_id) REFERENCES comuna (comuna_id);

ALTER TABLE comuna ADD FOREIGN KEY (ciudad_ciudad_id) REFERENCES ciudad (ciudad_id);

ALTER TABLE persona ADD FOREIGN KEY (comuna_comuna_id) REFERENCES comuna (comuna_id);

ALTER TABLE persona ADD FOREIGN KEY (roles_id) REFERENCES roles (roles_id);

ALTER TABLE persona ADD FOREIGN KEY (asignatura_asignatura_id) REFERENCES asignatura (asignatura_id);

ALTER TABLE colegioPersona ADD FOREIGN KEY (colegio_colegio_id) REFERENCES colegio (colegio_id);

ALTER TABLE colegioPersona ADD FOREIGN KEY (persona_persona_id) REFERENCES persona (persona_id);

ALTER TABLE personaCurso ADD FOREIGN KEY (persona_persona_id) REFERENCES persona (persona_id);

ALTER TABLE personaCurso ADD FOREIGN KEY (curso_curso_id) REFERENCES curso (curso_id);

ALTER TABLE nota ADD FOREIGN KEY (asignatura_asignatura_id) REFERENCES asignatura (asignatura_id);

ALTER TABLE personaNotaSemestre ADD FOREIGN KEY (persona_persona_id) REFERENCES persona (persona_id);

ALTER TABLE personaNotaSemestre ADD FOREIGN KEY (nota_nota_id) REFERENCES nota (nota_id);

ALTER TABLE personaNotaSemestre ADD FOREIGN KEY (semestre_semestre_id) REFERENCES semestre (semestre_id);

ALTER TABLE personaAnotaciones ADD FOREIGN KEY (profesor_id) REFERENCES persona (persona_id);

ALTER TABLE personaAnotaciones ADD FOREIGN KEY (alumno_id) REFERENCES persona (persona_id);

ALTER TABLE personaAnotaciones ADD FOREIGN KEY (anotacion_anotacion_id) REFERENCES anotacion (anotacion_id);
