from flask import Blueprint, request, jsonify, render_template
from .models import User, Project, Task
from . import db

main = Blueprint('main', __name__)

@main.route('/register')
def register():
    return render_template('register.html')

@main.route('/users', methods=['POST'])
def create_user():
    data = request.json
    new_user = User(name=data['name'], email=data['email'], password=data['password'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User created successfully'}), 201

@main.route('/projects', methods=['POST'])
def create_project():
    data = request.json
    new_project = Project(name=data['name'], created_by=data['created_by'])
    db.session.add(new_project)
    db.session.commit()
    return jsonify({'message': 'Project created successfully'}), 201

@main.route('/tasks', methods=['POST'])
def create_task():
    data = request.json
    new_task = Task(
        title=data['title'],
        description=data['description'],
        project_id=data['project_id'],
        assigned_to=data['assigned_to']
    )
    db.session.add(new_task)
    db.session.commit()
    return jsonify({'message': 'Task created successfully'}), 201
