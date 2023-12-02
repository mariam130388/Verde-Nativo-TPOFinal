from app import *
from flask import Flask
from flask import jsonify, request
from app import app


from modelos.producto_modelo import *

# crea los endpoint o rutas (json)
@app.route('/productos',methods=['GET'])
def get_Productos():
    all_productos=Producto.query.all()         # el metodo query.all() lo hereda de db.Model
    result=productos_schema.dump(all_productos)  # el metodo dump() lo hereda de ma.schema y
                                                 # trae todos los registros de la tabla
    return jsonify(result)                       # retorna un JSON de todos los registros de la tabla




@app.route('/productos/<id>',methods=['GET'])
def get_producto(id):
    producto=Producto.query.get(id)
    return producto_schema.jsonify(producto)   # retorna el JSON de un producto recibido como parametro


@app.route('/productos/<id>',methods=['DELETE'])
def delete_producto(id):
    producto=Producto.query.get(id)
    db.session.delete(producto)
    db.session.commit()                     # confirma el delete
    return producto_schema.jsonify(producto) # me devuelve un json con el registro eliminado


@app.route('/productos', methods=['POST']) # crea ruta o endpoint
def create_producto():
    #print(request.json)  # request.json contiene el json que envio el cliente
    name=request.json['name']
    precio=request.json['precio']
    stock=request.json['stock']
    image=request.json['image']
    description=request.json['description']
    
    new_producto=Producto(name,precio,stock,image,description)
    db.session.add(new_producto) #agrega el producto
    db.session.commit() # confirma el alta
    return producto_schema.jsonify(new_producto) #devuelve el producto en un json


@app.route('/productos/<id>' ,methods=['PUT'])
def update_producto(id):
    producto=Producto.query.get(id)
 
    producto.name=request.json['name']
    producto.precio=request.json['precio']
    producto.stock=request.json['stock']
    producto.image=request.json['image']
    producto.description=request.json['description']

    # db.session.commit()    # confirma el cambio
    # return producto_schema.jsonify(producto)    # y retorna un json con el producto