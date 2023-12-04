from app import db

class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    usuario = db.Column(db.String(100))
    contraseña = db.Column(db.String(8))
    es_administrador= db.Column(db.Boolean, default=False)

    def __init__(self, usuario, contraseña, es_administrador=False):
        self.usuario = usuario
        self.contraseña=contraseña
        self.es_administrador = es_administrador