from flask import request, jsonify
from app import app, db
from modelos.usuario_modelo import *

# Endpoint para obtener todos los usuarios
@app.route('/usuarios', methods=['GET'])
def obtener_usuarios():
    usuarios = usuarios.query.all()
    resultado = [{'id': usuario.id, 'usuario': usuario.usuario, 'contraseña': usuario.contraseña, 'es_administrador':usuario.es_administrador} for usuario in usuarios]
    return jsonify(resultado), 200

# Endpoint para agregar un nuevo usuario
@app.route('/usuarios', methods=['POST'])
def agregar_usuario():
    data = request.json
    # es_administrador = data.get('es_administrador', False) #verifica si es adm
    nuevo_usuario = Usuario(usuario=data['usuario'], contraseña=data['contraseña'])
    
    # if es_administrador:
    #     nuevo_usuario.rol = 'administrador'  # Asigna el rol de administrador al usuario
        
    db.session.add(nuevo_usuario)
    db.session.commit()
    return jsonify({'mensaje': 'Usuario agregado correctamente'}),201











