$(document).ready(function(){
    
    $('#vip_mask').on('change', function(){
        element = $('#vip_mask');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'VIP is mandatory field.');
        }
        else if (!validateIpCIDR(element.val())){
            validInput(element);
            invalidInput(element, 'Please enter valid virtual IP address. Ex. 10.254.4.110/20');
        }
        else{validInput(element);}
    });
    
    $('#mgmt_ip1').on('change', function(){
        element = $('#mgmt_ip1');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'Rbridge 1\'s Management IP is a mandatory field.');
        }
        else if (!validateIP(element.val())){
            validInput(element);
            invalidInput(element, 'Please enter valid Rbridge 1\'s IP address.Ex. 10.254.4.101');
        }
        else{validInput(element);}
    });
    
    $('#mgmt_ip2').on('change', function(){
        element = $('#mgmt_ip2');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'Rbridge 2\'s Management IP is a mandatory field.');
        }
        else if (!validateIP(element.val())){
            validInput(element);
            invalidInput(element, 'Please enter valid Rbridge 2\'s IP address.Ex. 10.254.4.102');
        }
        else{validInput(element);}
    });
    
    $('#username').on('change', function(){
        element = $('#username');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'Usename is a mandatory field.');
        }
        else{validInput(element);}
    });
    
    $('#password').on('change', function(){
        element = $('#password');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'Please provide a password.');
        }
        else{validInput(element);}
    });
    
    $('#intf_ip').on('change', function(){
        element = $('#intf_ip');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'Interface IP is a mandatory field.');
        }
        else if (!validateIpCIDR(element.val())){
            validInput(element);
            invalidInput(element, 'Please enter valid interface IP with its subnetmask. Ex. 2.2.2.1/32');
        }
        else{validInput(element);}
    });
    
    $('#intf_type').on('change', function(){
        element = $('#intf_type');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'Interface type is a mandatory field.');
        }
        else{validInput(element);}
    });
    
    $('#vlan').on('change', function(){
        element = $('#vlan');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'VLAN is a mandatory field.');
        }
        else if (!validateVLAN(element.val())){
            validInput(element);
            invalidInput(element, 'Please enter valid VLAN id. Ex. 1500');
        }
        else{validInput(element);}
    });
    
    $('#ve_vlan').on('change', function(){
        element = $('#ve_vlan');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'Transport VLAN is a mandatory field.');
        }
        else if (!validateVLAN(element.val())){
            validInput(element);
            invalidInput(element, 'Please enter valid Transport VLAN id. Ex. 10');
        }
        else{validInput(element);}
    });
    
    $('#nsx_cnt_ip').on('change', function(){
        element = $('#nsx_cnt_ip');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'NSX controller IP is a mandatory field.');
        }
        else if (!validateIP(element.val())){
            validInput(element);
            invalidInput(element, 'Please enter valid NSX controller IP address.Ex. 10.254.5.103');
        }
        else{validInput(element);}
    });
    
    $('#nsx_mgr_ip').on('change', function(){
        element = $('#nsx_mgr_ip');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'NSX manager IP is a mandatory field.');
        }
        else if (!validateIP(element.val())){
            validInput(element);
            invalidInput(element, 'Please enter valid NSX manager IP address.Ex. 10.254.5.103');
        }
        else{validInput(element);}
    });
    
    $('#nsx_mgr_user').on('change', function(){
        element = $('#nsx_mgr_user');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'NSX manager usename is a mandatory field.');
        }
        else{validInput(element);}
    });
    
    $('#nsx_mgr_pass').on('change', function(){
        element = $('#nsx_mgr_pass');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'Please provide a password.');
        }
        else{validInput(element);}
    });
    
    $('#lswitch_name').on('change', function(){
        element = $('#lswitch_name');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'Logical switch name is a mandatory field.');
        }
        else{validInput(element);}
    });
    
    $('#ve_ip').on('change', function(){
        element = $('#ve_ip');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'Ve Interface IP is a mandatory field.');
        }
        else if (!validateIpCIDR(element.val())){
            validInput(element);
            invalidInput(element, 'Please enter valid Ve Interface IP with its subnetmask. Ex. 172.168.100.1/24');
        }
        else{validInput(element);}
    });
    
    $('#vcenter_user').on('change', function(){
        element = $('#vcenter_user');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'vCenter usename is a mandatory field.');
        }
        else{validInput(element);}
    });
    
    $('#vcenter_pass').on('change', function(){
        element = $('#vcenter_pass');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'Please provide a password.');
        }
        else{validInput(element);}
    });
    
    $('#vcenter_url').on('change', function(){
        element = $('#vcenter_url');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'vCenter URL is a mandatory field.');
        }
        else if (!validateURL(element.val())){
            validInput(element);
            invalidInput(element, 'Please enter valid vCenter URL. Ex. http://example.com');
        }
        else{validInput(element);}
    });
    
    $('#d1_vip').on('change', function(){
        element = $('#d1_vip');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'VIP is mandatory field.');
        }
        else if (!validateIP(element.val())){
            validInput(element);
            invalidInput(element, 'Please enter valid virtual IP address. Ex. 10.254.4.110');
        }
        else{validInput(element);}
    });
    
    $('#d1_username').on('change', function(){
        element = $('#d1_username');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'Username is a mandatory field.');
        }
        else{validInput(element);}
    });
    
    $('#d1_password').on('change', function(){
        element = $('#d1_password');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'Please provide a password.');
        }
        else{validInput(element);}
    });
    
    $('#d1_overlay_gateway_name').on('change', function(){
        element = $('#d1_overlay_gateway_name');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'Overlay gateway name is a mandatory field.');
        }
        else{validInput(element);}
    });
    
    $('#d1_nsx_mgr_ip').on('change', function(){
        element = $('#d1_nsx_mgr_ip');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'NSX mgr ip is mandatory field.');
        }
        else if (!validateIP(element.val())){
            validInput(element);
            invalidInput(element, 'Please enter valid NSX manager IP address. Ex. 10.254.4.110');
        }
        else{validInput(element);}
    });
    
    $('#d1_nsx_mgr_user').on('change', function(){
        element = $('#d1_nsx_mgr_user');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'NSX mgr user is a mandatory field.');
        }
        else{validInput(element);}
    });
    
    $('#d1_nsx_mgr_pass').on('change', function(){
        element = $('#d1_nsx_mgr_pass');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'NSX mgr password is a mandatory field.');
        }
        else{validInput(element);}
    });
    
    $('#d1_switch_name').on('change', function(){
        element = $('#d1_switch_name');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'VCS switch name is a mandatory field.');
        }
        else{validInput(element);}
    });
    
    $('#d1_hardware_gateway_name').on('change', function(){
        element = $('#d1_hardware_gateway_name');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'Hardware gateway name is a mandatory field.');
        }
        else{validInput(element);}
    });
    
    $('#lswitch_name_1').on('change', function(){
        element = $('#lswitch_name_1');
        if(!checkNull(element.val())){
            validMapping($('#lswitch_name_1'));
            validMapping($('#tz_1'));
            validMapping($('#vlan_1'));
            validMapping($('#port_1'));
            invalidMapping(element, 'Minimun one mapping is required.');
        }
        else{validMapping(element);}
    });
    
    $('#tz_1').on('change', function(){
        element = $('#tz_1');
        if(!checkNull(element.val())){
            validMapping($('#lswitch_name_1'));
            validMapping($('#tz_1'));
            validMapping($('#vlan_1'));
            validMapping($('#port_1'));
            invalidMapping(element, 'Minimun one mapping is required.');
        }
        else{validMapping(element);}
    });
    
    $('#vlan_1').on('change', function(){
        element = $('#vlan_1');
        if(!checkNull(element.val())){
            validMapping($('#lswitch_name_1'));
            validMapping($('#tz_1'));
            validMapping($('#vlan_1'));
            validMapping($('#port_1'));
            invalidMapping(element, 'VLAN is a mandatory field.');
        }
        else if (!validateVLAN(element.val())){
            validMapping($('#lswitch_name_1'));
            validMapping($('#tz_1'));
            validMapping($('#vlan_1'));
            validMapping($('#port_1'));
            invalidMapping(element, 'Please enter valid VLAN id. Ex. 1500');
        }
        else{validMapping(element);}
    });
    
    $('#port_1').on('change', function(){
        element = $('#port_1');
        if(!checkNull(element.val())){
            validMapping($('#lswitch_name_1'));
            validMapping($('#tz_1'));
            validMapping($('#vlan_1'));
            validMapping($('#port_1'));
            invalidMapping(element, 'Minimun one mapping is required.');
        }
        else if(!validateLogicalSwitchPort(element.val())){
            validMapping($('#lswitch_name_1'));
            validMapping($('#tz_1'));
            validMapping($('#vlan_1'));
            validMapping($('#port_1'));
            invalidMapping(element, 'Please enter valid port. Ex. Port-12');
        }
        else{validMapping(element);}
    });
    
    $('#vcs_id').on('change', function(){
        element = $('#vcs_id');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'VCS id is a mandatory field.');
        }
        else if(!validateNumber(element.val())){
            validInput(element);
            invalidInput(element, 'VCS id should be a valid intiger.');
        }
        else{validInput(element);}
    });
    
    $('#rbridge_id1').on('change', function(){
        element = $('#rbridge_id1');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'Rbridge id 1 is a mandatory field.');
        }
        else if(!validateNumber(element.val())){
            validInput(element);
            invalidInput(element, 'Rbridge id 1 should be a valid intiger.');
        }
        else{validInput(element);}
    });
    
    $('#rbridge_id2').on('change', function(){
        element = $('#rbridge_id2');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'Rbridge id 2 is a mandatory field.');
        }
        else if(!validateNumber(element.val())){
            validInput(element);
            invalidInput(element, 'Rbridge id 2 should be a valid intiger.');
        }
        else{validInput(element);}
    });
    
    $('#intf_name').on('change', function(){
        element = $('#intf_name');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'Interface name is a mandatory field.');
        }
        else if(!validateNumber(element.val())){
            validInput(element);
            invalidInput(element, 'Interface name should be a valid intiger.');
        }
        else{validInput(element);}
    });
    
    $('#intf_type').on('change', function(){
        element = $('#intf_type');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'Interface type is a mandatory field.');
        }
        else if(element.val() != "loopback"){
            validInput(element);
            invalidInput(element, 'Right now only "loopback" interface type is allowd.');
        }
        else{validInput(element);}
    });
    
    $('#overlay_gateway_name').on('change', function(){
        element = $('#overlay_gateway_name');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'Overlay gateway name is a mandatory field.');
        }
        else{validInput(element);}
    });
    
    $('#nsx_cnt_name').on('change', function(){
        element = $('#nsx_cnt_name');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'NSX Controller name is a mandatory field.');
        }
        else{validInput(element);}
    });
    
    $('#nsx_cnt_port').on('change', function(){
        element = $('#nsx_cnt_port');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'NSX Controller name is a mandatory field.');
        }
        else if(!validatePort(element.val())){
            validInput(element);
            invalidInput(element, 'Port number should be in val range.(1-65535)');
        }
        else{validInput(element);}
    });
    
    $('#vcenter_name').on('change', function(){
        element = $('#vcenter_name');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'vCenter name is a mandatory field.');
        }
        else{validInput(element);}
    });
    
    $('#vtep_name').on('change', function(){
        element = $('#vtep_name');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'Hardware VTEP is a mandatory field.');
        }
        else{validInput(element);}
    });
    
    $('#port_name').on('change', function(){
        element = $('#port_name');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'Logical switch port is mandatory field.');
        }
        else if(!validateLogicalSwitchPort(element.val())){
            validInput(element);
            invalidInput(element, 'Enter valid port. Ex: Port-12');
        }
        else{validInput(element);}
    });
    
    $('#switch_name').on('change', function(){
        element = $('#switch_name');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'Hardware VTEP is a mandatory field.');
        }
        else{validInput(element);}
    });
    
    $('#hardware_gateway_name').on('change', function(){
        element = $('#hardware_gateway_name');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'Hardware VTEP is a mandatory field.');
        }
        else{validInput(element);}
    });
    
    $('#switch_port1').on('change', function(){
        element = $('#switch_port1');
        rb = $('#rbridge_id1').val();
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'Switch port 1 is a mandatory field.');
        }
        else if(!validateSwitchPort(element.val(), rb)){
            validInput(element);
            invalidInput(element, 'Please enter valid switch port.');
        }
        else{validInput(element);}
        
        
    });
    
    $('#switch_port2').on('change', function(){
        element = $('#switch_port2');
        rb = $('#rbridge_id2').val();
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'Switch port 2 is a mandatory field.');
        }
        else if(!validateSwitchPort(element.val(), rb)){
            validInput(element);
            invalidInput(element, 'Please enter valid switch port.');
        }
        else{validInput(element);}
    });
    
    /*$('#tz').on('change', function(){
        element = $('#tz');
        if(!checkNull(element.val())){
            validInput(element);
            invalidInput(element, 'Transport Zone is a mandatory field.');
        }
        else{validInput(element);}
    });*/
});

function invalidMapping(element, msg){
    element.css("border", function(){return "1px solid red";});
    var element_id = element.attr('id');
    var newlabel = $( "<label id='" + element_id + "_invalid' style='color:red; font-weight:500'>" + msg + "</label>" );
    $("#mapping_container").after(newlabel);
}

function validMapping(element){
    element.css("border", function(){return "1px solid #ccc";});
    element_rm_id = element.attr('id') + '_invalid';
    if($("#mapping_container").next().attr('id') == element_rm_id){$("#mapping_container").next().remove();}
    //document.getElementById('submit_mappings').disabled = false;
}

function invalidInput(element, msg){
    element.css("border", function(){return "1px solid red";});
    var element_id = element.attr('id');
    var newlabel = $( "<label id='" + element_id + "_invalid' style='color:red; font-weight:500'>" + msg + "</label>" );
    element.after(newlabel);
    //document.getElementById('submit_mappings').disabled = true;
}

function validInput(element){
    element.css("border", function(){return "1px solid #ccc";});
    element_rm_id = element.attr('id') + '_invalid';
    if(element.next().attr('id') == element_rm_id){element.next().remove();}
    //document.getElementById('submit_mappings').disabled = false;
}

function checkNull(elementVal){
    if(!elementVal){return false;}
    return true;
}

function validateIP(ip){
    var regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    if (!regex.test(ip)){return false;}
    return true;
}

function validateIpCIDR(ip){
    var regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\/(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    if (!regex.test(ip)){return false;}
    return true;
}

function validateVLAN(vlan){
    if(vlan != parseInt(vlan, 10)){return false;}
    if(parseInt(vlan, 10) < 1 || parseInt(vlan, 10) > 4094){return false;}
    return true;
}

function validatePort(port){
    if(port != parseInt(port, 10)){return false;}
    if(parseInt(port, 10) < 1 || parseInt(port, 10) > 65535){return false;}
    return true;
}

function validateNumber(number){
    regex = /^\d+$/
    if(!regex.test(number)){return false;}
    return true;
}

function validateLogicalSwitchPort(port){
    var regex = /^(Port-)([1-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|50)$/
    if (!regex.test(port)){return false;}
    return true;
}

function validateURL(url){
    var regex = /^(http|https):\/\/[^ "]+$/;
    if(!regex.test(url)){return false;}
    return true;
}

function validateSwitchPort(port, rb){
    split_str = port.split("/");
    if(split_str.length !== 3){return false;}
    if(split_str[0] !== rb){return false;}
    if(!validateNumber(split_str[1])){return false;}
    if(!validatePort(split_str[2])){return false;}
    return true
}

function day1_null_validation(){
    element = $('#d1_vip');
    if (!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'NSX mgr user is a mandatory field.');
        return false;
    }
    
    element = $('#d1_vip');
    if (!validateIP(element.val())){
        validInput(element);
        invalidInput(element, 'Please enter valid virtual IP address. Ex. 10.254.4.110');
        return false;
    }
    
    element = $('#d1_username');
    if (!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'Username is a mandatory field.');
        return false;
    }
    
    element = $('#d1_password');
    if (!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'Password is a mandatory field.');
        return false;
    }
    
    element = $('#d1_overlay_gateway_name');
    if (!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'Overlay gateway name is a mandatory field.');
        return false;
    }
    
    element = $('#d1_nsx_mgr_ip');
    if (!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'NSX mgr IP is a mandatory field.');
        return false;
    }
    
    element = $('#d1_nsx_mgr_ip');
    if (!validateIP(element.val())){
        validInput(element);
        invalidInput(element, 'Please enter valid NSX manager IP address. Ex. 10.254.4.110');
        return false;
    }
    
    element = $('#d1_nsx_mgr_user');
    if (!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'NSX mgr user is a mandatory field.');
        return false;
    }
    
    element = $('#d1_nsx_mgr_pass');
    if (!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'NSX mgr password is a mandatory field.');
        return false;
    }
    
    element = $('#d1_switch_name');
    if (!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'Switch name is a mandatory field.');
        return false;
    }
    
    element = $('#d1_hardware_gateway_name');
    if (!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'Hardware gateway name is a mandatory field.');
        return false;
    }
    
    element = $('#lswitch_name_1');
    if (!checkNull(element.val())){
        validMapping($('#lswitch_name_1'));
        validMapping($('#tz_1'));
        validMapping($('#vlan_1'));
        validMapping($('#port_1'));
        invalidMapping(element, 'Minimun one mapping is required.');
        return false;
    }
    
    /*element = $('#tz_1');
    if(!checkNull(element.val())){
        validMapping($('#lswitch_name_1'));
        validMapping($('#tz_1'));
        validMapping($('#vlan_1'));
        validMapping($('#port_1'));
        invalidMapping(element, 'Minimun one mapping is required.');
        return false;
    }*/
    
    element = $('#vlan_1');
    if (!checkNull(element.val())){
        validMapping($('#lswitch_name_1'));
        validMapping($('#tz_1'));
        validMapping($('#vlan_1'));
        validMapping($('#port_1'));
        invalidMapping(element, 'Minimun one mapping is required.');
        return false;
    }
    
    element = $('#vlan_1');
    if (!validateVLAN(element.val())){
        validMapping($('#lswitch_name_1'));
        validMapping($('#tz_1'));
        validMapping($('#vlan_1'));
        validMapping($('#port_1'));
        invalidMapping(element, 'Please enter valid VLAN id. Ex. 1500');
        return false;
    }
    
    element = $('#port_1');
    if (!checkNull(element.val())){
        validMapping($('#lswitch_name_1'));
        validMapping($('#tz_1'));
        validMapping($('#vlan_1'));
        validMapping($('#port_1'));
        invalidMapping(element, 'Minimun one mapping is required.');
        return false;
    }
    
    element = $('#port_1');
    if(!validateLogicalSwitchPort(element.val())){
        validMapping($('#lswitch_name_1'));
        validMapping($('#tz_1'));
        validMapping($('#vlan_1'));
        validMapping($('#port_1'));
        invalidMapping(element, 'Please enter valid port. Ex. Port-12');
        return false;
    }
        
    return true;
}


function day0_submit_validation(){

    element = $('#vip_mask');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'VIP is mandatory field.');
        return false;
    }
    
    element = $('#vip_mask');
    if (!validateIpCIDR(element.val())){
        validInput(element);
        invalidInput(element, 'Please enter valid virtual IP address. Ex. 10.254.4.110/20');
        return false;
    }
    
    element = $('#mgmt_ip1');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'Rbridge 1\'s Management IP is a mandatory field.');
        return false;
    }
    
    element = $('#mgmt_ip1');
    if (!validateIP(element.val())){
        validInput(element);
        invalidInput(element, 'Please enter valid Rbridge 1\'s IP address.Ex. 10.254.4.101');
        return false;
    }
    
    element = $('#mgmt_ip2');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'Rbridge 2\'s Management IP is a mandatory field.');
        return false;
    }
    
    element = $('#mgmt_ip2');
    if (!validateIP(element.val())){
        validInput(element);
        invalidInput(element, 'Please enter valid Rbridge 2\'s IP address.Ex. 10.254.4.102');
        return false;
    }
    
    element = $('#username');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'Usename is a mandatory field.');
        return false;
    }
    
    element = $('#password');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'Please provide a password.');
        return false;
    }

    element = $('#intf_ip');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'Interface IP is a mandatory field.');
        return false;
    }
    
    element = $('#intf_ip');
    if (!validateIpCIDR(element.val())){
        validInput(element);
        invalidInput(element, 'Please enter valid interface IP with its subnetmask. Ex. 2.2.2.1/32');
        return false;
    }
    
    element = $('#intf_type');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'Interface type is a mandatory field.');
        return false;
    }
    
    element = $('#vlan');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'VLAN is a mandatory field.');
        return false;
    }
    
    element = $('#vlan');
    if (!validateVLAN(element.val())){
        validInput(element);
        invalidInput(element, 'Please enter valid VLAN id. Ex. 1500');
        return false;
    }
    
    element = $('#ve_vlan');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'Transport VLAN is a mandatory field.');
        return false;
    }
    
    element = $('#ve_vlan');
    if (!validateVLAN(element.val())){
        validInput(element);
        invalidInput(element, 'Please enter valid Transport VLAN id. Ex. 10');
        return false;
    }

    element = $('#nsx_cnt_ip');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'NSX controller IP is a mandatory field.');
        return false;
    }
    
    element = $('#nsx_cnt_ip');
    if (!validateIP(element.val())){
        validInput(element);
        invalidInput(element, 'Please enter valid NSX controller IP address.Ex. 10.254.5.103');
        return false;
    }

    element = $('#nsx_mgr_ip');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'NSX manager IP is a mandatory field.');
        return false;
    }
    
    element = $('#nsx_mgr_ip');
    if (!validateIP(element.val())){
        validInput(element);
        invalidInput(element, 'Please enter valid NSX manager IP address.Ex. 10.254.5.103');
        return false;
    }

    element = $('#nsx_mgr_user');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'NSX manager usename is a mandatory field.');
        return false;
    }
    
    element = $('#nsx_mgr_pass');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'Please provide a password.');
        return false;
    }

    element = $('#lswitch_name');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'Logical switch name is a mandatory field.');
        return false;
    }

    element = $('#ve_ip');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'Ve Interface IP is a mandatory field.');
        return false;
    }
    
    element = $('#ve_ip');
    if (!validateIpCIDR(element.val())){
        validInput(element);
        invalidInput(element, 'Please enter valid Ve Interface IP with its subnetmask. Ex. 172.168.100.1/24');
        return false;
    }

    element = $('#vcenter_user');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'vCenter usename is a mandatory field.');
        return false;
    }

    element = $('#vcenter_pass');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'Please provide a password.');
        return false;
    }

    element = $('#vcenter_url');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'vCenter URL is a mandatory field.');
        return false;
    }
    
    element = $('#vcenter_url');
    if (!validateURL(element.val())){
        validInput(element);
        invalidInput(element, 'Please enter valid vCenter URL. Ex. http://example.com');
        return false;
    }

    element = $('#vcs_id');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'VCS id is a mandatory field.');
        return false;
    }
    
    element = $('#vcs_id');
    if(!validateNumber(element.val())){
        validInput(element);
        invalidInput(element, 'VCS id should be a valid intiger.');
        return false;
    }
    
    element = $('#rbridge_id1');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'Rbridge id 1 is a mandatory field.');
        return false;
    }
    
    element = $('#rbridge_id1');
    if(!validateNumber(element.val())){
        validInput(element);
        invalidInput(element, 'Rbridge id 1 should be a valid intiger.');
        return false;
    }

    element = $('#rbridge_id2');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'Rbridge id 2 is a mandatory field.');
        return false;
    }
    
    element = $('#rbridge_id2');
    if(!validateNumber(element.val())){
        validInput(element);
        invalidInput(element, 'Rbridge id 2 should be a valid intiger.');
        return false;
    }

    element = $('#intf_name');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'Interface name is a mandatory field.');
        return false;
    }
    
    element = $('#intf_name');
    if(!validateNumber(element.val())){
        validInput(element);
        invalidInput(element, 'Interface name should be a valid intiger.');
        return false;
    }

    element = $('#intf_type');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'Interface type is a mandatory field.');
        return false;
    }
    
    element = $('#intf_type');
    if(element.val() != "loopback"){
        validInput(element);
        invalidInput(element, 'Right now only "loopback" interface type is allowd.');
        return false;
    }
    
    element = $('#overlay_gateway_name');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'Overlay gateway name is a mandatory field.');
        return false;
    }

    element = $('#nsx_cnt_name');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'NSX Controller name is a mandatory field.');
        return false;
    }

    element = $('#nsx_cnt_port');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'NSX Controller name is a mandatory field.');
        return false;
    }
    
    element = $('#nsx_cnt_port');
    if(!validatePort(element.val())){
        validInput(element);
        invalidInput(element, 'Port number should be in val range.(1-65535)');
        return false;
    }

    element = $('#vcenter_name');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'vCenter name is a mandatory field.');
        return false;
    }

    element = $('#vtep_name');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'Hardware VTEP is a mandatory field.');
        return false;
    }

    element = $('#port_name');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'Logical switch port is mandatory field.');
        return false;
    }
    
    element = $('#port_name');
    if(!validateLogicalSwitchPort(element.val())){
        validInput(element);
        invalidInput(element, 'Enter valid port. Ex: Port-12');
        return false;
    }

    element = $('#switch_name');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'Hardware VTEP is a mandatory field.');
        return false;
    }

    /*element = $('#hardware_gateway_name');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'Hardware VTEP is a mandatory field.');
        return false;
    }*/

    element = $('#switch_port1');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'Switch port 1 is a mandatory field.');
        return false;
    }
    
    element = $('#switch_port1');
    rb = $('#rbridge_id1').val();
    if(!validateSwitchPort(element.val(), rb)){
        validInput(element);
        invalidInput(element, 'Please enter valid switch port.');
        return false;
    }

    element = $('#switch_port2');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'Switch port 2 is a mandatory field.');
        return false;
    }
    
    element = $('#switch_port2');
    rb = $('#rbridge_id2').val();
    if(!validateSwitchPort(element.val(), rb)){
        validInput(element);
        invalidInput(element, 'Please enter valid switch port.');
        return false;
    }
    
    /*element = $('#tz');
    if(!checkNull(element.val())){
        validInput(element);
        invalidInput(element, 'Transport Zone is a mandatory field.');
        return false;
    }*/
    return true
}