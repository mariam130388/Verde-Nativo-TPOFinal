from app import db

class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100))
    email = db.Column(db.String(100))

    def _init_(self, nombre, email):
        self.nombre = nombre
        self.email=email