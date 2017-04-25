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

"""
Implements logic for day1 oprations.
"""
from ruamel import yaml
import re
import subprocess
import os
from time import sleep

def create_configs(payload, socketio):
    """
    Accepts configuration parameters in json format.
    And store them in there respective configuration files(vdx.conf, nsx.conf).
    """
    vdx_params = ["vip", "username", "password", "overlay_gateway_name"]
    nsx_params = ["nsx_mgr_ip", "nsx_mgr_user", "nsx_mgr_pass", "lswitch_name", "switch_name", "hardware_gateway_name"]
    
    vdx_dict = {}
    nsx_dict = {}
    for key in payload:
        if key in vdx_params:
            vdx_dict[key] = payload[key]
            
        if key in nsx_params:
            nsx_dict[key] = payload[key]
            
    with open('/opt/stackstorm/configs/vdx_vtep.yaml', 'w') as outfile:
        yaml.safe_dump(vdx_dict, outfile, default_flow_style=False, explicit_start=True, indent=4)
        
    with open('/opt/stackstorm/configs/nsx_vtep.yaml', 'w') as outfile:
        yaml.safe_dump(nsx_dict, outfile, default_flow_style=False, explicit_start=True, indent=4)
        
    socketio.emit('day1_log', "Data submitted successfully", namespace='/submit')
    return True
    
def reload_configs():
    """
        Reloads configuration parameters in stackstorm database from configuration files.
    """
    os.system("st2ctl reload --register-configs")
    
def run_workflow(lswitch, vlan, port):
    """
        Execute day1 workflow which will configure VNI to VLAN mapping.
    """
    workflow_cmd = "st2 run vdx_vtep.attach_vlan_to_gw_workflow lswitch_name=%s vlan=%s port=%s" % (lswitch, vlan, port)
    subprocess.Popen(workflow_cmd, shell=True)
    
    
def configure_mapping(payload):
    """
        Calls day1 workflow for each VNI to VLAN mapping.
        If there are n number of mappings then it will call workflow n times.
    """
    flag = True
    for k, v in payload.iteritems():
        if re.search("mapping[1-9]", k):
            lswitch = v.pop('lswitch', None)
            vlan = v.pop('vlan', None)
            port = v.pop('port', None)
            run_workflow(lswitch, vlan, port)
            sleep(10)
            

def vni_mapping(payload, socketio):
    """
        Main function of this module.
            1. Accepts configuration parameters in json format.
            2. Creates configuration files.
            3. Execute workflow.
    """
    create_configs(payload, socketio)
    reload_configs()
    configure_mapping(payload)
