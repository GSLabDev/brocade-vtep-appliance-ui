# Copyright 2017 Great Software Laboratory Pvt. Ltd.
#
# Licensed under the Apache License, Version 2.0 (the "License"); you may
# not use this file except in compliance with the License. You may obtain
# a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
# License for the specific language governing permissions and limitations
# under the License.

import re
from os import listdir

class DumpLogs():
    def sortLogFiles(self, search_dir):
        """
            returns a list of stackstorm action's log files.
        """
        files = [search_dir + f for f in listdir(search_dir) if re.match(r"st2actionrunner.[0-9]{1,5}.log$", f)]
        return files
        
    def readLogLines(self, file_handler):
        """
            Reads log file line by line and return each line.
            If line size is greater than 4096 bytes, it will return link in chunks of 4096 bytes.
        """
        while True:
            line = file_handler.readline(4096)
            if not line:
                break
            yield line
        
        
    def dumpLogFiles(self):
        """
            Create a list of action's log files.
            Read each log file line by line.
            print each line.
            
            This function is only for testing. It does not execute in main program flow.
        """
        search_dir = "/var/log/st2/"
    
        for log_file in self.sortLogFiles(search_dir):
            file_handler = open(log_file)
            loglines = self.readLogLines(file_handler)
            for line in loglines:
                print line
            file_handler.close()
            
 