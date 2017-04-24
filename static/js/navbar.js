$(document).ready(function(){
    
    document.getElementById('day0').style.borderBottom = "1px solid #FFF";
    document.getElementById('day1').style.borderBottom = "none";
    document.getElementById('day1_content').style.display = 'none';
    document.getElementById('day0_content').style.display = 'inline';
    
    $("#day0").on('click', function(){
        document.getElementById('day0').style.borderBottom = "1px solid #FFF";
        document.getElementById('day1').style.borderBottom = "none";
        document.getElementById('day1_content').style.display = 'none';
        document.getElementById('day0_content').style.display = 'inline';
    });
    
    $("#day1").on('click', function(){
        document.getElementById('day0').style.borderBottom = "none";
        document.getElementById('day1').style.borderBottom = "1px solid #FFF";
        document.getElementById('day0_content').style.display = 'none';
        document.getElementById('day1_content').style.display = 'inline';
    });
});