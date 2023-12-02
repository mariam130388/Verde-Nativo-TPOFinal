from app import db

class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    usuario = db.Column(db.String(100))
    contraseña = db.Column(db.Integer(100))
    es_administrador= db.Column(db.Integer(1))

    def _init_(self, usuario, contraseña, es_administrador):
        self.usuario = usuario
        self.contraseña=contraseña
        self.es_administrador = es_administrador