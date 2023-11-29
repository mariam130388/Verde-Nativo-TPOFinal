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
    nombre = request.json['nombre']
    precio = request.json['precio']
    duracion = request.json['duracion']
    
    nuevo_curso = Curso(nombre=nombre, precio=precio, duracion=duracion)
    db.session.add(nuevo_curso)
    db.session.commit()
    return curso_schema.jsonify(nuevo_curso)

from modelos.curso_modelo import *

# Endpoint para actualizar un curso por su ID
@app.route('/cursos/<id>', methods=['PUT'])
def update_curso(id):
    curso = Curso.query.get(id)
    
    curso.nombre = request.json['nombre']
    curso.precio = request.json['descripcion']
    curso.duracion = request.json['duracion']
    
    db.session.commit()
    
    return curso_schema.jsonify(curso)

# Endpoint para eliminar un curso por su ID
@app.route('/cursos/<id>', methods=['DELETE'])
def delete_curso(id):
    curso = Curso.query.get(id)
    db.session.delete(curso)
    db.session.commit()
    
    return curso_schema.jsonify(curso)


    # db.session.commit()    # confirma el cambio
    # return producto_schema.jsonify(producto)    # y retorna un json con el producto