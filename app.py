from flask import Flask ,jsonify ,request
# del modulo flask importar la clase Flask y los métodos jsonify,request
from flask_cors import CORS       # del modulo flask_cors importar CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
app=Flask(__name__)  # crear el objeto app de la clase Flask
CORS(app) #modulo cors es para que me permita acceder desde el frontend al backend


# configuro la base de datos, con el nombre el usuario y la clave
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:root@localhost/proyecto'
# URI de la BBDD                          driver de la BD  user:clave@URLBBDD/nombreBBDD
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False #none
db= SQLAlchemy(app)   #crea el objeto db de la clase SQLAlquemy
ma=Marshmallow(app)   #crea el objeto ma de de la clase Marshmallow


# defino las tablas
class Producto(db.Model):   # la clase Producto hereda de db.Model    
    id=db.Column(db.Integer, primary_key=True)   #define los campos de la tabla
    nombre=db.Column(db.String(100))
    precio=db.Column(db.Integer)
    stock=db.Column(db.Integer)
    imagen=db.Column(db.String(400))
    def __init__(self,nombre,precio,stock,imagen):   #crea el  constructor de la clase
        self.nombre=nombre   # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.precio=precio
        self.stock=stock
        self.imagen=imagen



class Curso(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    nombre=db.Column(db.String(100))
    precio=db.Column(db.Integer)
    duracion=db.Column(db.String(20))
    def __init__(self, id, nombre, precio,duracion):
        self.nombre=nombre
        self.precio=precio
        self.duracion=duracion
    #  si hay que crear mas tablas , se hace aqui




with app.app_context():
    db.create_all()  # aqui crea todas las tablas
#  ************************************************************
class ProductoSchema(ma.Schema):
    class Meta:
        fields=('id','nombre','precio','stock','imagen')




producto_schema=ProductoSchema()            # El objeto producto_schema es para traer un producto
productos_schema=ProductoSchema(many=True)  # El objeto productos_schema es para traer multiples registros de producto




class CursoSchema(ma.Schema):
    class Meta:
        fields=("id","nombre","precio","duracion")
                
curso_schema = CursoSchema()
cursos_schema = CursoSchema(many=True)





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
    nombre=request.json['nombre']
    precio=request.json['precio']
    stock=request.json['stock']
    imagen=request.json['imagen']
    new_producto=Producto(nombre,precio,stock,imagen)
    db.session.add(new_producto)
    db.session.commit() # confirma el alta
    return producto_schema.jsonify(new_producto)


@app.route('/productos/<id>' ,methods=['PUT'])
def update_producto(id):
    producto=Producto.query.get(id)
 
    producto.nombre=request.json['nombre']
    producto.precio=request.json['precio']
    producto.stock=request.json['stock']
    producto.imagen=request.json['imagen']


    db.session.commit()    # confirma el cambio
    return producto_schema.jsonify(producto)    # y retorna un json con el producto
 
 
 
 
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



# programa principal *******************************
if __name__=='__main__':  
    app.run(debug=True, port=5000)    # ejecuta el servidor Flask en el puerto 5000

