from threading import Thread
from time import sleep
import os

class LogReader(Thread):
    """
        Implements the logic to send day0 and day1 workflow's log to client.
    """
    def __init__(self, socketio, logfile):
        self.delay = 1
        super(LogReader, self).__init__()
        self.socketio = socketio
        self.logfile = logfile

    def tailf(self):
        """
            Reads logs from log files(vdx.log, vdx_day1.log) line by line.
            Sends each log line to client.
            If log line is from day0 log file, it will send logs to day0 tab.
            If log line is from day1 log file, it will send logs to day1 tab.
        """
        file = open(self.logfile, 'w+')
        file.close()
        os.chmod(self.logfile, 0666)
        def follow(thefile):
            """
                Reads newly added log lines in log files each second.
            """
            thefile.seek(0,2)      # Go to the end of the file
            while True:
                line = thefile.readline()
                if not line:
                    sleep(1)    # Sleep briefly
                    continue
                yield line

        logfile = open(self.logfile)
        loglines = follow(logfile)
        for line in loglines:
            if self.logfile == "/var/log/vdx.log":
                self.socketio.emit('newline', line, namespace='/submit')
                print line
            elif self.logfile == "/var/log/vdx_day1.log":
                self.socketio.emit('day1_log', line, namespace='/submit')
                print line

    def run(self):
        """
            Starts the thread.
        """
        self.tailf()