from app import *
from flask import Flask
from flask import jsonify, request
from app import app

# Endpoint para obtener todos los cursos
@app.route('/cursos', methods=['GET'])
def get_cursos():
    cursos = Curso.query.all()
    result = cursos_schema.dump(cursos)
    return jsonify(result)

# Endpoint para obtener un curso por su ID
@app.route('/cursos/<id>', methods=['GET'])
def get_curso(id):
    curso = Curso.query.get(id)
    return curso_schema.jsonify(curso)

# Endpoint para crear un nuevo curso
@app.route('/cursos', methods=['POST'])
def create_curso():
    titulo = request.json['titulo']
    descripcion = request.json['descripcion']
    video = request.json['video']
    
    nuevo_curso = Curso(titulo=titulo, descripcion=descripcion, video=video)
    db.session.add(nuevo_curso)
    db.session.commit()
    return curso_schema.jsonify(nuevo_curso)

from modelos.curso_modelo import *

# Endpoint para actualizar un curso por su ID
@app.route('/cursos/<id>', methods=['PUT'])
def update_curso(id):
    curso = Curso.query.get(id)
    
    curso.titulo = request.json['titulo']
    curso.descripcion = request.json['descripcion']
    curso.video = request.json['video']
    
    db.session.commit()
    
    return curso_schema.jsonify(curso)

# Endpoint para eliminar un curso por su ID
@app.route('/cursos/<id>', methods=['DELETE'])
def delete_curso(id):
    curso = Curso.query.get(id)
    db.session.delete(curso)
    db.session.commit()
    
    return curso_schema.jsonify(curso)
