from flask import request, jsonify
from app import app
from app import *
from flask import Flask
from modelos.usuario_modelo import *

# Endpoint para obtener todos los usuarios
@app.route('/usuarios', methods=['GET'])
def obtener_usuarios():
    usuarios = Usuario.query.all()
    resultado = [{'id': usuario.id, 'usuario': usuario.usuario, 'contraseña': usuario.contraseña, 'es_administrador':usuario.es_administrador} for usuario in usuarios]
    return jsonify(resultado), 200

# Endpoint para agregar un nuevo usuario
@app.route('/usuarios', methods=['POST'])
def registrar_usuario():
    usuario=request.json['usuario']
    contraseña=request.json['contraseña']
    
    nuevo_usuario=Usuario(usuario, contraseña)
    db.session.add(nuevo_usuario)
    db.session.commit()
    # return jsonify({'mensaje': 'Usuario agregado correctamente'}),201
    return jsonify(nuevo_usuario), 201











