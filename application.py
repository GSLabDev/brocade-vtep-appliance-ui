from flask_socketio import SocketIO, emit
from flask import Flask, render_template
from threading import Thread
from submit_variables import submit_variables
import logs
from vni_mapping import vni_mapping
from log_reader import LogReader
import subprocess
from time import sleep

app = Flask(__name__)
socketio = SocketIO(app)
thread_day0 = Thread()
thread_day1 = Thread()
            
@app.route('/')
def index():
    """
        Renders the index page.
    """
    return render_template('index.html')

@socketio.on('connect', namespace='/submit')
def connect():
    """
        Starts 2 threads when client connects to server.
        Thread1: Sends log to day0 tab
        Thread2: Sends log to day1 tab
    """
    global thread_day0
    global thread_day1
    print('Client connected')
    if not thread_day0.isAlive():
        logfile = "/var/log/vdx.log"
        print "Starting Thread day0"
        thread_day0 = LogReader(socketio, logfile)
        thread_day0.start()
    if not thread_day1.isAlive():
        logfile = "/var/log/vdx_day1.log"
        print "Starting Thread day1"
        thread_day1 = LogReader(socketio, logfile)
        thread_day1.start()
        
@socketio.on('disconnect', namespace='/submit')
def disconnect():
    """
        Operations after client disconnect. 
    """
    print('Client disconnected')

@socketio.on('submit', namespace='/submit')
def submit(data):
    """
        Data submit operation for Day0
        Accepts data from client in json format.
        Validates it and put it in respective conf file.
    """
    output = submit_variables(data)
    if output is True:
        socketio.emit('submit', "Data submitted successfully", namespace='/submit')
    else:
        socketio.emit('submit', output, namespace='/submit')

@socketio.on('run', namespace='/submit')
def run(message):
    """
        Reload configurations from vdx.conf and nsx.conf file to stackstorm DB.
        Executes Day0 work flow.
    """
    print message
    socketio.emit('newline', "Reloading configs.", namespace='/submit')
    subprocess.Popen("st2ctl reload --register-configs", shell=True)
    sleep(5)
    subprocess.Popen("st2 run vdx.configure_vdx", shell=True)
    
@app.route('/dumplogs')
def renderDumpLogs():
    """
        Renders dump log page.
    """
    return render_template('dump_logs.html')
    
@socketio.on('dumplogs', namespace='/dumplogs')
def dumpLogs():
    """
        Reads all stackstorm action logs and
        Sends them to lump log page.
    """
    obj = logs.DumpLogs()
    for log_file in obj.sortLogFiles(search_dir):
        file_handler = open(log_file)
        loglines = obj.readLogLines(file_handler)
        for line in loglines:
            socketio.emit('dumplogs1', line, namespace='/dumplogs')
        file_handler.close()
        
@socketio.on('submit_mappings', namespace='/submit')
def submit_mappings(payload):
    """
        Operations for Day1.
        Accepts data in json format.
        Validates data and put it in respective conf files.
        reload configuration in stackstorm database.
        Executes Day1 workflow.
    """
    vni_mapping(payload, socketio)

    
    
if __name__ == '__main__':
    socketio.run(app,host='0.0.0.0')
