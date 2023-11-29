from app import db, ma, app

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
    db.create_all()  

class CursoSchema(ma.Schema):
    class Meta:
        fields=("id","nombre","precio","duracion")
                
curso_schema = CursoSchema()
cursos_schema = CursoSchema(many=True)