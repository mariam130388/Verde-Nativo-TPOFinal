from flask import request, jsonify
from app import app, db
from usuario_modelo import Usuario

# Endpoint para obtener todos los usuarios
@app.route('/usuarios', methods=['GET'])
def obtener_usuarios():
    usuarios = Usuario.query.all()
    resultado = [{'id': usuario.id, 'nombre': usuario.nombre, 'email': usuario.email} for usuario in usuarios]
    return jsonify(resultado), 200

# Endpoint para agregar un nuevo usuario
@app.route('/usuarios', methods=['POST'])
def agregar_usuario():
    data = request.json
    nuevo_usuario = Usuario(nombre=data['nombre'], email=data['email'])
    db.session.add(nuevo_usuario)
    db.session.commit()
    return jsonify({'mensaje': 'Usuario agregado correctamente'}),201