from app import db, ma, app

class Curso(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    titulo=db.Column(db.String(100))
    descripcion=db.Column(db.String(2000))
    video=db.Column(db.String(5000))
    def __init__(self, titulo, descripcion, video):
        self.titulo=titulo
        self.descripcion=descripcion
        self.video=video



with app.app_context():
    db.create_all()  

class CursoSchema(ma.Schema):
    class Meta:
        fields=("id","titulo","descripcion","video")
                
curso_schema = CursoSchema()
cursos_schema = CursoSchema(many=True)