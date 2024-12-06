from app import create_app, db

app = create_app()

# Inicializar la base de datos antes de ejecutar la aplicación
with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
