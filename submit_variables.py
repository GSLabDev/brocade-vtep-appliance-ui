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

import iptools
from ruamel import yaml

"""
    Create 2 lists of configuration parameters.
        vdx_params: Parameters in this list will go to vdx.conf files.
        nsx_params: Parameters in this list will go to nsx.conf files.
"""
vdx_params = ["vip","mgmt_ip1","mgmt_ip2","vcs_id","username","password","rbridge_id1","rbridge_id2",
                    "vip_mask","intf_name","intf_ip","intf_type","overlay_gateway_name","vlan","nsx_cnt_name",
                    "nsx_cnt_ip","nsx_cnt_port","ve_vlan","ve_ip","vcenter_name","vcenter_user","vcenter_pass",
                    "vcenter_url", "intf_name1", "intf_name2"]
nsx_params = ["nsx_mgr_ip","nsx_mgr_user","nsx_mgr_pass","vtep_name","lswitch_name","vlan","port_name","switch_name",
                    "hardware_gateway_name", "tz"]
                    
def switchportValidator(port, rbridgeid):
    blocks = port.split('/')
    if len(blocks) != 3: return False
    if not blocks[0].isdigit(): return False
    if (blocks[0] != rbridgeid): return False
    if not blocks[1].isdigit(): return False
    if not blocks[2].isdigit(): return False
    
    return True
    
def intfValidator(intf):
    if not intf.isdigit(): return False
    if int(intf) < 0 or int(intf) > 255: return False
    
    return True

def rbridgeidValidator(rbridgeid):
    if not rbridgeid.isdigit(): return False
    if int(rbridgeid) < 0 or int(rbridgeid) > 239: return False
    
    return True
    
def vlanValidator(vlan):
    if not vlan.isdigit(): return False
    if int(vlan) < 1 or int(vlan) > 4096: return False
    
    return True
    
def portValidator(port):
    if not port.isdigit(): return False
    if int(port) < 1 or int(port) > 65535: return False
    
    return True
    
def portNameValidator(port_name):
    blocks = port_name.split('-')
    if len(blocks) != 2: return False
    if blocks[0] != 'Port': return False
    if portValidator(blocks[1]) is False: return False
    
    return True
    
def validators(data):
    """
        Validator function.
        This will validate each configuration parameter before putting it in configuration file.
        * Few newly added parameters are not getting validated yet, but client side validations \
        are enabled for each parameter.
    """
    if iptools.ipv4.validate_ip(data['vip']) is False: return("Please enter valid virtual IP.")
    if iptools.ipv4.validate_ip(data['mgmt_ip1']) is False: return("Please enter valid Rbridge 1 IP.")
    if iptools.ipv4.validate_ip(data['mgmt_ip2']) is False: return("Please enter valid Rbridge 2 IP.")
    if iptools.ipv4.validate_ip(data['nsx_cnt_ip']) is False: return("Please enter valid NSX Controller IP.")
    if iptools.ipv4.validate_cidr(data['intf_ip']) is False: return("Please enter valid interface IP.")
    if iptools.ipv4.validate_cidr(data['ve_ip']) is False: return("Please enter valid VE interface with its netmask IP.")
    if iptools.ipv4.validate_cidr(data['vip_mask']) is False: return("Please enter valid virtual IP netmask.")
    if switchportValidator(data['intf_name1'], data['rbridge_id1']) is False: return("Please enter valid switch port 1 of Rbridge 1.")
    if switchportValidator(data['intf_name2'], data['rbridge_id2']) is False: return("Please enter valid switch port 2 of Rbridge 1.")
    if intfValidator(data['intf_name']) is False: return("Please enter valid interface name.")
    if rbridgeidValidator(data['rbridge_id1']) is False: return("Please enter valid Rbridge-1 id.")
    if rbridgeidValidator(data['rbridge_id2']) is False: return("Please enter valid Rbridge-2 id.")
    if data['username'] is False: return("Please enter valid VDX switch user name.")
    if data['password'] is False: return("Please enter valid VDX switch password.")
    if data['nsx_cnt_name'] is False: return("Please enter valid NSX controller name.")
    if data['overlay_gateway_name'] is False: return("Please enter valid overlay gateway name.")
    if data['vcenter_name'] is False: return("Please enter valid vCenter name.")
    if data['vcenter_pass'] is False: return("Please enter valid vCenter password.")
    if data['vcenter_user'] is False: return("Please enter valid vCenter user name.")
    if data['vcenter_url'] is False: return("Please enter valid vCenter URL.")
    if data['vcs_id'] is False: return("Please enter valid VCS id.")
    if vlanValidator(data['ve_vlan']) is False: return("Please enter valid transport VLAN id.")
    if vlanValidator(data['vlan']) is False: return("Please enter valid VLAN id.")
    if portValidator(data['nsx_cnt_port']) is False: return("Please enter valid NSX controller port.")
    if data['lswitch_name'] is False: return("Please enter valid logical switch name.")
    if data['nsx_mgr_pass'] is False: return("Please enter valid NSX manager password.")
    if data['nsx_mgr_user'] is False: return("Please enter valid NSX username.")
    if portNameValidator(data['port_name']) is False: return("Please enter valid NSX controller port.")
    if data['switch_name'] is False: return("Please enter valid switch name.")
    if data['vtep_name'] is False: return("Please enter valid VTEP name.")
    if data['intf_type'] is False: return("Please enter valid interface type.")
    if iptools.ipv4.validate_ip(data['nsx_mgr_ip']) is False: return("Please enter valid NSX manager ip.")
    
    return True

def submit_variables(data):
    """
        Accepts configuration parameters in json format.
        Validates each parameter.
        Stores Parameters in there respective configuration files(vdx.conf, nsx.conf).
    """
    output = validators(data)
    if output is not True: return output
    
    vdx_dict = {}
    nsx_dict = {}
    for key in data:
        if key in vdx_params:
            vdx_dict[key] = data[key]
            
        if key in nsx_params:
            nsx_dict[key] = data[key]
            
    with open('/opt/stackstorm/configs/vdx.yaml', 'w') as outfile:
        yaml.safe_dump(vdx_dict, outfile, default_flow_style=False, explicit_start=True, indent=4)
        
    with open('/opt/stackstorm/configs/nsx.yaml', 'w') as outfile:
        yaml.safe_dump(nsx_dict, outfile, default_flow_style=False, explicit_start=True, indent=4)
        
    return True