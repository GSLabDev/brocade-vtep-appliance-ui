$(document).ready(function(){
    
    //connect to the socket server.
    var socket = io.connect('http://' + document.domain + ':' + location.port + '/submit');
    
    //declare global variables
    var mapping_number = 1;
    var mapping_stack = new Array();

    //receive details from server
    socket.on('newline', function(line_received) {
        
        line_received = line_received.trim();
        line_split = line_received.split(':');
        
        if(line_split[1] === ' Success'){
            line_print = '<p>' + line_split[0] + ': <label class="success-log">' + line_split[1] + '</label></p>';   
        } else if(line_split[1] === ' Failed') {
            line_print = '<p>' + line_split[0] + ': <label class="failed-log">' + line_split[1] + '</label></p>';
        } else {
            line_print = '<p>' + line_received + '<p>';
        }
        
        $('#log').append(line_print);
        
        
        if (line_received === 'Exiting') {
            document.getElementById('loader').style.visibility = 'hidden';
            document.getElementById('day1_loader').style.visibility = 'hidden';
            document.getElementById('submit_mappings').disabled = false;
        } else {
            document.getElementById('loader').style.visibility = 'visible';
        }
        document.getElementById("logs-outer").scrollTop = document.getElementById("logs-outer").scrollHeight;
    });
    
    socket.on('day1_log', function(line_received) {
        line_received = line_received.trim();
        line_split = line_received.split(':');
        
        if(line_split[1] === ' Success'){
            line_print = '<p>' + line_split[0] + ': <label class="success-log">' + line_split[1] + '</label></p>';   
        } else if(line_split[1] === ' Failed') {
            line_print = '<p>' + line_split[0] + ': <label class="failed-log">' + line_split[1] + '</label></p>';
        } else {
            line_print = '<p>' + line_received + '<p>';
        }
        
        $('#day1_log').append(line_print);
        
        if (line_received === 'Exiting') {
            document.getElementById('day1_loader').style.visibility = 'hidden';
            document.getElementById('submit_mappings').disabled = false;
        }
        else if (line_received === 'Aborting') {
            document.getElementById('day1_loader').style.visibility = 'hidden';
            document.getElementById('submit_mappings').disabled = false;
        }
        else {
            document.getElementById('day1_loader').style.visibility = 'visible';
        }
        document.getElementById("day1_logs-outer").scrollTop = document.getElementById("day1_logs-outer").scrollHeight;
    });
    
    socket.on('submit', function(line_received){
        if (line_received === 'Data submitted successfully') {
            document.getElementById('run').disabled = false;
            line_print = '<p><label class="success-log">' + line_received + '</label></p>';
        } else {
            document.getElementById('run').disabled = true;
            line_print = '<p><label class="failed-log">' + line_received + '</label></p>';
        }
        $('#log').append(line_print);
        
        if (line_received === 'Exiting') {
            document.getElementById('day1_loader').style.visibility = 'hidden';
            document.getElementById('submit_mappings').disabled = false;
        } else {
            document.getElementById('day1_loader').style.visibility = 'visible';
            document.getElementById('submit_mappings').disabled = true;
        }
        document.getElementById("logs-outer").scrollTop = document.getElementById("logs-outer").scrollHeight;
        
    });

     socket.on('run', function(ret){
        console.log(ret);
    });

    $("#submit").on('click',function(){
        
        document.getElementById('loader').style.visibility = 'hidden';
        result = day0_submit_validation();
        console.log(result);
        if (result == true){
            var day0_payload = get_day0_payload();
            console.log(day0_payload);
            socket.emit('submit', day0_payload);
            document.getElementById('run').disabled = false;
        }  
        else{
            console.log("Data validation failed.");
            document.getElementById('run').disabled = true;
        }
        
    });

    $("#run").on('click',function(){
        socket.emit('run', "Run");
        document.getElementById('run').disabled = true;
    });
    
    $("#logs").on('click', function(){
        socket.emit('dumpLogs');
    });
    
    $('#add').on('click', function() {
        mapping_number++;
        var newMapping = addMapping(mapping_number);
        mapping_stack.push(newMapping);
    });
    
    $('#remove').on('click', function() {
        var lastMapping = mapping_stack.pop();
        removeMapping(lastMapping);
        mapping_number--;
    });
    
    function addMapping(mapping_number){
        var lswitch = document.createElement('input');
        lswitch.id = 'lswitch_name_'.concat(mapping_number);
        lswitch.className = 'mapping_inputs';
        lswitch.type = 'text';
        lswitch.placeholder = 'Logical Switch Name';
        document.getElementById('mapping_container').appendChild(lswitch);
        
        /*
        var tz = document.createElement('input');
        tz.id = 'tz_'.concat(mapping_number);
        tz.className = 'mapping_inputs';
        tz.type = 'text';
        tz.placeholder = 'Transport Zone';
        document.getElementById('mapping_container').appendChild(tz);
        */
       
        var vlan = document.createElement('input');
        vlan.id = 'vlan_'.concat(mapping_number);
        vlan.className = 'mapping_inputs';
        vlan.type = 'text';
        vlan.placeholder = 'VLAN ID';
        document.getElementById('mapping_container').appendChild(vlan);
        
        var port = document.createElement('input');
        port.id = 'port_'.concat(mapping_number);
        port.className = 'mapping_inputs';
        port.type = 'text';
        port.placeholder = 'Port';
        document.getElementById('mapping_container').appendChild(port);
        
        return [lswitch, vlan, port];
    }
    
    function removeMapping(lastMapping){
        document.getElementById('mapping_container').removeChild(lastMapping[0]);
        //document.getElementById('mapping_container').removeChild(lastMapping[1]);
        document.getElementById('mapping_container').removeChild(lastMapping[1]);
        document.getElementById('mapping_container').removeChild(lastMapping[2]);
    }
    
    $('#submit_mappings').on('click', function() {
        if (day1_null_validation() == true){
            var payload = getPayload();
            socket.emit('submit_mappings', payload);
            document.getElementById('submit_mappings').disabled = true;
            document.getElementById('day1_loader').style.visibility = 'visible'; 
        }
    });
    
    function getPayload(){
        var lswitch = document.getElementById('lswitch_name_1').value;
        //var tz = document.getElementById('tz_1').value;
        var vlan = document.getElementById('vlan_1').value;
        var port = document.getElementById('port_1').value;
        
        var d1_vip = $("#d1_vip").val();
        
        
        var payload = {
            vip: $("#d1_vip").val(),
            username: $("#d1_username").val(),
            password: $("#d1_password").val(),
            overlay_gateway_name: $("#d1_overlay_gateway_name").val(),
            nsx_mgr_ip: $("#d1_nsx_mgr_ip").val(),
            nsx_mgr_user: $("#d1_nsx_mgr_user").val(),
            nsx_mgr_pass: $("#d1_nsx_mgr_pass").val(),
            lswitch_name: $("#d1_lswitch_name").val(),
            switch_name: $("#d1_switch_name").val(),
            hardware_gateway_name : $("#d1_hardware_gateway_name").val(),
            mapping1: { lswitch : lswitch, vlan: vlan, port: port } 
        }
        
        var count = 2;
        mapping_stack.forEach(function(element) {
            var lswitch = document.getElementById(element[0].id).value;
            //var tz = document.getElementById(element[1].id).value;
            var vlan = document.getElementById(element[1].id).value;
            var port = document.getElementById(element[2].id).value;
            
            if (lswitch && vlan && port){
                payload['mapping' + count] = { lswitch : lswitch, vlan : vlan, port: port };
            }
            count++;
        });
        return payload;
    }
    
});


function get_ip(ip_mask){
    ip = ip_mask.split("/");
    return ip[0];
}


function get_day0_payload(){
    
    var vip_mask = $("#vip_mask").val();
    var vip = get_ip($("#vip_mask").val());
    var mgmt_ip1 = $("#mgmt_ip1").val();
    var mgmt_ip2 = $("#mgmt_ip2").val();
    var username = $("#username").val();
    var password = $("#password").val();
    var intf_ip = $("#intf_ip").val();
    var intf_type = $("#intf_type").val();
    var vlan = $("#vlan").val();
    var nsx_cnt_ip = $("#nsx_cnt_ip").val();
    var ve_ip = $("#ve_ip").val();
    var ve_vlan = $("#ve_vlan").val();
    var vcenter_user = $("#vcenter_user").val();
    var vcenter_pass = $("#vcenter_pass").val();
    var vcenter_url = $("#vcenter_url").val();
    var nsx_mgr_ip = $("#nsx_mgr_ip").val();
    var nsx_mgr_user = $("#nsx_mgr_user").val();
    var nsx_mgr_pass = $("#nsx_mgr_pass").val();
    var lswitch_name = $("#lswitch_name").val();
    var switch_port1 = $("#switch_port1").val();
    var switch_port2 = $("#switch_port2").val();
    var vcs_id = $("#vcs_id").val();
    var rbridge_id1 = $("#rbridge_id1").val();
    var rbridge_id2 = $("#rbridge_id2").val();
    var intf_name = $("#intf_name").val();
    var overlay_gateway_name = $("#overlay_gateway_name").val();
    var nsx_cnt_name = $("#nsx_cnt_name").val();
    var nsx_cnt_port = $("#nsx_cnt_port").val();
    var vcenter_name = $("#vcenter_name").val();
    var vtep_name = $("#vtep_name").val();
    var port_name = $("#port_name").val();
    var switch_name = $("#switch_name").val();
    
                
	var data = {
        "vip"  : vip,
        "mgmt_ip1" : mgmt_ip1,
        "mgmt_ip2" : mgmt_ip2,
        "vcs_id" : vcs_id,
        "username" : username,
        "password" : password,
        "rbridge_id1" : rbridge_id1,
        "rbridge_id2" : rbridge_id2,
        "vip_mask" : vip_mask,
        "intf_name" : intf_name,
        "intf_ip" : intf_ip,
        "intf_type" : intf_type,
        "overlay_gateway_name" : overlay_gateway_name,
        "vlan" : vlan,
        "nsx_cnt_name" : nsx_cnt_name,
        "nsx_cnt_ip" : nsx_cnt_ip,
        "nsx_cnt_port" : nsx_cnt_port,
        "ve_vlan" : ve_vlan,
        "ve_ip" : ve_ip,
        "vcenter_name" : vcenter_name,
        "vcenter_user" : vcenter_user,
        "vcenter_pass" : vcenter_pass,
        "vcenter_url" : vcenter_url,
        "nsx_mgr_ip" : nsx_mgr_ip,
        "nsx_mgr_user" : nsx_mgr_user,
        "nsx_mgr_pass" : nsx_mgr_pass,
        "vtep_name" : vtep_name,
        "lswitch_name" : lswitch_name,
        "port_name" : port_name,
        "switch_name" : switch_name,
        "intf_name1" : switch_port1,
        "intf_name2" : switch_port2
    }
        
    return data;
}