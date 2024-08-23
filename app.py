from flask import Flask,render_template,request, jsonify
from flask_cors import CORS
# import pandas as pd
app=Flask(__name__)
CORS(app)

@app.route('/funcion1', methods=['POST'])
def funcion1():
    datos = request.json
    campo1 = datos.get('apellido')
    campo2 = datos.get('nombre')
    # Realizar alguna acción con los datos recibidos
    resultado = f'Campo 1: {campo1}, Campo 2: {campo2}'
    print (resultado)
    return jsonify({'resultado': resultado})

# @app.route('/upload', methods=['POST'])
# def upload_file():
#     uploaded_file = request.files['file']
#     if uploaded_file:
#         # Guardar el archivo en el servidor
        
#         file_path = uploaded_file.filename
#         uploaded_file.save(file_path)

#         # Leer el archivo Excel y convertirlo a un DataFrame de pandas
#         df = pd.read_excel(file_path)
#         my_cols = [{"title": col} for col in df.columns]
#         # Convertir el DataFrame a un diccionario de Python
#         data = df.to_dict(orient='records')
#         print (data)
#         # Retornar los datos en formato JSON
#         # return jsonify(data)
#         return render_template('layout.html', my_data=data, my_cols=my_cols)
#     else:
#         print("BBBBBBBBBB")
#         return 'No se ha seleccionado ningún archivo.'
@app.route('/upload', methods=['POST'])
def upload_file():
    uploaded_file = request.files['file']
    if uploaded_file:
        # Guardar el archivo en el servidor
        
        file_path = uploaded_file.filename
        uploaded_file.save(file_path)

        # Leer el archivo Excel y convertirlo a un DataFrame de pandas
        df = pd.read_excel(file_path)
        my_cols = [{"title": col} for col in df.columns]
        # Convertir el DataFrame a un diccionario de Python
        data = df.to_dict(orient='records')
        print (data)
        # Retornar los datos en formato JSON
        # return jsonify(data)
        return render_template('layout.html', data=data, my_cols=my_cols)
    else:
        print("BBBBBBBBBB")
        return 'No se ha seleccionado ningún archivo.'
# @app.route('/upload', methods=['POST'])
# def upload_file():
#     print("antes")
#     uploaded_file = request.files['file']
#     if uploaded_file:
#         # Guardar el archivo en el servidor
#         file_path = uploaded_file.filename
#         uploaded_file.save(file_path)

#         # Leer el archivo Excel y convertirlo a un DataFrame de pandas
#         df = pd.read_excel(file_path)

#         # Convertir el DataFrame a un diccionario de Python
#         data = df.to_dict(orient='records')
        
#         # Retornar los datos en formato JSON
#         print("bien")
#         return jsonify(data)
#     else:
#         print("bbbbbbbbbbb")
#         return 'No se ha seleccionado ningún archivo.'        
        
    
    
@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        user_input = request.form.get("user_text")
        print(f"Texto ingresado: {user_input}")
        return render_template("layout.html") 
    else:
        return render_template("layout.html")


if __name__=='__main__':
    app.run(host='0.0.0.0', port=5000,debug=True)


    # app.py
# <form method="POST">
#         <input type="text" name="user_text">
#         <button type="submit">Enviar</button>
# </form>




















































































































































#.
