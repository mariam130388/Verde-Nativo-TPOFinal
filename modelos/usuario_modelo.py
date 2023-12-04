from app import db, ma, app

class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    usuario = db.Column(db.String(100))
    contraseña = db.Column(db.String(8))
    es_administrador= db.Column(db.Boolean, default=False)

    def __init__(self, usuario, contraseña, es_administrador=False):
        self.usuario = usuario
        self.contraseña=contraseña
        self.es_administrador = es_administrador
        
        
with app.app_context():
    db.create_all() 
    

class UsuarioSchema(ma.Schema):
    class Meta:
        fields=('id','usuario','contraseña','es_administrador')
        
usuario_schema=UsuarioSchema()            # El objeto usuario_schema es para traer un usuario
usuarios_schema=UsuarioSchema(many=True)